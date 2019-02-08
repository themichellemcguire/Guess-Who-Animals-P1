/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/


/*----- event listeners -----*/
window.onload=function() {
    document.getElementById("instructions").play();
    console.log("instuctions is loaded");
};



document.getElementById("reset-btn").addEventListener("click", reload);

var a = document.getElementById("askEars");
var b = document.getElementById("askWater");
var c = document.getElementById("askScales");
var d = document.getElementById("askTeeth");
var e = document.getElementById("askFins");
var f = document.getElementById("askAir");
var g = document.getElementById("askTail");
var h = document.getElementById("askFur");
var i = document.getElementById("askBeak");
var j = document.getElementById("askLegs");
var k = document.getElementById("askFeathers");
var l = document.getElementById("askSpots");
var m = document.getElementById("askNose");
var n = document.getElementById("askEggs");

function playAudio1(){
    a.play()
}
function playAudio2(){
    b.play()
}
function playAudio3(){
    c.play()
}
function playAudio4(){
    d.play()
}
function playAudio5(){
    e.play()
}
function playAudio6(){
    f.play()
}
function playAudio7(){
    g.play()
}
function playAudio8(){
    h.play()
}
function playAudio9(){
    i.play()
}
function playAudio10(){
    j.play()
}
function playAudio11(){
    k.play()
}
function playAudio12(){
    l.play()
}
function playAudio13(){
    m.play()
}
function playAudio14(){
    n.play()
}

/*----- functions -----*/

var answers = ['dalmation', 'yellowBird', 'sheltie', 'shark', 'rainbowFish', 'panther',
    'lion', 'leopard', 'husky', 'greenBird', 'flamingo', 'clownFish'];

    //secret animal = solution 
var solution = answers[Math.floor(Math.random() * answers.length)];
    console.log(solution);

var floppyEar = ['dalmation', 'sheltie'];
var livesInWater = ['shark', 'rainbowFish', 'clownFish'];
var hasScales = ['rainbowFish'];
var hasTeeth = ['shark', 'panther'];
var hasFins = ['shark', 'rainbowFish', 'clownFish'];
var flies = ['yellowBird', 'greenBird', 'flamingo'];
var longTail = ['dalmation', 'panther', 'lion', 'leopard', 'husky'];
var furry = ['dalmation', 'panther', 'lion', 'leopard', 'husky', 'sheltie'];
var longBeak = ['greenBird', 'flamingo'];
var twoLegs = ['yellowBird', 'greenBird', 'flamingo'];
var hasFeathers = ['yellowBird', 'greenBird', 'flamingo'];
var hasSpots = ['dalmation', 'leopard'];
var hasNose = ['dalmation', 'panther', 'lion', 'leopard', 'husky', 'sheltie', 'flamingo'];
var laysEggs = ['shark', 'rainbowFish', 'clownFish', 'yellowBird', 'greenBird', 'flamingo'];


    //fadeout and yes/no audio
$('#dalmation').on('click', function() {
    if ($('#dalmation').css('opacity') == 0) {
        $('#dalmation').css('opacity', 1);
    }
    else {
        $('#dalmation').css('opacity', 0);
    }
});
let animal1 = document.getElementById('dalmation');
animal1.onclick = function() {
    if (animal1.id == solution) {
        return (document.getElementById('win').play());
      } else {
        (document.getElementById('notIt').play());
      }
};

$('#yellowBird').on('click', function() {
    if ($('#yellowBird').css('opacity') == 0) {
        $('#yellowBird').css('opacity', 1);
    }
    else {
        $('#yellowBird').css('opacity', 0);
    }
});

let animal2 = document.getElementById('yellowBird');
animal2.onclick = function() {
    if (animal2.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#sheltie').on('click', function() {
    if ($('#sheltie').css('opacity') == 0) {
        $('#sheltie').css('opacity', 1);
    }
    else {
        $('#sheltie').css('opacity', 0);
    }
});

let animal3 = document.getElementById('sheltie');
animal3.onclick = function() {
    if (animal3.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#shark').on('click', function() {
    if ($('#shark').css('opacity') == 0) {
        $('#shark').css('opacity', 1);
    }
    else {
        $('#shark').css('opacity', 0);
    }
});

let animal4 = document.getElementById('shark');
animal4.onclick = function() {
    if (animal4.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#rainbowFish').on('click', function() {
    if ($('#rainbowFish').css('opacity') == 0) {
        $('#rainbowFish').css('opacity', 1);
    }
    else {
        $('#rainbowFish').css('opacity', 0);
    }
});

let animal5 = document.getElementById('rainbowFish');
animal5.onclick = function() {
    if (animal5.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#panther').on('click', function() {
    if ($('#panther').css('opacity') == 0) {
        $('#panther').css('opacity', 1);
    }
    else {
        $('#panther').css('opacity', 0);
    }
});

let animal6 = document.getElementById('panther');
animal6.onclick = function() {
    if (animal6.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#lion').on('click', function() {
    if ($('#lion').css('opacity') == 0) {
        $('#lion').css('opacity', 1);
    }
    else {
        $('#lion').css('opacity', 0);
    }
});
let animal7 = document.getElementById('lion');
animal7.onclick = function() {
    if (animal7.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#leopard').on('click', function() {
    if ($('#leopard').css('opacity') == 0) {
        $('#leopard').css('opacity', 1);
    }
    else {
        $('#leopard').css('opacity', 0);
    }
});

let animal8 = document.getElementById('leopard');
animal8.onclick = function() {
    if (animal8.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#husky').on('click', function() {
    if ($('#husky').css('opacity') == 0) {
        $('#husky').css('opacity', 1);
    }
    else {
        $('#husky').css('opacity', 0);
    }
});
let animal9 = document.getElementById('husky');
animal9.onclick = function() {
    if (animal9.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#greenBird').on('click', function() {
    if ($('#greenBird').css('opacity') == 0) {
        $('#greenBird').css('opacity', 1);
    }
    else {
        $('#greenBird').css('opacity', 0);
    }
});

let animal10 = document.getElementById('greenBird');
animal10.onclick = function() {
    if (animal10.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#flamingo').on('click', function() {
    if ($('#flamingo').css('opacity') == 0) {
        $('#flamingo').css('opacity', 1);
    }
    else {
        $('#flamingo').css('opacity', 0);
    }
});
let animal11 = document.getElementById('flamingo');
animal11.onclick = function() {
    if (animal11.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
$('#clownFish').on('click', function() {
    if ($('#clownFish').css('opacity') == 0) {
        $('#clownFish').css('opacity', 1);
    }
    else {
        $('#clownFish').css('opacity', 0);
    }
});
let animal12 = document.getElementById('clownFish');
animal12.onclick = function() {
    if (animal12.id == solution) {
        return (document.getElementById('win').play());
      } else {
        return (document.getElementById('notIt').play());
      }
}
