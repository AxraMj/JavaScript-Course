# Write a function called 'describeCountry' which takes three parameters: 
# 'country', 'population' and 'capitalCity'. Based on this input, the 
# function returns a string with this format: 'Finland has 6 million people and its 
# capital city is Helsinki' 
# 2. Call this function 3 times, with input data for 3 different countries. Store the 
# returned values in 3 different variables, and log them to the console

def describeCountry(country,population,capitalCity):
    return f'{country} has {population} million people and itscapital city is {capitalCity}'

print(describeCountry("india", 6, "Delhi"))
print(describeCountry("Australia ", 5, "Canberra"))
print(describeCountry("Canada", 8, "Ottawa"))