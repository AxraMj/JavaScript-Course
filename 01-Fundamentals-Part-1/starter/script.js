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
*/

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'
*/
/*
const country = "India";
const continent = "Asia";
let population = 1428600000; // 1.43 billion
let isIsland = false;
let language = "Malayalam"; // Corrected spelling of 'Malayalam'

const halfPopulation = population / 2;
console.log("Population of each half: ", halfPopulation); // Question 1: Split population in half

console.log("Population after increase by 1: ", population + 1); // Question 2: Increase population by 1

const finland = 6000000; // Finland's population
if (population > finland) {
  console.log("India has a higher population than Finland."); // Question 3: Compare with Finland
} else {
  console.log("Finland has a higher population than India.");
}

const avg = 33000000; // Average population of a country (33 million)
if (population > avg) {
  console.log("India has more people than the average country."); // Question 4: Compare with average population
} else {
  console.log("India has fewer people than the average country.");
}

// Description based on variables (Question 5)
const description = `${country} is in ${continent}, and its ${halfPopulation} people speak ${language}`;
console.log(description);

// Log types of different variables
console.log(typeof isIsland); // boolean
console.log(typeof continent); // string
console.log(typeof population); // number
console.log(typeof language); // string

*/

/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time 
using the template literal synta

*/
let firstName="Akshara"
let age=20
console.log(`My name is ${firstName} i am ${age} years old`)

