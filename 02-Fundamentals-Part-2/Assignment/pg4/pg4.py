# Create an array containing 4 population values of 4 countries of your choice. 
# You may use the values you have been using previously. Store this array into a 
# variable called 'populations' 
# 2. Log to the console whether the array has 4 elements or not (true or false) 
# 3. Create an array called 'percentages' containing the percentages of the 
# world population for these 4 population values. Use the function 
# 'percentageOfWorld1' that you created earlier to compute the 4 
# percentage values

populations = [1400, 26, 67, 19]
def percentageOfWorld1(population):
    percentage=round(population/7900 *100)
    return percentage

print(len(populations)==4)
percentages=[]

percentages.append(percentageOfWorld1(2000))
percentages.append(percentageOfWorld1(200))
print(percentages)
