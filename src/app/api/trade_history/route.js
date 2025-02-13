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
