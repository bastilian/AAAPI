const express = require("express");
const remix = require("@remix-run/express");
const { WebSocketServer } = require("ws");

const app = express();

const wss = new WebSocketServer({ noServer: true, path: "/websocket" });

wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", (data) => {
    // there are no scenarios where messaging to server via websockets is required, thus just console.log
    console.log(`Received from client: ${data}`);
  });

  ws.send("Hi, websocket connection is established.");
});

app.use(express.static("public", { maxAge: "1h" }));

app.all("*", remix.createRequestHandler({ build: require("./build") }));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Applciation running on http://localhost:" + (process.env.PORT || 3000)
  );
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});
