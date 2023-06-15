import remix from "@remix-run/express";
import enableWs from "express-ws";
import express from "express";
import { getJobById } from "./app/models/job.server.js";
import * as build from "./build/index.cjs";
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

app.all("*", remix.createRequestHandler({ build }));

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Applciation running on http://localhost:" + (process.env.PORT || 3000)
  );
});
