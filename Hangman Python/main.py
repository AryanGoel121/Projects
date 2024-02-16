# Creating a class Hangman to make all the functions and methods in;
class Hangman():
    def __init__(self, word):
        self.givenWord = word

    def checkInput(self, guess):
        return guess.isalpha()
    
    def printWord(self, word, guess):
        result = []
        for i in word:
            if i in guess:
                result.append(i)
            else:
                result.append('_')
        print(' '.join(result))

    def userInput(self):
        userGuess = input("Enter a char: ")
        return userGuess
    
    def gameStart(self):
        guessedList = []
        attempts = 0
        maxAttempts = 6

        while(attempts < maxAttempts):
            userGuess = hang.userInput()
            if not self.checkInput(userGuess):
                print("Invalid Input!, Input only single Alphabets!")
                continue
            if userGuess in guessedList:
                print("Already Guessed, Input a different Alphabet")
                continue
            if userGuess not in self.givenWord:
                print("Wrong Input!, Try again")
                attempts += 1
                print("Attempts Left: ", maxAttempts-attempts)
                continue

            guessedList.append(userGuess)
            self.printWord(self.givenWord, guessedList)

            if all(letter in guessedList for letter in self.givenWord):
                print("Congratulation! You Won")
                exit()
        
        print("You could not guess the word in given attempts!")
        

# Main  
word = 'chris'
hang = Hangman(word)

# Starting Hangman
hang.gameStart()