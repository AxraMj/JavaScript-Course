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


let firstName="Akshara"
let age=20
console.log(`My name is ${firstName} i am ${age} years old`)
*/

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to origina

const country = "India";
const continent = "Asia";
let population = 14286; // 1.43 billion
let isIsland = false;
let language = "Malayalam"; // Corrected spelling of 'Malayalam'
if (population > 33000000){
  console.log(`${country}'s population is Above average`)
}
else{
  console.log(`${country}'s population is below average`)
}
  */

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17;   //23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2; //1143
2. Execute the operations to check if you were righ

console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

*/

/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation


let numNeighbours=prompt('How many neighbour countries does your country have?')
if (numNeighbours ===1 ) {
  console.log("Only 1 border!")
}
else if(numNeighbours > 1){
  console.log("More than 1 border")
}
else{
  console.log("No borders")
}
  */

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)


const country = prompt("Select state: India, Australia, Germany");
let englishCountry = "Australia";
let language = "English"; 
let population = 30;
let isIsland = false; // Change to false if it's not an island

if (country == englishCountry && language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

*/