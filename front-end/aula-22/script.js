const carros = ['Uno', 'Gol', 'Celta', 'Palio', 'Corsa'];
const conteudo = document.getElementById('conteudo');

var dados;
var i;

function criaSecao(titulo, dadosF) {
  let secao = document.createElement('div');
  secao.innerHTML = '<h2>' + titulo + '</h2>' + dadosF;
  conteudo.appendChild(secao);
}

dados = '';
i = 0;

while (i < 5) {
  dados += '<p>' + carros[i] + '</p>';
  i++;
}

criaSecao('Loop While', dados);

dados = '';
i = 0;

while (i < carros.length) {
  dados += '<p>' + carros[i] + '</p>';
  i++;
}
criaSecao('Loop While Melhorado', dados);

dados = '';
i = 0;
do {
  dados += '<p>' + carros[i] + '</p>';
  i++;
} while (i < carros.length);
criaSecao('Loop While Invertido', dados);

dados = '';
for (i = 0; i < carros.length; i++) {
  dados += '<p>' + carros[i] + '</p>';
};
criaSecao('Loop While For', dados);

dados = '';
for(let carro of carros) {
  dados += '<p>' + carro + '</p>';
};
criaSecao('Loop While For Of', dados);