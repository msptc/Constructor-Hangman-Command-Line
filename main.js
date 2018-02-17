// this contains the logic of my game. Running it in Bash will start the game
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Animal Hangman!!!");
console.log("Guess a letter of the name of an animal");
console.log("-----------------------------");
prompt.start();

game = {
    words: ['giraffe', 'tiger', 'lion', 'anteater', 'chimpanzee', 'elephant'],

    wins:0,

    guessesLeft: 10,

    currentWord: null,

    beginGame: function(wrd) {
        this.reset();
        this.currentWord = new Word(this.words[Math.floor(Math.random()*this.words.length)]);
        this.currentWord.getLetter();
        this.userPrompt;
    },

    reset: function(){
        this.guessesLeft = 10;
    },

    userPrompt: function(){
        var self = this;
        prompt.get(['guessLetter'], function(err, result){
            console.log("You guessed: " + result.guessLetter);
            var howManyGuesses = self.currentWord.checkLetters(result.guessLetter);

            if (howManyGuesses == 0){
                console.log("INCORRECT")
            } else {
                console.log("CORRECT")
                if(self.currentWord.findWord()){
                    console.log("WINNER!!!");
                    console.log("----------------------");
                    return;
                }
            }
        
        console.log("Guesses left: " + self.guessesLeft);
        console.log("-------------------------------");
        
        if ((self.guessesLeft > 0) && (self.currentWord.found == false)){
            self.userPrompt();
        }
        
        else if (self.guessesLeft ==0){
            console.log("Game Over. Correct word is ", self.currentWord.target);
        
        } else{
            console.log(self.currentWord.renderWords());
        }
        
        });
    }
};

game.beginGame();
