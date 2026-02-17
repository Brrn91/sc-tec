function clientePedido(numeroPedido) {
  if (numeroPedido === 1) {
    return 'Pizza de Calabresa!';
  } else if (numeroPedido === 2) {
    return 'Pizza de Quatro Queijos!';
  } else if (numeroPedido === 3) {
    return 'Pizza de Frango com Catupiry!';
  } else if (numeroPedido === 4) {
    return 'Pizza de Frango de Brigadeiro!';
  } else (numeroPedido === ''); {
    return 'Número do pedido inválido!';
  }
}
