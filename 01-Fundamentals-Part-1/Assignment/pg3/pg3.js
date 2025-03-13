// Set the value of 'language' to the language spoken where you live (some
//     countries have multiple languages, but just choose one)
//     2. Think about which variables should be const variables (which values will never
//     change, and which might change?). Then, change these variables to const.
//     3. Try to change one of the changed variables now, and observe what happens

// 1. Declare variables
const country = "India";
const continent = "Asia";
let population = 1_400_000_000; // India's actual population in numbers
const isIsland = false; // India is not an island
let language = "Hindi";

// 2. Attempt to change a 'const' variable
// country = "Austria"; // ❌ This will cause an error

console.log(country); // ✅ Output: "India"
