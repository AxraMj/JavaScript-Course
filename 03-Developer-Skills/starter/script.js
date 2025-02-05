// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// -- What is temperature amplitude?
// Answer: the difference between the highest and lowest temperatures recorded over a period of time.
// -- So,how to compute max and min temperature?
// -- What is a secosor error look like?and what to do it occurs?
// answerA sensor error occurs when a temperature sensor malfunctions or provides incorrect readings

// 2) Breaking up into sub-problems
// -- How to ignore errors?
// -- find max value in temperature array
// -- Find min value
// -- Find diff from min and max and return it

//Solution
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calTemperature = (temp) => {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i <= temp.length; i++) {
    let currTemp = temp[i];

    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  let diff = max - min;
  console.log(`difference is: ${diff}`);
};

calTemperature(temperatures);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calTwoTemperature = (t1, t2) => {
  let concatArray = t1.concat(t2);
  let max = concatArray[0];
  let min = concatArray[0];
  for (let i = 0; i <= concatArray.length; i++) {
    let currTemp = concatArray[i];

    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  let diff = max - min;
  console.log(`difference is: ${diff}`);
};

calTwoTemperature([10, 2, 20], [9, 0, 5]);
