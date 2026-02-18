class Carro {
  constructor(fabricante, marca, ano, tipo, qtdPortas) {
    this.fabricante = fabricante; // Propriedade da Classe
    this.marca = marca; // Propriedade da Classe
    this.ano = ano; // Propriedade da Classe
    this.tipo = tipo; // Propriedade da Classe
    this.qtdPortas = qtdPortas; // Propriedade da Classe
  }
  mostrarMarca() {
    console.log(`A marca do carro é: ${this.marca}`);
  }
};
