var footballTeams = ["patriots", "cowboys", "rams", "dolphins", "panthers", "bills"];
var userGuess;
var wins = 0;
var remainingGuess = 13;
var currentWord;
var emptyWord = ""

var currentWins = document.getElementById("number_wins");
var nextWord = document.getElementById("current_word");
var lastGuess = document.getElementById("remaining_guess");
var lastLetters = document.getElementById("taken_letters");

currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

for (i = currentWord.length; i > 0; i--){
    emptyWord += "-";
}


function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

var lettersGuessed = [];

document.onkeyup = function(event){
    
    userGuess = event.key;

     if(userGuess){
         remainingGuess--;
     }

      if(currentWord.includes(userGuess)){
        var i = currentWord.indexOf(userGuess);
        emptyWord = replaceAt(emptyWord, i, userGuess);
      }

     if(userGuess) {
        lettersGuessed.push(userGuess);
     }

      if (footballTeams.includes(emptyWord)){

        emptyWord = "";
        
         currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

         for (i = currentWord.length; i > 0; i--){
             emptyWord += "-";
         }

         wins++;

         lettersGuessed = [];

      }

      if (remainingGuess === 0){
          alert("YOU LOSE");

          emptyWord = "";
        
          currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];
 
          for (i = currentWord.length; i > 0; i--){
              emptyWord += "-";
          }
 
          lettersGuessed = [];

      }

      console.log(currentWord);
      console.log(emptyWord);
      console.log(remainingGuess);
      console.log(lettersGuessed);
      console.log(wins);
}





