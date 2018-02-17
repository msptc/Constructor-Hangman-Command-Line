var letter = require('./letter.js');

function Word(target){
    this.target = target;
    this.letters = [];
    this.found = false;

    this.getLetter = function(){
        for(var i=0; i < this.target.length; i++){
            this.letters.push(new letter(this.target[i]));
        }
    };
    
    this.wordFind = function(){
        this.found = this.letters.every(function(currentLetter){
            return currentLetter.appear
        });
        return this.found;
    };
    this.checkLetters = function(guessLetter) {
        var zero = 0;

        for(var i=0; i<this.letters.length;i++){
            if(this.letters[i].charac = guessLetter){
                this.letters[i].appear = true;
                zero++;
            }
        }
        return zero;
    }
    this.renderWords = function(){
        var string = '';
        for (var i=0;i<this.letters.length; i++){
            string +=this.letters[i].renderLetter();
        }
        return string;
    };
}

module.exports = Word;