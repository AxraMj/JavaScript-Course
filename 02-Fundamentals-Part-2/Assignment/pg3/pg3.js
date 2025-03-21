// Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
function percentageOfWorld1(population) {
  let percentage = ((population / 7900) * 100).toFixed(2);
  return percentage;
}

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, so it's about ${percentageOfWorld1(
    population
  )}% of the world population.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 1400));
console.log(describePopulation("USA", 331));
