const pizzaToppings = ["bacon", "sausage", "peperoni", "mushrooms"];
const crust = ["thin", "thick"];
const size = ["small", "medium", "large"];

function greetCustomers (pizzaToppings) {
  return (`Welcome to pizza House, our toppings are ${pizzaToppings}`);
}

console.log(greetCustomers(pizzaToppings));

function getPizzaOrder (size, crust, ...pizzaToppings) {
  return (`one ${size} ${crust} crust pizza, with ${pizzaToppings} coming right up!`)
}

console.log(getPizzaOrder(size[0], crust[1], pizzaToppings[2], pizzaToppings[1]))

function preparePizza(size, crust, pizzaToppings) {
  return (`one ${size} ${crust} crust pizza, with ${pizzaToppings} is being prepared`)
}
console.log(preparePizza(size[0], crust[0], pizzaToppings[0]));

// let pizza = getPizzaOrder;
// function servePizza (pizza) {
//   return(`${pizza} pizza is ready!`)
// }
// console.log(servePizza(pizza));
