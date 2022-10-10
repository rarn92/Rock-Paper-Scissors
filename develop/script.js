var wins = 0;
var ties = 0;
var losses = 0;

var options = ["Rock", "Paper", "Scissors"];

var playGame = function () {

    var playerChoice = prompt("Please enter Rock (R), Paper (P), or Scissors (S)");

    if (!playerChoice) {
        playGame();
    }

    playerChoice = playerChoice.toUpperCase;

    if (playerChoice = "ROCK") {
        playerChoice = "R"
    }

    if (playerChoice = "PAPER") {
        playerChoice = "P"
    }

    if (playerChoice = "SCISSORS") {
        playerChoice = "S"
    }

    // if (playerChoice != "R" && playerChoice != "P" && playerChoice != "S") {
    //     alert("Please enter R, P, or S");
    //     playGame();
    // }

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (playerChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (playerChoice === "R" && computerChoice === "S") ||
        (playerChoice === "P" && computerChoice === "R") ||
        (playerChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++;
    window.alert("You lose!");
    }

window.alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

var playAgain = window.confirm("Play again?");

if (playAgain) {
    playGame();
}
};

playGame();