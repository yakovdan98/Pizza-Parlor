function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = this.calculateCost();
}

Pizza.prototype.calculateCost = function () {
  let cost = 0;
  switch (this.toppings.length) {
    case 0:
      cost -= 5;
      break;
    case 1:
      cost -= 2;
      break;
    case 2:
      cost += 1;
      break;
    case 3:
      cost += 5;
      break;
    case 4:
      cost += 7;
      break;
    default:
      cost += 10;
  }

  switch (this.size) {
    case "small":
      cost += 10;
      break;
    case "medium":
      cost += 15;
      break;
    case "large":
      cost += 20;
  }
  return cost;
}

function Cart(name, address) {
  this.name = name;
  this.address = address
  this.pizzas = {};
  this.currentId = 0;

}

Cart.prototype.addPizza = function (pizza) {
  pizza.id = this.currentId;
  this.pizzas[this.currentId] = pizza;
  this.currentId++;
}

Cart.prototype.calculateCost = function () {
  let cost = 0;
  for (let i = 0; i < this.currentId + 1; i++) {
    if(this.pizzas[i] !== undefined){
      cost += this.pizzas[i].cost;
    }
  }
  return cost;
}


const myCart = new Cart("dan", "3828 Piermont Dr NE Albuquerque, NM 87111");
myCart.addPizza(new Pizza(["extra cheese", "chicken"], "large"));
myCart.addPizza(new Pizza(["pepperoni", "sausage"], "small"));
