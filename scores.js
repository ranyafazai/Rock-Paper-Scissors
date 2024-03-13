$(document).ready(function() {
    $(document).ready(function() {
        var scoresHistory = [
            { username: "basyouni", userScore: 5, computerScore: 10 },
            { username: "ranouch", userScore: 10, computerScore: 3},
            { username: "raslenSnoopy", userScore: 10, computerScore: 8 }
        ];
    
        scoresHistory.forEach(function(entry) {
            $('#scoresList').append('<p>' + entry.username + ': ' + entry.userScore + ' - ' + entry.computerScore + ' computer</p>');
        });
    
        $("#clearScoresButton").click(function() {
            $('#scoresList').empty();
        });
    });
    
