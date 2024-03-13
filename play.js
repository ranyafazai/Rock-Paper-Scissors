
var userScore = 0;
var computerScore = 0;

function getUsernameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}


function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


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


    if (userScore === 10 || computerScore === 10) {
        endGame();
    }
}


function endGame() {
    if (userScore === 10) {
        alert("Congratulations! You win! ");
    } else {
        alert("Sorry! Computer wins!");
    }

    userScore = 0;
    computerScore = 0;

    $('#user-score').text(userScore);
    $('#computer-score').text(computerScore);
}


$(document).ready(function() {
    $('.choice').click(function() {
        var userChoice = $(this).attr('id');
        handleUserChoice(userChoice);
        animateHands(userChoice);
    });
});

$(document).ready(function(){
    var username = getUsernameFromURL();
    if (username) {
        $("body").prepend("<h1>Welcome, " + username + "! Let's start playing!</h1>");
    } else {
        $("body").prepend("<h1>Welcome! Let's start playing!</h1>");
    }
});


