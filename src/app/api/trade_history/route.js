export async function POST(req) {
    const data = await req.json();
    console.log("Received POST data:", data);  // Log incoming data

    // Assuming you're sending a response back, let's log it too
    const response = { message: 'Data processed successfully' };
    console.log("Sending response:", JSON.stringify(response));  // Log response

    return new Response(JSON.stringify(response), {
        status: 200,
    });
}



 // In-memory store to hold trade data for each EA client (mt5_id)
// let tradeDataStore = {};

//     export async function POST(req) {
//     const data = await req.json();
//     //console.log("Received POST data:", data);  // Log incoming data

//     const { mt5_id, positions } = data;

//     // Check if the mt5_id already exists in the in-memory store
//     if (tradeDataStore[mt5_id]) {
//         // Replace the existing data with the new trade data
//         tradeDataStore[mt5_id] = positions;
//     } else {
//         // If it doesn't exist, add a new entry for this mt5_id
//         tradeDataStore[mt5_id] = positions;
//     }

//     // Log the updated trade data for that mt5_id
//     // console.log(`Trade data for mt5_id ${mt5_id} updated:`, tradeDataStore[mt5_id]);
    
//     console.log("\n\n\n\n\n\n\n")
//     console.log(tradeDataStore)
//     // Respond with success message
//     const response = { message: 'Trade data updated successfully' };
//     return new Response(JSON.stringify(response), {
//         status: 200,
//     });
// }
