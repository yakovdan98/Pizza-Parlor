//Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = this.calculateCost();
}

Pizza.prototype.calculateCost = function () {
  let cost = 0;
  console.log(this.toppings);
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

Cart.prototype.deletePizza = function (id) {
  if(this.pizzas[id] !== null){
    delete this.pizzas[id];
    return true;
  }
  return false;
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

//UI Logic
function resetForm() {
  const toppings = document.querySelectorAll('[name="toppings"]');
  toppings.forEach(function (topping) {
    topping.checked = false;
  });
  document.querySelector('[name="pizza-size"]:checked').checked = false;
}

function resetCart() {
  document.getElementById("cart").innerText = null;
}

function deleteItem(event) {
  myCart.deletePizza(event.target.id);
  event.target.parentElement.remove();

}

function outputCart() {
  // console.log("adding pizza");
  // console.log(myCart.currentId + 1 );
  for (let i = 0; i < myCart.currentId + 1; i++){
    if (myCart.pizzas[i] !== undefined){
      console.log("pizza added");
      const div = document.createElement("div");
      div.setAttribute("class", "item");
      const button = document.createElement("button");
      button.setAttribute("id", i);
      button.setAttribute("class", "delete-button btn btn-primary");
      button.addEventListener("click", deleteItem);
      button.innerText = "X";
      const h5 = document.createElement("h5");
      h5.append(myCart.pizzas[i].size + " pizza");
      div.append(h5);
      div.append(button);
      document.getElementById("cart").append(div);
    }
  }
  document.getElementById("cost").innerText = myCart.calculateCost();
}

function addPizza (){
  const toppings = document.querySelectorAll('[name="toppings"]');
  const selectedToppings = [];
  toppings.forEach(function (topping) {
    if(topping.checked)
    selectedToppings.push(topping.value);
  });

  const size = document.querySelector('[name="pizza-size"]:checked').value;
  console.log(selectedToppings);
  console.log(size);
  myCart.addPizza(new Pizza(selectedToppings, size));
  resetForm();
  resetCart();
  outputCart();
}

function submitName(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  myCart = new Cart(name, address);
  document.getElementById("name-form").setAttribute("class", "hidden");
  document.getElementById("pizza-form").removeAttribute("class");
  document.getElementById("cart-checkout").removeAttribute("class");
  document.getElementById("add-pizza-btn").addEventListener("click", addPizza);
}

window.addEventListener("load", function (){
  this.document.getElementById("name-form").addEventListener("submit", submitName);
});

