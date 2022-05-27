
// var number = Math.random()*10;

var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var msg = document.getElementById("msg");


function play() {
    var playerGuess = document.getElementById("guess").value;

      if (playerGuess < number) {
            msg.textContent = 'Your guess is too low';
            // alert("Too low") //
         } else if (playerGuess > number) {
            msg.textContent = 'Your guess is too high';
         } else {
            msg.textContent = 'Jackpot, baby';
        }
    }