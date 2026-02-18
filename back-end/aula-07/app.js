var pessoa = required('./modulos-exemplo/commons/pessoa.js');
var soma = required('./modulos-exemplo/commons/soma.js');
var imposto = required('./modulos-exemplo/commons/imposto.js');

lucas = pessoa();

console.log(JSON.stringify(pessoa));
console.log(soma(2, 2));

console.log('O valor do produto com imposto: ' + imposto.adicionar(10));
console.log('O valor do imposto' + imposto.valor);
console.log('Taxa do imposto' + imposto.taxa);