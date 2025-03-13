// Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)
// Sarah's criteria
// Sarah's criteria for choosing a country
const countries = {
  Portugal: { language: "English", population: 10, isIsland: false },
  Canada: { language: "English", population: 38, isIsland: false },
  Australia: { language: "English", population: 26, isIsland: true },
  Maldives: { language: "English", population: 0.5, isIsland: true },
  India: { language: "Hindi", population: 1400, isIsland: false },
  USA: { language: "English", population: 331, isIsland: false },
  UK: { language: "English", population: 67, isIsland: false },
  Japan: { language: "Japanese", population: 125, isIsland: true },
  Germany: { language: "German", population: 83, isIsland: false },
  France: { language: "French", population: 68, isIsland: false },
};

const country = prompt("Enter your Choosen country and let me check:");
if (
  countries[country] &&
  countries[country].language == "English" &&
  countries[country].population < 50 &&
  !countries[country].isIsland
) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
