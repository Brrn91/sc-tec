import express from "express";
import clientRouter from './router/client.js'
import db from './db.js'

const app = express();

app.use(clientRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then(() => {
  console.log('Conectado com o banco: ' + process.env.DB_NAME);
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Servidor criado...')
  });
})