
const menu = [
  {
    name: "Margherita",
    ingredients: ["tomato sauce", "mozzarella", "basil"],
    price: 8.99,
  },
  {
    name: "Pepperoni",
    ingredients: ["tomato sauce", "mozzarella", "pepperoni"],
    price: 9.99,
  },
  {
    name: "Vegetarian",
    ingredients: ["tomato sauce", "mozzarella", "bell peppers", "onions", "mushrooms"],
    price: 10.99,
  },
];

let cashInRegister = 100.00;
let nextOrderId = 1;
const orderQueue = [];


function addNewPizza(pizza) {
  menu.push(pizza);
  console.log(`New pizza added to the order queue: ${pizza.name}`);
}

function placeOrder(pizzaName) {
  const pizza = menu.find(p => p.name === pizzaName);
  cashInRegister += pizza ? pizza.price : 0;
  if (pizza) {
    orderQueue.push({ id: nextOrderId++, pizza, status: "ordered" });
    console.log(`Order placed for: ${pizza.name} - status: ordered`);
  } else {
    console.log(`Sorry, we don't have ${pizzaName} on the menu.`);
  }
}

function completeOrder(orderId) {
  console.log("🚀 ~ orderQueue:", orderQueue)
  const order = orderQueue.find(order => order.id === orderId);
  console.log("🚀 ~ order:", order)
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Hawaiian", ingredients: ["tomato sauce", "mozzarella", "ham", "pineapple"], price: 11.99 });
addNewPizza({ name: "BBQ Chicken", ingredients: ["BBQ sauce", "mozzarella", "chicken", "red onions"], price: 12.99 });
addNewPizza({ name: "Four Cheese", ingredients: ["tomato sauce", "mozzarella", "parmesan", "gorgonzola", "ricotta"], price: 13.99 });

console.log("🚀 ~ orderQueue:", orderQueue)

placeOrder("Hawaiian");
completeOrder(1);

console.log("🚀 ~ menu:", menu)
console.log("🚀 ~ cashInRegister:", cashInRegister)
console.log("🚀 ~ orderQueue:", orderQueue)
