const celulas = document.querySelectorAll('.celula');
let vezDoX = true;

function iniciarJogo() {
  celulas.forEach((celula) => {
    celula.textContent = '';
    celula.addEventListener('click', function () {}, { once: true});
  });
}

function tratarClick(evento) {
  evento.target.textContent = vezDoX ? 'X' : 'O';
};
