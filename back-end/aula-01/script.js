class Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.qtdPortas = qtdPortas;
  }
}

class Moto extends Veiculo {
  constructor(fabricante, modelo, ano) {
    // Chama o construtor da classe Veiculo
    super(fabricante, modelo, ano, 'Moto', 0);
  }

  mostrarDadosMoto() {
    console.log(`${this.fabricante} ${this.modelo}, ${this.ano}`);
  }

  mostrarModelo() {
    console.log(`O modelo da moto é ${this.modelo}`);
  }

  acelerar() {
    console.log('Acelerando a moto...');
  }
}

class Carro extends Veiculo {
  constructor(fabricante, modelo, ano, tipo, qtdPortas) {
    super(fabricante, modelo, ano, tipo, qtdPortas);
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
const minhaMoto = new Moto('Honda', 'Africa Twin', '2026');

meuCarro.mostrarDadosCarro();
minhaMoto.mostrarDadosMoto();