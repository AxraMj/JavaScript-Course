// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

// 1. Declare variables
const country = "India";
const continent = "Asia";
let population = 1_400_000_000; // India's actual population in numbers
const isIsland = false; // India is not an island
let language = "Hindi";

// 2. Split the population in half
let half_Population = population / 2;
console.log(`One half will contain ${half_Population} people`);

// 3. Increase the population by 1
population += 1;
console.log(`Updated population: ${population}`);

// 4. Compare with Finland's population (6 million)
if (population > 6_000_000) {
  console.log(`${country} has a higher population than Finland.`);
} else {
  console.log(`${country} has a lower population than Finland.`);
}

// 5. Compare with the average country population (33 million)
if (population > 33_000_000) {
  console.log(`${country} has a higher population than the average country.`);
} else {
  console.log(`${country} has a lower population than the average country.`);
}

// 6. Create the description string
let description = `${country} is in ${continent}, and its ${
  population / 1_000_000
} million people speak ${language}.`;
console.log(description);
