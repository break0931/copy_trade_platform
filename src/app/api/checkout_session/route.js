import Stripe from "stripe";
import { connectMongoDB } from "../../../../lib/mongodb";
import Bill from "../../../../models/bill";
import { NextResponse } from "next/server"; // Import NextResponse
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { bill_id } = await req.json();
    await connectMongoDB();
    const bill = await Bill.findOne({ _id: bill_id });
    console.log(bill_id);
    console.log(bill);

    const billidString = bill_id.toString();
    console.log(typeof (billidString));



    let finalAmount = bill.amount * 100; // Default bill amount

    if (bill.status === "Expired") {
      finalAmount = Math.round(bill.amount * 1.1 * 100); // Add $10 fine // Convert to cents
    }
    // Create a temporary price based on the bill amount
    const price = await stripe.prices.create({
      unit_amount: finalAmount , 
      currency: "usd",
      product_data: {
        name: billidString,
        metadata: {
          bill_id: bill_id,
          mt5_id: bill.mt5_id,
          Created: bill.bill_created,
          Due: bill.due_date,
          Status: bill.status,
        },
      },
    });

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/success/${bill_id}`,
      cancel_url: `${req.headers.get("origin")}/cancel/${bill_id}`,
      metadata: {
        bill_id: bill_id,

      },
    });

    // Return the sessionId to the frontend
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
