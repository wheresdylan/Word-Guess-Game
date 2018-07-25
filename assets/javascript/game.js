var footballTeams = ["patriots", "cowboys", "rams", "dolphins", "panthers", "bills"];
var lettersGuessed = [];
var userGuess;
var wins = 0;
var remainingGuess = 13;
var currentWord;
var emptyWord = ""

var numberWins = document.getElementById("number_wins");
var currentWord = document.getElementById("current_word");
var remaingingGuess = document.getElementById("remaining_guess");
var lettersGuessed = document.getElementById("taken_letters");

currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

for (i = currentWord.length; i > 0; i--){
    emptyWord += "-";
}

console.log(emptyWord);

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

document.onkeyup = function(event){
    
    userGuess = event.key;

    console.log(userGuess);
    console.log(currentWord);

     if(userGuess){
         remainingGuess--;
     }

      if (currentWord.includes(userGuess)){
        var i = currentWord.indexOf(userGuess);
        emptyWord = emptyWord.replaceAt(i, userGuess);
      }

    console.log(remainingGuess);
    console.log(emptyWord);

}



