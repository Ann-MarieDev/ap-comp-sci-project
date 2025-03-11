//------------------------------------------------------------------------------------------------
//                                       Pet Game
//                                  By Gracie Hutchins
//------------------------------------------------------------------------------------------------
// Unit checks
window.onload = function() {
    console.log("HTML/CSS LOADED"); // Page is fully loaded
};

//---------------------------------------Sprite Animations----------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const petContainer = document.getElementById('pet');
    
    // Animation settings
    const scale = 3; 
    const baseSize = 32;
    const scaledSize = baseSize * scale; 
    
    // Main logic to naimation
    //Frame 1
    const frame1 = document.createElement('img');
    frame1.src = 'Sprites/New Piskel-1.png.png'; 
    frame1.width = scaledSize;
    frame1.height = scaledSize;
    frame1.style.imageRendering = 'pixelated';
    frame1.style.display = 'block';
    
    // Frame 2
    const frame2 = document.createElement('img');
    frame2.src = 'Sprites/New Piskel-2.png.png'; // Second frame image
    frame2.width = scaledSize;
    frame2.height = scaledSize;
    frame2.style.imageRendering = 'pixelated';
    frame2.style.display = 'none';
    petContainer.appendChild(frame1);
    petContainer.appendChild(frame2);
    let showingFrame1 = true;

    // 
    function animatePet() {
      if (showingFrame1) {
        frame1.style.display = 'block';
        frame2.style.display = 'none';
      } else {
        frame1.style.display = 'none';
        frame2.style.display = 'block';
      }
      
      showingFrame1 = !showingFrame1;
    }
    
    // FPS
    setInterval(animatePet, 1000); 
  });

//--------------------------------------Variables-------------------------------------------------
// Keeps track of how much sleep pet needs
let sleepScore = 10;

// Keeps track of how hungry pet is
let hungryScore = 10;

// Keeps track of how much the pet needs to be entertained 
let playScore = 10;

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
    alert("Your pet needs sleep!");
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
