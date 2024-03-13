$(document).ready(function() {
    $(document).ready(function() {
        var scoresHistory = [
            { username: "John", userScore: 5, computerScore: 7 },
            { username: "Alice", userScore: 8, computerScore: 2 },
            { username: "Bob", userScore: 3, computerScore: 6 }
        ];
    
        scoresHistory.forEach(function(entry) {
            $('#scoresList').append('<p>' + entry.username + ': ' + entry.userScore + ' - ' + entry.computerScore + ' computer</p>');
        });
    
        $("#clearScoresButton").click(function() {
            $('#scoresList').empty();
        });
    });
    
