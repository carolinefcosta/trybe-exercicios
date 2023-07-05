class Cliente {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class itemDoPedido {
  nome: string;
  preco: number;

  constructor(pedido: string, preco: number){
    this.nome = pedido;
    this.preco = preco;
  }
}

class Pedido {
  cliente: Cliente;
  itens: itemDoPedido[] = [];
  formaPgto: string;
  desconto = 0;

  constructor(
    cliente: Cliente,
    itens: itemDoPedido[],
    formaPgto: string,
    desconto: number
  ) {
    this.cliente = cliente;
    this.itens = itens;
    this.formaPgto = formaPgto;
    this.desconto = desconto;
  }

  getCalculaTotal() {
    return this.itens
      .reduce((valorAnterior, item) => {
        const total = valorAnterior + item.preco;

        return total;
      },0)
  }

  getCalculaComDesconto() {
    return this.getCalculaTotal() * (1 - this.desconto);
  }
}

const cliente = new Cliente('Caroline');

const item1 = new itemDoPedido('Pudim', 3.50);
const item2 = new itemDoPedido('Brigadeirão', 5.50);
const item3 = new itemDoPedido('Pipoca', 2.50);

const pedidoFinal = new Pedido(cliente, [item1, item2, item3], 'pix', 0.05)

console.log(pedidoFinal);
console.log('Valor normal: ', pedidoFinal.getCalculaTotal());
console.log('Valor com desconto: ', pedidoFinal.getCalculaComDesconto());