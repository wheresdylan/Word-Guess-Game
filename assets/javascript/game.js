var footballTeams = ["patriots", "cowboys", "rams", "dolphins", "panthers", "bills"];
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


function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

var lettersGuessed = [];

document.onkeyup = function(event){
    
    userGuess = event.key;

    console.log(userGuess);
    console.log(currentWord);

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

    //   if (remaingingGuess === 0){
    //       alert("YOU LOSE");

    //       emptyWord = "";
        
    //       currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];
 
    //       for (i = currentWord.length; i > 0; i--){
    //           emptyWord += "-";
    //       }
 
    //       wins = 0;
 
    //       lettersGuessed = [];

    //   }

    console.log(remainingGuess);
    console.log(emptyWord);
    console.log(lettersGuessed);
    console.log(wins);

}





