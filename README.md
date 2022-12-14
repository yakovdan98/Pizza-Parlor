# Pizza Parlor

## Contributers
* Daniel Yakovlev

## Description
A website that is supposed to allow someone to pickout a pizza that they want to order

## Github Pages Link
<https://yakovdan98.github.io/Pizza-Parlor/>

## Technologies Used

* _github_
* _vs code_
* _CSS_
* _HTML_
* _javascript_
* _bootstrap_
* _font awesome_

## Application Setup Github Pages
1. Open with link <https://yakovdan98.github.io/Pizza-Parlor/>

## Application Setup Local
1. download repository from <https://github.com/yakovdan98/Pizza-Parlor>
2. open index.html in desired browser

## Known Bugs
* _none_

## License

MIT License

Copyright (c) 2022 yakovdan98

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.calculateCost()

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple"], "small");
const myPizza.calculateCost();
Expected Output: 11

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
const myPizza.calculateCost();
Expected Output: 16

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple"], "large");
const myPizza.calculateCost();
Expected Output: 21


Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies"], "medium");
const myPizza.calculateCost();
Expected Output: 13

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
const myPizza.calculateCost();
Expected Output: 16

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple", "mushrooms"], "medium");
const myPizza.calculateCost();
Expected Output: 20

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple", "mushrooms", "Extra Cheese"], "medium");
const myPizza.calculateCost();
Expected Output: 22

Test: "It should return the cost of the pizza derived from the size and toppings"
Code: 
const myPizza = new Pizza(["anchovies", "pineapple", "mushrooms", "Extra Cheese", "onions"], "medium");
const myPizza.calculateCost();
Expected Output: 25



Describe: Cart(name, address)

Test: "It should contain pizza objects"
Code: const myCart = new cart("daniel","3828 Piermont Dr NE Albuquerque, NM 87111");
Expected Output: Cart {name : "daniel", address: "3828 Piermont Dr NE Albuquerque, NM 87111", pizzas: {}, currentId: 0}

Describe: Cart.addPizza(pizza);

Test: "It should add another pizza"
Code:
const myCart = new cart("daniel","3828 Piermont Dr NE Albuquerque, NM 87111");
const pizza2 = new Pizza(["anchovies", "pineapple"], "medium");
myCart.addPizza(pizza2);
Expected Output: pizza2 {toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Cart.calculateCost()

Test: "It should add the costs of all the pizzas in the cart"
Code: 
const myCart = new cart("daniel","3828 Piermont Dr NE Albuquerque, NM 87111");
myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myCart.addPizza(myPizza);
const myCart.calculateCost();
Expected Output: 16

Describe: Cart.deletePizza(id)

Test: "It should delete a pizza at the specified index and return true if it was deleted"
Code: const myCart.deletePizza(0);
Expected Output: true