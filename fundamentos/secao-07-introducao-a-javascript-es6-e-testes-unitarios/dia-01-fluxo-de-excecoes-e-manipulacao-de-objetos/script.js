const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const nomeCliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const ap = order.address.apartment;

  console.log(`Olá ${entregador}, entrega para: ${nomeCliente}, telefone: ${telefone}, Rua: ${rua}, n° ${numero} e ap: ${ap}.`);
};

customerInfo(order);

const orderModifier = (order) => {
  const novoCliente = order.name = 'Luiz Silva';
  const novoValorDePedido = order.payment = '50';
  const saboresPizza = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;

  console.log(`Olá ${novoCliente}, o total do seu pedido de ${saboresPizza} e ${bebida} é R$ ${novoValorDePedido}.`);
};

orderModifier(order);