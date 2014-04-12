var choserock = "You Chose Rock";
var chosepaper = "You Chose paper";
var chosescissors = "You Chose Scissors";
 
var uChoice = "0"


function rock() {
  var urock = document.getElementById("rock");
  //alert(choserock);
  uChoice="rock";
  compare(uChoice, iPick);

}

function paper() {
  var upaper = document.getElementById("paper");
  //alert(chosepaper);
  uChoice="paper";
  compare(uChoice, iPick);

}

function scissors() {
  var urock = document.getElementById("scissors");
  //alert(chosescissors);
  uChoice="scissors";
  compare(uChoice, iPick);

}


var iPick =  Math.random();
if (iPick < 0.34) {
  iPick = "rock";
} else if(iPick <= 0.67) {
  iPick = "paper";
} else {
  iPick = "scissors";
}



var compare = function (choice1, choice2) {
  if (choice1 === choice2) {
    alert( "The computer randomly picked what you chose, " + choice2 + ". Therefore, the result is a tie!");
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      alert( "The computer randomly picked " + choice2 + ". Therefore, you win!");
    } else {
      alert( "The computer randomly picked paper. Therefore, you lose!");
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      alert( "The computer randomly picked " + choice2 + ". Therefore, you win!");
    } else {
      alert( "The computer randomly picked scissors. Therefore, you lose!");
    }
    } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      alert( "The computer randomly picked " + choice2 + ". Therefore, you win!");
    } else {
      alert( "The computer randomly picked rock. Therefore, you lose!");
    }
  }
  

};


