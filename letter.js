// this module will control a letter appears as a black space or as the letter itself
// will be passed into a later function 
var letters = function(let){
    this.charac = let;
    this.appear = false;
    this.renderLetter = function(){
        return !(this.appear) ? "_" : this.charac; 
    };
};
// export the constructor
module.exports = letter;