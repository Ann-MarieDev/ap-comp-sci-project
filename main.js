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

// Keeps track if the pet is sick
let sickScore = 0;

// Set sick to false
let sick = false;

// Time being sick
let sickTime = 0;

//--------------------------------------Functions-------------------------------------------------
//--------------------Pet Stats------------------------
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

//--------------------Restore Pet Stats------------------------
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

//--------------------Lose Pet Stats------------------------
// Lose stats over time
function loseSleep(){
    if (sleepScore <= 0 || sleepScore >= 10){
        sleepScore = sleepScore - 1;
        stats();
    } else {
        sickScore == sickScore + 1;
    }
    
}
function loseHunger(){
    if (hungryScore <= 0 || hungryScore >= 10){
        hungryScore = hungryScore - 1;
        stats();
    } else {
        sickScore == sickScore + 1;
    }
 
}

function losePlay(){
    if (playScore <= 0 || playScore >= 10){
        playScore = playScore - 1;
        stats();
    } else {
        sickScore == sickScore + 1;
    }
 
}

// Lose stats over time
setInterval(loseSleep(), 60000);
setInterval(loseHunger(), 20000);
setInterval(losePlay(), 45000);

//--------------------Sick Pet------------------------
// Stops everything if pet dies
function die(){
    null;
}

// Sets pet to sick if sickscore == 10
if (sickScore == 10){
    sick == true;
}
// Pet dies if sick for too long
if (sick == true){
    setInterval(function(){
        sickTime++;

        if (sickTime >= 600){
            die();
            clearInterval(this);
        }
    }, 1000);
}


//---------------------------------------Player inputs-----------------------------------------------
// 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("sleep").addEventListener("click", sleep);
    document.getElementById("eat").addEventListener("click", eat);
    document.getElementById("play").addEventListener("click", play);
});
