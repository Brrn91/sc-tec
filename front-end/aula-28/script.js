function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('e-mail').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Todos os campos são obrigatórios!');
    return false;
  }

  if (nome.length < 3 || nome.length > 50) {
    alert('O nome deve ter entre 3 e 50 caracteres!');
    return false;
  }

  if (email.length < 5 || email.length > 50) {
    alert('O e-mail deve ter entre 5 e 50 caracteres!');
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    alert('Por favor, insira um e-mail válido!');
    return false;
  }

  return true;
}

document.getElementById('form').addEventListener('submit', function (evento) {
  evento.preventDefault();
  if (validarFormulario()) {
    alert('Fomulário enviado com sucesso!');
  }
});
