def userInput():
    guess = input("Enter a Char: ")
    return guess

def checkInput(guess):
    return guess.isalpha()

def printWord(word, guessedList):
    results = []
    for i in word:
        if i in guessedList:
            results.append(i)
        else:
            results.append('_')
    print(' '.join(results))


def startGame(word):
    attempts = 0
    maxAttempts = 5
    guessedList = []

    while(attempts < maxAttempts):
        userGuess = userInput()
        if not checkInput(userGuess):
            print("Invalid Input!, Try again.")
            continue
        if userGuess in guessedList:
            print("Already Guessed!, Try again.")
            continue
        if userGuess not in word:
            print("Wrong Guess!!!!!")
            attempts += 1
            print(maxAttempts-attempts, "attempts left")
            continue

        guessedList.append(userGuess)
        printWord(word, guessedList)

        if all(letters in guessedList for letters in word):
            print("Congratulations, You won!")
            exit()
    
    print("You could not guess the word in given attempts!")
        


word = 'chriss'
startGame(word)