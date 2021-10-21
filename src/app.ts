import "dotenv/config";
import express from "express";
import {Server, Socket} from "socket.io"
import http from "http";
import cors from "cors";

import {router} from "./routes"

const app = express();
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors:{
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log(`Usuario conectado no socket ${socket.id}`)
})

app.use(express.json())

app.use(router);

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.
  GITHUB_CLIENT_ID}`
  );
});

app.get("/singin/callback", (request, response) => {
  const {code} = request.query;

  return response.json(code);

  //!lívia é linda
});

export{serverHttp, io}