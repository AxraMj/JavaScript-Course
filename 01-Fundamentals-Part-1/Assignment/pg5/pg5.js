// If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

const country = "India";
const continent = "Asia";
let population = 1_400_000_000; // India's actual population in numbers
const isIsland = false; // India is not an island
let language = "Hindi";

if (population > 33_000_000) {
  console.log(`${country} 's population is above average`);
} else {
  console.log(`${country} 's population is 22 million below average`);
}
