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
        $("p").text("tie!")
    } else if  (userChoice === 'rock' && computerChoice === 'scissors') {
        result="user"
        $("p").text("Computer picks scissors. You WIN")
    } else if(userChoice === 'paper' && computerChoice === 'rock'){
        result="user"
        $("p").text("Computer picks rock. You WIN ")
    }  else if (userChoice === 'scissors' && computerChoice === 'paper')
     {
        $("p").text("Computer picks paper. You WIN")
        result = "user";
    } 
    else if  (computerChoice === 'rock' && userChoice === 'scissors') {
        result="computer"
        $("p").text("Computer picks rock. You LOSE")
    } else if(computerChoice === 'paper' && userChoice === 'rock'){
        result="computer"
        $("p").text("Computer picks paper. You LOSE ")
    }  else if (computerChoice === 'scissors' && userChoice === 'paper')
     {
        $("p").text("Computer picks scissors. You LOSE")
        result = "computer";
    } 

    updateScore(result);
}

// Function to update the score based on the result and store in local storage
function updateScore(winner, username) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    // Update the scores on the page
    $('#user-score').text(userScore);
    $('#computer-score').text(computerScore);

    // Retrieve the scores history from local storage
    var scoresHistory = JSON.parse(localStorage.getItem('scoresHistory')) || [];

    // Store the current result along with the username in the scores history
    scoresHistory.push({ username: username, userScore: userScore, computerScore: computerScore });

    // Log the scores history to console for debugging
    console.log("Scores History:", scoresHistory);

    // Update the scores history in local storage
    localStorage.setItem('scoresHistory', JSON.stringify(scoresHistory));

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
        var username = getUsernameFromURL(); // Retrieve username
        handleUserChoice(userChoice, username); // Pass the username
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


