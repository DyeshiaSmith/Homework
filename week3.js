const pizzaToppings = ["bacon", "sausage", "peperoni", "mushrooms"];
const crust = ["thin", "thick"];
const size = ["small", "medium", "large"];

function greetCustomers (pizzaToppings) {
  return (`Welcome to pizza House, our toppings are ${pizzaToppings}`);
}
function greetCustomers() {
  let greeting = `welcome to the pizza house, our toppings are: `;
  for (let topping of pizzaToppings) {
    order =+ `${topping}, `;
  }
  console.log(`${order. Comping Up!}`)
}
console.log(greetCustomers(pizzaToppings));

function getPizzaOrder (size, crust, ...pizzaToppings) {
  return (`one ${size} ${crust} crust pizza, with ${pizzaToppings} coming right up!`)
}

console.log(getPizzaOrder(size[0], crust[1], pizzaToppings[2], pizzaToppings[1]))

function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...your pizza is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}

let cookedPizza = preparePizza(customerOrder);
console.log(cookedPizza);
