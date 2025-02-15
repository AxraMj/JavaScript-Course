'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const [i, , j] = restaurant.categories;
console.log(i, j);
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: resturentName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(resturentName, hours, tags);
//default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating values
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
[({ a, b } = obj)];
console.log(a, b);

//nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//spread operator
const arr = [8, 9, 10];
const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...newArray); //1 2 8 9 10

//Rest Parameter (... in function parameters)
const greet = (i, j, ...others) => {
  console.log(`hello ${i} and ${j}`);
  console.log(others);
};

greet('aks', 'avi', 'joh', 'alla');

// Rest Pattern (... in Destructuring)
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log(first);
console.log(others);

// OR (||) Short-Circuiting
console.log(3 || 'john');
console.log(0 || false || 'Hello' || 42);
// Output: "Hello" (First truthy value)

console.log('' || null || undefined || 0);
// Output: 0 (All are falsy, so returns the last one)

//2️⃣ AND (&&) Short-Circuiting
console.log(10 && 'Hello' && null && 'World');
// Output: null (First falsy value)

console.log(5 && true && 'JavaScript');
// Output: "JavaScript" (All truthy, so returns the last one)

// Nullish Coalescing Operator (??) in JavaScript
const firstName = null ?? 'Akshara';
console.log(firstName); //Akshara

const secondName = 'Avin' ?? 'Akshara';
console.log(secondName); //Avin, because name is not null

// Logical Assignment Operators in JavaScript (&&=, ||=, ??=)
let name = '';
name ||= 'Guest';
console.log(name); // Output: "Guest" (because "" is falsy)

let username = 'Alice';
username ||= 'Guest';
console.log(username); // Output: "Alice" (unchanged, since it's truthy)

//AND Assignment (&&=)
