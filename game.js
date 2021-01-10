var character = document.getElementById("character");
var block = document.getElementById("block");
var block1 = document.getElementById("block1");
var startgameaudio = new Audio("startgameaudio.mp3");
var subwayaudio = new Audio("subwayaudio.mp3");
var game = document.getElementById("game");

startgameaudio.loop = true;
// startgameaudio.play();

document.body.onkeyup = function (e) {
  let i = 1;
  if (e.keyCode == 32) {
    if (i == 1) {
    //   startgameaudio.pause();
    //   startgameaudio.currentTime = 0;
    //   subwayaudio.play();
      game.classList.add("subway-animation");
      character.style.display = "block";
      block.style.zIndex = 1;
      block1.style.zIndex = 1;
    }
    i++;
    setTimeout(function () {
    block.classList.add("animate-block");
    block1.classList.add("animate-block1");
    }, 400);
  }
};

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      console.log('Space pressed')
      jump();
    }
  })

function jump() {
    if(character.classList != "animate"){
    character.classList.add("animate");

    }
    setTimeout(function () {
      character.classList.remove("animate");
    }, 300);
  }

let score = 0
setInterval(function(){
    document.querySelector("Currentscore").innerText= score;
    score+=1;
},100)

// var checkDead = setInterval(function(){

//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

//     if(blockLeft<20 && blockLeft>0 && characterTop >=130){
//         block.style.display="none";
//         block.style.animation = "none";
//         alert("u lose")

//     }
// },10)
