Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.calculateCost()

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: const myPizza.calculateCost();
Expected Output: 23

Describe: Cart(name, address)

Test: "It should contain pizza objects"
Code: const myCart = new cart("daniel","3828 Piermont Dr NE Albuquerque, NM 87111");
Expected Output: Cart {name : "daniel", address: "3828 Piermont Dr NE Albuquerque, NM 87111", pizzas: {}, currentId: 0}

Describe: Cart.addPizza(pizza);

Test: "It should add another pizza"
Code: myCart.addPizza(pizza2);
Expected Output: pizza2 {toppings: ["pepperoni", "extra cheese"], size: "large" }

Describe: Cart.calculateCost()

Test: "It should add the costs of all the pizzas in the cart"
Code: const myCart.calculateCost();
Expected Output: 50