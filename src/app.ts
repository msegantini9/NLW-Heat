import "dotenv/config";
import express from "express";

import {router} from "./routes"

const app = express();
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

app.listen(4000, () => console.log('🚀 Server is run in PORT 4000'));
