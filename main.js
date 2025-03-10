//------------------------------------------------------------------------------------------------
//                                       Pet Game
//                                  By Gracie Hutchins
//------------------------------------------------------------------------------------------------
// Unit checks
window.onload = function() {
    console.log("HTML/CSS LOADED"); // Page is fully loaded
};

//--------------------------------------Variables-------------------------------------------------
// Keeps track of how much sleep pet needs
let sleepScore = 0;

// Keeps track of how hungry pet is
let hungryScore = 0;

// Keeps track of how much the pet needs to be entertained 
let playScore = 0;

//--------------------------------------Functions-------------------------------------------------
// Checks pet stats
function stats(){
    // Needs sleep
    if (sleepScore <= 5){
        alert("Your pet needs sleep!");
    }

    // Needs Food
    if (hungryScore <= 5){
        alert("Your pet needs food!");
    }

    // Needs play time
    if (playScore <= 5){
        alert("Your pet needs to play!");
    }
}

// Puts pet to sleep -- +restores sleep
function sleep(){
    sleepScore = 10;
    stats();
}

// Feeds pet -- +restores pet hunger
function eat(){
    hungryScore = 10;
    stats();
}

// Plays with pet -- +restores pets entertainment 
function play(){
    playScore = 10;
    stats();
}

//---------------------------------------Player inputs-----------------------------------------------
// 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("sleep").addEventListener("click", sleep);
    document.getElementById("eat").addEventListener("click", eat);
    document.getElementById("play").addEventListener("click", play);
});
