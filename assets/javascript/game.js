var footballTeams = ["PATRIOTS", "COWBOYS", "RAMS", "DOLPHINS", "PANTHERS", "BILLS"];
var userGuess;
var wins = 0;
var losses = 0;
var remainingGuess = 8;
var currentWord;
var emptyWord = ""
var patriots = new Audio("assets/Audio/WeAreTheChampions.mp3")
var cowboys = new Audio("assets/Audio/cowboys SUCK!.mp3")
var rams = new Audio("assets/Audio/Mic Nice - Rams House (Whose House).mp3")
var dolphins = new Audio("assets/Audio/Miami dolphins fight song.mp3")
var panthers = new Audio("assets/Audio/MARK B. - CAROLINA ANTHEM (SHOT BY @DJCHUCKT).mp3")
var bills = new Audio("assets/Audio/Buffalo Bills Shout Song.mp3")

//creating word, empty word, and letters guessed array
currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

for (i = currentWord.length; i > 0; i--){
    emptyWord += "-";
}

var lettersGuessed = [];

//function that replaces a character at a given string, index, and word
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }

//function that resets game after loss and adds 1 loss
function lose(){

    emptyWord = "";
    
    currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

    for (i = currentWord.length; i > 0; i--){
        emptyWord += "-";
    }

    losses++;

    lettersGuessed = [];

    remainingGuess = 8;
}

//function that increases win count and resets game
function win(){

    changePicture();

    emptyWord = "";
        
    currentWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];

    for (i = currentWord.length; i > 0; i--){
         emptyWord += "-";
    }

    wins++;

    lettersGuessed = [];

    remainingGuess = 8;

}

//function that decreases the guess count if user guess is not guessed already
function decreaseGuess(){
    if(emptyWord.includes(userGuess) || lettersGuessed.includes(userGuess) || userGuess === "ENTER"){
        
    }
    else{
        remainingGuess--;
    }
}

//function that adds letters to letters guessed with user input
function letters(){
    if(emptyWord.includes(userGuess) || lettersGuessed.includes(userGuess) || userGuess === "ENTER"){
        
    }
    else{
        lettersGuessed.push(userGuess);
    }
}

//function that replaces the empty word with user guess (if character exists)
function replaceWord(){
    for (r = 0; r < currentWord.length; r++){
        if(currentWord[r] === userGuess){
           emptyWord = replaceAt(emptyWord, r, userGuess);
        }
   }
}

//function that changes the picture and plays the audio for that specific picture
function changePicture(){

    if(emptyWord === "PATRIOTS"){
        document.getElementById("image").src="https://images-na.ssl-images-amazon.com/images/I/71ThCKlLrhL._SL1500_.jpg";

        stopAudio();
        patriots.play();
    }

    if(emptyWord === "COWBOYS"){
        document.getElementById("image").src="https://vignette.wikia.nocookie.net/degrassi/images/9/99/Trash-can-full-of-trash-keeeeetooo-21950089-600-456.jpg/revision/latest?cb=20140921033503";

        stopAudio();
        cowboys.play();
    }

    if(emptyWord === "RAMS"){
        document.getElementById("image").src="http://www.inglewoodtoday.com/wp-content/uploads/2018/03/Top-design-Los-Angeles-Rams-flag-90x150cm-polyester-banner-with-2-Metal-Grommets.jpg_640x640.jpg";

        stopAudio();
        rams.play();
    }

    if(emptyWord === "DOLPHINS"){
        document.getElementById("image").src="https://i.pinimg.com/originals/98/c5/63/98c5639d2e03f9c22dc902957b885355.jpg";

        stopAudio();
        dolphins.play();
    }

    if(emptyWord === "PANTHERS"){
        document.getElementById("image").src="http://media.graytvinc.com/images/810*455/carolinapanthers1.jpg";

        stopAudio();
        panthers.play();
    }

    if(emptyWord === "BILLS"){
        document.getElementById("image").src="http://www.wdkx.com/wdkxwp/wp/wp-content/uploads/2018/01/maxresdefault-1038x576.jpg";

        stopAudio();
        bills.play();
    }
}

//function that stops audio and restarts it
function stopAudio(){
    patriots.pause();
    patriots.currentTime = 0;

    cowboys.pause();
    cowboys.currentTime = 0;

    bills.pause();
    bills.currentTime = 0;

    rams.pause();
    rams.currentTime = 0;

    panthers.pause();
    panthers.currentTime = 0;

    dolphins.pause();
    dolphins.currentTime = 0;
}

//main function. activates after user touches a key
document.onkeyup = function(event){

    userGuess = event.key.toUpperCase();

    //calls to functions
    replaceWord();
    decreaseGuess();
    letters();

    document.getElementById("current_word").firstChild.data = emptyWord;

    if (footballTeams.includes(emptyWord)){
        win();
    }

    if (remainingGuess === 0){
        document.getElementById("current_word").firstChild.data = currentWord;
        lose();
    }
    
    //replaces the current id's with the new ones
    document.getElementById("number_wins").firstChild.data = wins;
    document.getElementById("remaining_guess").firstChild.data = remainingGuess;
    document.getElementById("taken_letters").firstChild.data = lettersGuessed;
    document.getElementById("number_losses").firstChild.data = losses;
    
    //console.log all of the answers
    console.log("button pressed " + userGuess);
    console.log("the current word is " + currentWord);
    console.log("the empty word is " + emptyWord);
    console.log("remaining guesses: " + remainingGuess);
    console.log("letters guessed " + lettersGuessed);
    console.log("number of wins " + wins);
    console.log("number of losses " + losses); 
    
}






