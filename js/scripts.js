function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function () {
  let cost = 0;
  switch(this.toppings.length){
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

  switch(this.size){
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

function Cart(){
  this.pizzas = {}
}