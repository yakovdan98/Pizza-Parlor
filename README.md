Describe: Pizza()

Test: "It should return a Pizza string"
Code: const myPizza = new Pizza();
Expected Output: "Pizza"

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }