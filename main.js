
$(document).ready(function(){
    $("#startButton").click(function(){
        var username = $("#username").val();
        if ($.trim(username) === "") {
            alert("Please enter a username to start playing.");
        } else {
            var newPage = "play.html?username=" + encodeURIComponent(username);
            window.location.href=newPage;
        }
    });
    $("#scoresButton").click(function() {
        window.location.href = "scores.html"; // Redirect to the scores page
    });

    $(document).ready(function() {
        $("#rulesButton").click(function() {
            window.location.href = "rules.html"; // Redirect to the rules page
        });
    
    });
// jQuery click event handler for user's choice
$(document).ready(function() {
    $('.choice').click(function() {
        var userChoice = $(this).attr('id');
        var username = getUsernameFromURL(); // Retrieve username
        if (username) {
            handleUserChoice(userChoice, username); // Pass the username if it exists
        } else {
            alert("Username not found."); // Alert if username is not found
        }
        animateHands(userChoice);
    });
});

   
        $(document).ready(function() {
            $("#themeButton").click(function() {
             
                var currentColor = $("body").css("background-color");
        
                if (currentColor === "rgb(230, 236, 240)") {
                    $("body").css("background-color", "purple"); 
                } else {
                    $("body").css("background-color", "#e6ecf0"); 
                }
            });
        });
    
});

