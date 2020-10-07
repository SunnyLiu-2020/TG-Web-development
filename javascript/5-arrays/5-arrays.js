// Opdracht 1:

let myFirstArray = [2, 4, 8, 9, 11, 13, 17, 23, 28, 33];

// Opdracht 2:

let fruits = ["apple", "banana", "grapes", "lemon", "melon", "strawberry"];

console.log(fruits);

// Opdracht 3:

for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
        console.log(i);
    }
}

// Opdracht 4:

for (i = 0; i < fruits.length; i++) {
    if (fruits[i] === "strawberry") {
        console.log(i);
    }
}

// Opdracht 5:

let number = [2, 4, 8, 9, 11, 13, 17, 23, 28, 33];
let fruit = ["apple", "banana", "grapes", "lemon", "melon"];

let randomNumber = number[Math.floor(Math.random() * number.length)];
let selectedFruit = randomNumber % 5;

console.log(fruit[selectedFruit]);

// Opdracht 6:

fruit.push("strawberry");

fruit.pop("strawberry");

fruit.shift();

fruit.unshift("pear");

const fruitSelection = fruit.slice(2, 4);

fruitSelection.splice(1, 1, "pineapple", "papaya");

fruit.sort();
fruit.reverse();

console.log(fruit);
console.log(fruitSelection);

// Opdracht 7:

console.log(fruit.length);

// Opdracht 8:

fruit[0] = "orange";
console.log(fruit);

// Opdracht 9:

fruit[0] = "banana";
fruit[4] = "orange";
console.log(fruit);