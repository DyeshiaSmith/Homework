const pizzaToppings = ["bacon", "sausage", "peperoni", "mushroom"];
const crust = ["thin", "thick"];
const size = ["small", "medium", "large"];

function greetCustomers (pizzaToppings) {
  return (`Welcome to pizza House, our toppings are ${pizzaToppings}`);
}

console.log(greetCustomers(pizzaToppings));

function getPizzaOrder (size, crust, ...pizzaToppings) {
  return (`one ${size} ${crust}, with ${pizzaToppings} coming right up!`)
}

console.log(getPizzaOrder(size[0], crust[1], pizzaToppings))

function preparePizza() {}
