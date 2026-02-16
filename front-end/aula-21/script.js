const carros = ['Uno', 'Gol', 'Celta', 'Palio', 'Corsa'];
const conteudo = document.getElementById('conteudo');

let dados = '';
let i = 0;

while (i < 5) {
  dados += '<p>'+carros[i]+'</p>';
  i++;
};

const secao = document.createElement('div');
secao.innerHTML = '<h2>Loop While</h2>' + dados;
conteudo.appendChild(secao);