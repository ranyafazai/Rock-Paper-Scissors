// Variable to keep track of user and computer scores
var userScore = 0;
var computerScore = 0;

// Function to extract username from URL query parameter
function getUsernameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}

// Function to get a random choice for the computer
function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to handle the user's choice and determine the winner
function handleUserChoice(userChoice) {
    var computerChoice = getComputerChoice();
    var result;

    console.log("User choice:", userChoice);
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        result = "tie";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "user";
    } else {
        result = "computer";
    }

    updateScore(result);
}

// Function to update the score based on the result
function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    console.log("User Score:", userScore);
    console.log("Computer Score:", computerScore);

    $('#user-score').text(userScore);
    $('#computer-score').text(computerScore);

    // Check if any player reached 10 wins
    if (userScore === 10 || computerScore === 10) {
        endGame();
    }
}


// Function to end the game and display the winner
function endGame() {
    if (userScore === 10) {
        alert("Congratulations! You win! ");
    } else {
        alert("Sorry! Computer wins!");
    }

    // Reset scores
    userScore = 0;
    computerScore = 0;

    // Reset scoreboard display
    $('#user-score').text(userScore);
    $('#computer-score').text(computerScore);
}

// jQuery click event handler for user's choice
$(document).ready(function() {
    $('.choice').click(function() {
        var userChoice = $(this).attr('id');
        handleUserChoice(userChoice);
        animateHands(userChoice);
    });
});

// Code to run on document ready
$(document).ready(function(){
    var username = getUsernameFromURL();
    if (username) {
        $("body").prepend("<h1>Welcome, " + username + "! Let's start playing!</h1>");
    } else {
        $("body").prepend("<h1>Welcome! Let's start playing!</h1>");
    }
});


