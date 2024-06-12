const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8085 });

wss.on("connection", function connection(ws) {
  console.log("New client connected");

  ws.on("message", function incoming(message) {
    console.log("Received: ", message);
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error: ", error);
  });
});

console.log("WebSocket server is running on ws://localhost:8085");
