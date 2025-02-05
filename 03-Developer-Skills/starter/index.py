# // Remember, we're gonna use strict mode in all scripts now!
# "use strict";
# // PROBLEM 1:
# // We work for a company building a smart home thermometer. Our most recent task is this:
# // "Given an array of temperatures of one day, calculate the temperature amplitude.
# // Keep in mind that sometimes there might be a sensor error."

# const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

# // 1) Understanding the problem
# // -- What is temperature amplitude?
# // Answer: the difference between the highest and lowest temperatures recorded over a period of time.
# // -- So,how to compute max and min temperature?
# // -- What is a secosor error look like?and what to do it occurs?
# // answerA sensor error occurs when a temperature sensor malfunctions or provides incorrect readings

# // 2) Breaking up into sub-problems
# // -- How to ignore errors?
# // -- find max value in temperature array
# // -- Find min value
# // -- Find diff from min and max and return it

# //Solution
def calTemperature(temp):
    max=temp[0]
    min=temp[0]
    for i in range(len(temp)):
        if isinstance(temp[i], (int, float)):
            if temp[i] > max:
                max=temp[i]
            if temp[i]<min:
                min=temp[i]
    diff=min-max
    print(max)
    print(min)
    print(f"calculate the temperature amplitude:{diff}")

temperatures = [3, -2, -6, -1, 'error', 13, 17, 15, 14, 9, 5]
calTemperature(temperatures)



