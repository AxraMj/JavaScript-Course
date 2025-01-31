// let js='Awsome';
// if (js=='Awsome') alert("Have Fun!!")

// console.log(20+10-10)

// // in js we use camelCase for variables
// let firstName ="John"
// let myVariableName = "Hello";
// let totalScore = 100;
// let userAge = 25;
// console.log(firstName)

/*
let javaScriptIsFun=true
let a= 12
a="hello" //dynamic type
let b= "John"
let year; //undefined empty variable
year=1991
console.log(javaScriptIsFun)
console.log(typeof javaScriptIsFun)
console.log(typeof a)
console.log(typeof b)
console.log(year)
console.log(typeof year)
console.log(typeof null) //object, actually its an error 
//dynamic typing
javaScriptIsFun = "YES!"
console.log(javaScriptIsFun) 
*/

/*var,let,const

const a=10 
a=2 //constant variable cannot change its constant
console.log(a) //error 

b = 20; // No var, let, or const -> Becomes a global variable
console.log(b)

var is same as let
var is function-scoped → It is accessible throughout the entire function where it's declared.
let is block-scoped → It is only accessible within the block ({}) where it's declared.
*/

// Assignment 1
/*
Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console

let country = "India"
let continent ="Asia"
let population = "142.86 Cr"

console.log("Country: " +country)
console.log("Continent: " +continent)
console.log("Population: " +population)
*/

/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

/*
let country = "India"
let continent ="Asia"
let population = 142.86
let isIsland = false
let language;

console.log(typeof isIsland)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof language)
*/

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

const country = "India"
const continent ="Asia"
let population = 142.86
let isIsland = false
let language;
language="Malyalam"

console.log(typeof isIsland)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof language)

// Trying to change a const variable (this will throw an error)
country = "USA"; // TypeError: Assignment to constant variable.




