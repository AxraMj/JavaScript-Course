# If your country split in half, and each half would contain half the population, 
# then how many people would live in each half? 
# 2. Increase the population of your country by 1 and log the result to the console 
# 3. Finland has a population of 6 million. Does your country have more people than 
# Finland? 
# 4. The average population of a country is 33 million people. Does your country 
# have less people than the average country? 
# 5. Based on the variables you created, create a new variable 'description' 
# which contains a string with this format: 'Portugal is in Europe, and its 11 million 
# people speak portuguese'

country='india'
continent='Asia'
population=1_400_000_000; 
half_population=population/2
language='Hindi'
print(f'One half will contain ${half_population} people')

population+=1
print(population)

if population>6_000_000:
    print(f'{country} has a higher population than Finland.')
else:
    print(f'{country} has a less population than Finland.')


if population>33_000_000:
    print(f'{country} has a higher population than the average country.')
else:
    print(f'{country} has a Lower population than the average country.')

description=f'{country} is in {continent}, and its {population / 1_000_000} million people speak {language}.'
print(description)