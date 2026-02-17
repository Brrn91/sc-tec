class Carro {
    constructor(marca) {
      this.marca = marca; // Propriedade da Classe
    }
    mostrarMarca() {
      console.log(`A marca do carro é: ${this.marca}`);
    }
};

const meuCarro = new Carro('Ford');
meuCarro.mostrarMarca(); // Saída: A marca do carro é: Ford

let array1 = [1, 2, 3, 4, 5];
array1.sort();
array1.length;