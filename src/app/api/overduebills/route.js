import cron from "node-cron";
import { connectMongoDB } from "../../../../lib/mongodb";
import Bill from "../../../../models/bill";
import Mt5_account from "../../../../models/mt5account";
import Subscribe from "../../../../models/subscribe";
import moment from "moment";
import { NextResponse } from "next/server";

const checkOverdueBills = async () => {
    try {
        await connectMongoDB();
        const today = moment().startOf("day").toDate(); // Get today's date at 00:00

        // Find overdue bills first
        const overdueBills = await Bill.find({
            due_date: { $lt: today },
            status: "Unpaid",
        });

        if (overdueBills.length === 0) {
            console.log("No overdue bills found.");
            return;
        }

        console.log(`Found ${overdueBills.length} overdue bills.`);

        // Update overdue bills
        await Bill.updateMany(
            { _id: { $in: overdueBills.map((bill) => bill._id) } },
            { $set: { status: "Expired" } }
        );

        console.log(`Updated ${overdueBills.length} overdue bills.`);

        // Ban related MT5 accounts
        const mt5_ids = overdueBills.map((bill) => bill.mt5_id); // Ensure you're using the correct field

        const result = await Mt5_account.updateMany(
            { mt5_id: { $in: mt5_ids } },
            { $set: { status: "banned" } }
        );

        console.log(`Banned ${result.modifiedCount} MT5 accounts.`);

        await Subscribe.findOneAndUpdate(
            {
                mt5_id: { $in: mt5_ids },
                status: "active"
            },
            { $set: { status: "inactive", end_date: new Date() } }

        )
    } catch (error) {
        console.error("Error checking overdue bills:", error);
    }
};

// Schedule the task to run daily at midnight
cron.schedule("0 0 * * *", () => {
    console.log("Running overdue bill check...");
    checkOverdueBills();
});

export async function POST(req) {
    await checkOverdueBills(); // Run manually if needed
    return NextResponse.json({ status: 200, message: "Overdue bill cron job executed." });
}
