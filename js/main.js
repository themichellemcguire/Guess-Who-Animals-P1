/*----- constants -----*/
// const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
// const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
var x = document.getElementById("question");
// var y = document.getElementById("question");

function playAudio(){
    x.play()
}
// function playAudio(){
//     y.play()
// }

// $btn.addEventListener('mouseover', function {
//     $audio.getElementById("scalesAudio").play
// });

// $(".btnHover").click(function(){
//     console.log("This button works")
// });
/*----- functions -----*/

var answers = ['dalmation', 'yellowBird', 'sheltie', 'shark', 'rainbowFish', 'panther',
    'lion', 'leopard', 'husky', 'greenBird', 'flamingo', 'clownFish'];

    //secret animal = solution
var solution = answers[Math.floor(Math.random() * answers.length)];
console.log(solution);





// make descriptions for each animal for the computer to be able to compare with the clue that is selected by 
// the player

// set up random computer animal selection

// create hover events for clue selections with audio that describes the Image

// create click events for the clues that are selected 

// computer will respond with a yes/no answer if the secret animal has the selected clues

// create click events to "hide" the animal images that are selected

// once one animal image is remaining, computer will compare with secret animal. 

// If same, computer will congratulate winner. If not, computer will "show" correct image and tell player to play again.