Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.calculateCost()

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: const myPizza.calculateCost();
Expected Output: 23

Describe: Cart()

Test: "It should contain pizza objects"
Code: const myCart = new cart(pizza1);
Expected Output: pizza1 {toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Cart.addPizza();

Test: "It should add another pizza"
Code: myCart.addPizza(pizza2);
Expected Output: pizza2 {toppings: ["pepperoni", "extra cheese"], size: "large" }

Describe: Cart.calculateCost

Test: "It should add the costs of all the pizzas"
Code: const myCart.calculateCost();
Expected Output: 50