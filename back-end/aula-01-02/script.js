class Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtdPortas = qtdPortas;
  }

  mostrarDadosDoVeiculo() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, (${this.tipo}), ${this.qtdPortas} portas`
    );
  }

  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }

  acelerar() {
    console.log('Acelerando a moto...');
  }
}

class Moto extends Veiculo {
  constructor(fabricante, modelo, ano, cilindradas) {
    // Chama o construtor da classe Veiculo
    super(fabricante, modelo, ano, 'Moto', 0);
    this.cilindradas = cilindradas;
  }

  mostrarDadosDoVeiculo() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, ${this.cilindradas} cilindradas.`
    );
  }

  acelerar() {
    console.log('Acelerando a moto...');
  }
}

class Carro extends Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    super(fabricante, modelo, ano, tipo, qtdPortas);
  }

  mostrarDadosDoVeiculo() {
    console.log(
      `${this.fabricante} ${this.modelo}, ${this.ano}, (${this.tipo}), ${this.qtdPortas} portas`
    );
  }

  acelerar() {
    console.log('Acelerando o carro...');
  }
}

const meuCarro = new Carro('Chevrolett', 'Corsa', '1997', 'Hatch', '2');
const minhaMoto = new Moto('Honda', 'Africa Twin', '2026', '300');

meuCarro.mostrarDadosDoVeiculo();
minhaMoto.mostrarDadosDoVeiculo();
