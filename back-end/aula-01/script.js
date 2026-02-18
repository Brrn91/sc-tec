class Carro {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    this.fabricante = fabricante; // Propriedade da Classe
    this.modelo = modelo; // Propriedade da Classe
    this.ano = ano; // Propriedade da Classe
    this.tipo = tipo; // Propriedade da Classe
    this.qtdPortas = qtdPortas; // Propriedade da Classe
  }
  mostrarDadosCarro() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, (${this.tipo}), ${this.qtdPortas} portas`
    );
  }

  mostrarModelo() {
    console.log(`O modelo do carro é ${this.modelo}`);
  }

  acelerar() {
    console.log('Acelerando o carro...');
  }
}

const meuCarro = new Carro('Ford', 'Ka', '2008', 'Hatch', '4');
meuCarro.mostrarDadosCarro();
meuCarro.mostrarModelo();
meuCarro.acelerar();

