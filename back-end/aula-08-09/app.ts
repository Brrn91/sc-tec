import express from "express";
import clientRouter from '../aula-08-09/router/client.js'
const app = express();

app.use(clientRouter);

app.listen(3000, () => {
  console.log('Servidor criado...')
});