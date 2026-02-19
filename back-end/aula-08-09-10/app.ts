import express from "express";
import clientRouter from './router/client.js'
const app = express();

app.use(clientRouter);
app.set('view engine', 'pug');
app.set('views', './views')

app.listen(3000, () => {
  console.log('Servidor criado...')
});