






const Fastify = require("fastify");
const zmq = require("zeromq");

const app = Fastify({ logger: true });
const sock_pub = new zmq.Publisher();

const sock_pull = new zmq.Pull();
// Function to listen for incoming messages (e.g., trade history) from EA via Router socket
const listenForTradeHistory = async (mt5_id) => {
    
    try {

        const msg = await sock_pull.receive(); // Wait for a single message
        const tradeHistory  = JSON.parse(msg.toString());
        return JSON.parse(msg.toString()); // Convert and return JSON data

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

        // Send a trade request via Publisher to EA
        await sock_pub.send([mt5_id, "trade-request"]);

        // Start listening for trade history and send it back
        const tradeHistory = await listenForTradeHistory(mt5_id);
        //const msg = await sock_pull.receive();
        //const tradeHistory = JSON.parse(msg.toString()); // Convert to JSON
       
        return reply.send(tradeHistory); // Send back trade history to Next.js client
    } catch (error) {
        console.error("Fastify Error:", error);
        return reply.status(500).send("Server error");
    }
});

// Binding the sockets and starting the server
const main = async () => {
    try {
        await sock_pub.bind("tcp://127.0.0.1:7777");
        await sock_pull.bind("tcp://127.0.0.1:6666");

        await app.listen({ port: 5000 });
        console.log("Fastify API running on http://localhost:5000");
    } catch (err) {
        console.error("Server startup error:", err);
        process.exit(1);
    }
};

main();











