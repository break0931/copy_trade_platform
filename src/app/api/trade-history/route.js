//export const runtime = 'nodejs'; // Force Node.js runtime
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { mt5_id } = await req.json();
    if (!mt5_id) {
      return NextResponse.json({ error: "Missing mt5_id" }, { status: 400 });
    }

    const response = await fetch("http://127.0.0.1:5000/nodeZeromq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mt5_id }),
    });

    const data = await response.json();
    console.log(data);
    return NextResponse.json(  data );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
  // try {
  //   const { mt5_id} = await req.json();

  //   if (!mt5_id ) {
  //     return new Response(JSON.stringify({ error: "mt5_id required" }), { status: 400 });
  //   }
  //   const sock = new Request();
  //   sock.connect('tcp://127.0.0.1:6666');
  //   console.log('Connected to ZeroMQ server');

  //   // Send a message
  //   const message = 'Test message from Next.js API';
  //   console.log(message)
  //   await sock.send(message);  // Send the message as a buffer
    
    
  //   for await (const msg of sock) {
  //     console.log('Raw received message:', msg);  // Log the raw buffer
  //     const decodedMessage = msg.toString('utf8');  // Decode it to string
  //     console.log('Decoded message:', decodedMessage);
   
  //   }
  
  //   // Wait for a reply
  //   const responseArray = await sock.receive();
  //   console.log('Full response array:', responseArray);

   
  //   return Response.json({ message: reply.toString() } , { status: 200 });

  //   // return new Response(JSON.stringify({ message: "Trade request sent" }), { status: 200 });

  // } catch (error) {
  //   return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  // }



// const socket = new zmq.Reply();
// await socket.bind("tcp://127.0.0.1:6666");  
// console.log("Next.js API listening for trade history requests...");

// // Wait for the incoming message from EA client
// const [message] = await socket.receive();
// const tradeHistory = message.toString();
// console.log('Received trade history from EA:', message);






// // Create a ZeroMQ Publisher
// const pub = new zmq.Publisher();
// await pub.bind("tcp://127.0.0.1:7777"); // Bind publisher to port 5556

// // Publish a message to request trade history for the specific mt5_id
// await pub.send(`${mt5_id},trade-request`);























