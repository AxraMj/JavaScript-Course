# Use a switch statement to log the following string for the given 'language': 
# chinese or mandarin: 'MOST number of native speakers!' 
# spanish: '2nd place in number of native speakers' 
# english: '3rd place' 
# hindi: 'Number 4' 
# arabic: '5th most spoken language' 
# for all other simply log 'Great language too :D'

language = input("Enter a language: ").lower()  # Convert input to lowercase

match language:
    case "chinese" | "mandarin":
        print("MOST number of native speakers!")
    case "spanish":
        print("2nd place in number of native speakers")
    case "english":
        print("3rd place")
    case "hindi":
        print("Number 4")
    case "arabic":
        print("5th most spoken language")
    case _:
        print("Great language too :D")  # Default case
