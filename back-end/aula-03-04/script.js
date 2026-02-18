/*
setTimeout(() => {
  console.log('Alerta!');
}, 3000);


setInterval(() => {
  console.log('Alerta!');
}, 3000);
*/
console.log('Inicio da execução.')

function buscarDadosdoServidor() {
  //Código que busca dados do servidor
  return new Promise((resolve, reject) => {
    console.log('Buscando dados no servidor');
    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if(sucesso) {
        resolve('Dados recebidos com sucesso!')
      } else {
        reject('Falha ao buscar dados do servidor!');
      }
    },2000);
});
}

buscarDadosdoServidor().then((mensagem) => {
  console.log(mensagem);
}).catch((erro) => {
  console.error(erro);
});

console.log('Final da execução!');