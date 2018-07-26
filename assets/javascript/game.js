var footballTeams = ["patriots", "cowboys", "rams", "dolphins", "panthers", "bills"];
var userGuess;
var wins = 0;
var losses = 0;
var remainingGuess = 12;
var currentWord;
var emptyWord = ""
var myMusic;

currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];


for (i = currentWord.length; i > 0; i--){
    emptyWord += "-";
}


var lettersGuessed = [];


function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

function lose(){

    emptyWord = "";
    
    currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

    for (i = currentWord.length; i > 0; i--){
        emptyWord += "-";
    }

    losses++;

    lettersGuessed = [];

    remainingGuess = 12;
}

function win(){

    changePicture();

    emptyWord = "";
        
    currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

    for (i = currentWord.length; i > 0; i--){
         emptyWord += "-";
    }

    wins++;

    lettersGuessed = [];

    remainingGuess = 12;

}

function decreaseGuess(){
    if(emptyWord.includes(userGuess)){
        
    }
    else{
        remainingGuess--;
    }
}

function letters(){
    if(emptyWord.includes(userGuess) || lettersGuessed.includes(userGuess)){
        
    }
    else{
        lettersGuessed.push(userGuess);
    }
}

function replaceWord(){
    for (r = 0; r < currentWord.length; r++){
        
        if(currentWord[r] === userGuess){
           emptyWord = replaceAt(emptyWord, r, userGuess);
        }
   }
}

function changePicture(){

    if(emptyWord === "patriots"){
        document.getElementById("image").src="https://images-na.ssl-images-amazon.com/images/I/71ThCKlLrhL._SL1500_.jpg";

        myMusic = new sound ()
    }

    if(emptyWord === "cowboys"){
        document.getElementById("image").src="https://vignette.wikia.nocookie.net/degrassi/images/9/99/Trash-can-full-of-trash-keeeeetooo-21950089-600-456.jpg/revision/latest?cb=20140921033503";

    }

    if(emptyWord === "rams"){
        document.getElementById("image").src="http://www.inglewoodtoday.com/wp-content/uploads/2018/03/Top-design-Los-Angeles-Rams-flag-90x150cm-polyester-banner-with-2-Metal-Grommets.jpg_640x640.jpg";

    }

    if(emptyWord === "dolphins"){
        document.getElementById("image").src="https://i.pinimg.com/originals/98/c5/63/98c5639d2e03f9c22dc902957b885355.jpg";

    }

    if(emptyWord === "panthers"){
        document.getElementById("image").src="http://media.graytvinc.com/images/810*455/carolinapanthers1.jpg";

    }

    if(emptyWord === "bills"){
        document.getElementById("image").src="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2018/01/maxresdefault-1038x576.jpg";

    }

}

document.onkeyup = function(event){

    
    userGuess = event.key.toLowerCase();

  
    decreaseGuess();
    letters();
    replaceWord();

     document.getElementById("current_word").firstChild.data = emptyWord;

    if (footballTeams.includes(emptyWord)){
       win();
    }

    if (remainingGuess === 0){
        lose();
    }

    document.getElementById("number_wins").firstChild.data = wins;
    document.getElementById("remaining_guess").firstChild.data = remainingGuess;
    document.getElementById("taken_letters").firstChild.data = lettersGuessed;
    document.getElementById("number_losses").firstChild.data = losses;
    

    console.log("button pressed " + userGuess);
    console.log("the current word is " + currentWord);
    console.log("the empty word is " + emptyWord);
    console.log("remaining guesses: " + remainingGuess);
    console.log("letters guessed " + lettersGuessed);
    console.log("number of wins " + wins);
    console.log("number of losses " + losses); 

}






