// If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

let population = 30; // Change this value to 13 or 130 to test

console.log(
  `Portugal's population is ${population > 33 ? "above" : "below"} average.`
);
