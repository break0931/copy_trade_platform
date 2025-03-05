

// const Fastify = require("fastify");
// const zmq = require("zeromq");

// const app = Fastify({ logger: true });
// const sock_pub = new zmq.Publisher();
// const sock_router = new zmq.Router();

// app.post("/nodeZeromq", async (request, reply) => {
//     try {
//         const { mt5_id } = request.body; // 🔥 Ensure this is correctly extracted

//         if (!mt5_id) {
//             return reply.status(400).send({ error: "Missing mt5_id" });
//         }

//         // Send the trade request message to the EA
//         await sock_pub.send([mt5_id, "trade-request"]);

//         // Wait for trade history response
//         const tradeHistory = await listenForTradeHistory();

//         return reply.send( tradeHistory ); // Send the trade history back to the client
//     } catch (error) {
//         console.error("Fastify Error:", error);
//         return reply.status(500).send("Server error");
//     }
// });

// //Function to listen for incoming messages (e.g., trade history) from EA via Router socket
// const listenForTradeHistory = async () => {
//     let trade = null;     
//     try {
//         // Get the message from the router socket
//         for await (const msg of sock_router) {
//             console.log("Received trade history message raw msg:", msg);
//             const message = msg.toString(); // Convert buffer to string
//             console.log("Received trade history message:", message);
//             trade=message;
//             // Assuming the message is in JSON format, parse it if needed
//             //const parsedData = JSON.parse(message);
//             break; 
//             // Return the trade history data
//             return message; // Send the trade history back to the Fastify response
//         }
//         return trade;
//     } catch (error) {
//         console.error("Error receiving trade history:", error);
//         throw new Error("Error receiving trade history");
//     }
// };




// const main = async () => {
//     try {
//         await sock_pub.bind("tcp://127.0.0.1:7777");
//         await sock_router.bind("tcp://127.0.0.1:6666");
//         await app.listen({ port: 5000 });
//         console.log("Fastify API running on http://localhost:5000");
//     } catch (err) {
//         console.error("Server startup error:", err);
//         process.exit(1);
//     }
// };

// main();











































const Fastify = require("fastify");
const zmq = require("zeromq");

const app = Fastify({ logger: true });
const sock_pub = new zmq.Publisher();
const sock_rep = new zmq.Reply(); // Reply socket

// Function to listen for incoming messages (e.g., trade history) from EA via Router socket
const listenForTradeHistory = async (mt5_id) => {
    try {
        // Send trade request via Publisher to EA
        await sock_pub.send([mt5_id, "trade-request"]);

        for await (const msg of sock_rep) {
            console.log("Received request from EA:", msg.toString());
            
            // Process the trade history or any other data based on the request
            const message = msg.toString();
            const tradeHistory = JSON.parse(message); // Parse the message as JSON
            const msgres = "already receive trade history data...";  // Replace with actual trade history processing
            
            // Send a response back to the EA with trade history
            await sock_rep.send(msgres);
            return tradeHistory;
          }
    } catch (error) {
        console.error("Error receiving trade history:", error);
        throw error;
        
    }
};

app.post("/nodeZeromq", async (request, reply) => {
    try {
        const { mt5_id } = request.body;
        if (!mt5_id) {
            return reply.status(400).send({ error: "Missing mt5_id" });
        }

        // Start listening for trade history and send it back
        const tradeHistory = await listenForTradeHistory(mt5_id);
        return reply.send( tradeHistory ); // Send back trade history to Next.js client
    } catch (error) {
        console.error("Fastify Error:", error);
        return reply.status(500).send("Server error");
    }
});

// Binding the sockets and starting the server
const main = async () => {
    try {
        await sock_pub.bind("tcp://127.0.0.1:7777");
        await sock_rep.bind("tcp://127.0.0.1:6666");

        await app.listen({ port: 5000 });
        console.log("Fastify API running on http://localhost:5000");
    } catch (err) {
        console.error("Server startup error:", err);
        process.exit(1);
    }
};

main();












