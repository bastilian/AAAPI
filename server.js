const remix = require("@remix-run/express");
const enableWs = require("express-ws");
const express = require("express");
const { getJobById } = require("./app/models/job.server");

const app = express();
enableWs(app); // helps to route ws the express way

app.use(express.static("public", { maxAge: "1h" }));

app.ws("/job/:jobId", (ws, req) => {
  // TODO: check that request has existing job id

  console.log(getJobById(req.params.jobId));
  ws.on("message", (msg) => {
    ws.send(msg);
  });

  ws.on("close", () => {
    console.log("WebSocket was closed");
  });
});

app.all("*", remix.createRequestHandler({ build: require("./build") }));

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Applciation running on http://localhost:" + (process.env.PORT || 3000)
  );
});
