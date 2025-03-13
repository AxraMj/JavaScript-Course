# // Create a function called 'describePopulation'. Use the function type you
# // like the most. This function takes in two arguments: 'country' and
# // 'population', and returns a string like this: 'China has 1441 million people,
# // which is about 18.2% of the world.'
# // 2. To calculate the percentage, 'describePopulation' call the
# // 'percentageOfWorld1' you created earlier
# // 3. Call 'describePopulation' with data for 3 countries of your choice
def percentageOfWorld1(population):
    percentage=round(population/7900 *100)
    return percentage
   

def describePopulation(country,population):
     return f'{country} has 1441 million people, so its about {percentageOfWorld1(population)}% of the world population'

print(describePopulation('india',2000))