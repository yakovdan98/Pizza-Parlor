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
  if (this.pizzas[id] !== null) {
    delete this.pizzas[id];
    return true;
  }
  return false;
}

Cart.prototype.calculateCost = function () {
  let cost = 0;
  for (let i = 0; i < this.currentId + 1; i++) {
    if (this.pizzas[i] !== undefined) {
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


function deleteItem(event) {
  myCart.deletePizza(event.target.id);
  outputCart();
}

function displayPizza(index, location) {
  const div = document.createElement("div");
  div.setAttribute("class", "item");

  const h5 = document.createElement("h5");
  h5.append(myCart.pizzas[index].size + " pizza " + "$" + myCart.pizzas[index].cost);

  const ul = document.createElement("ul");
  myCart.pizzas[index].toppings.forEach(function (topping) {
    const li = document.createElement("li");
    li.append(topping);
    ul.append(li);
  });

  if (location === "cart") {
    const button = document.createElement("button");
    button.setAttribute("id", index);
    button.setAttribute("class", "delete-button btn btn-primary");
    button.addEventListener("click", deleteItem);
    button.innerText = "X";
    div.append(button);
  }

  div.append(h5);
  div.append(ul);
  return div;
}

function outputCart() {
  // console.log("adding pizza");
  // console.log(myCart.currentId + 1 );
  document.getElementById("cart").innerText = null;
  for (let i = 0; i < myCart.currentId; i++) {
    if (myCart.pizzas[i] !== undefined) {
      console.log("pizza added");
      document.getElementById("cart").append(displayPizza(i, "cart"));
    }
  }
  document.getElementById("cost").innerText = myCart.calculateCost();
}

function addPizza() {
  clearError("topping-error");
  clearError("size-error");
  const toppings = document.querySelectorAll('[name="toppings"]');
  const selectedToppings = [];
  toppings.forEach(function (topping) {
    if (topping.checked)
      selectedToppings.push(topping.value);
  });

  let size = document.querySelector('[name="pizza-size"]:checked');

  if (selectedToppings.length === 0) {

    errorMessage("topping-error");
  }

  if (size === null) {

    errorMessage("size-error");
  }

  if (size !== null && selectedToppings.length !== 0) {
    size = size.value;
    console.log(selectedToppings);
    console.log(size);
    myCart.addPizza(new Pizza(selectedToppings, size));
    resetForm();
    outputCart();
  }
}



function checkout() {
  document.getElementById("pizza-form").setAttribute("class", "hidden");
  document.getElementById("cart-checkout").setAttribute("class", "hidden");
  const h1 = document.createElement("h1");
  h1.append("Thank you for your order " + myCart.name + "!");
  const h2 = document.createElement("h3");
  h2.append("The following order will be delivered to " + myCart.address);
  const div = document.getElementById("checkout-message");
  div.append(h1);
  div.append(h2);

  for (let i = 0; i < myCart.currentId; i++) {
    if (myCart.pizzas[i] !== undefined) {
      div.append(displayPizza(i, "checkout"));
    }
  }
}

function clearError(location) {
  document.getElementById(location).innerHTML = null;
  document.getElementById(location).setAttribute("class", location);
}

function errorMessage(location) {
  document.getElementById(location).innerHTML = "please enter valid input";
  document.getElementById(location).setAttribute("class", location + " text-danger");
}

function submitName(e) {
  e.preventDefault();
  clearError("address-error");
  clearError("name-error");
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  if (name === "") {

    errorMessage("name-error");
  }
  if (address === "") {

    errorMessage("address-error");
  }
  if (name !== "" && address !== "") {
    myCart = new Cart(name, address);
    document.getElementById("name-form").setAttribute("class", "hidden");
    document.getElementById("pizza-form").removeAttribute("class");
    document.getElementById("cart-checkout").removeAttribute("class");
    document.getElementById("add-pizza-btn").addEventListener("click", addPizza);
    document.getElementById("checkout").addEventListener("click", checkout);
  }
}

window.addEventListener("load", function () {
  this.document.getElementById("name-form").addEventListener("submit", submitName);
});

