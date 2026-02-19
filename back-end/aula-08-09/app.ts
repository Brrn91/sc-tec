import express from "express";
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Rota inicial!</h1>')
});

app.get('/sobrenos', (req, res) => {
  res.send('Rota falando sobre a empresa');
});

app.get('/trabalheconosco', (req, res) => {
  res.send('Opções de carreira');
});

app.get('/contato', (req, res) => {
  res.send('(48) 99999-9999');
});

app.listen(3000, () => {
  console.log('Servidor criado...')
});