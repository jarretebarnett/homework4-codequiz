var saveScoreBtn = document.getElementById("submit");
var getInitials = document.getElementById("inputInitials");

$(document).ready(function () {

    window.onload = function () {
        var thirtySeconds = 30,
        display = document.querySelector('#time');
        startTimer(thirtySeconds, display);
    };

    var correctChoice = [$("#button-03"), $("#button-08"), $("#button-10"), $("#button-13"), $("#button-18")];

    // Question #1
    $("#button-01").on("click", function () {
        alert("Wrong!");
    });
    $("#button-02").on("click", function () {
        alert("Wrong!");
    });
    $("#button-03").on("click", function () {
        if (correctChoice = true) {
            confirm("Correct!");
            // saveScore();
        }
    });
    $("#button-04").on("click", function () {
        alert("Wrong!");
    });

    // Question #2
    $("#button-05").on("click", function () {
        alert("Wrong!");
    });
    $("#button-06").on("click", function () {
        alert("Wrong!");
    });
    $("#button-07").on("click", function () {
        alert("Wrong!");
    });
    $("#button-08").on("click", function () {
        if (correctChoice = true) {
            confirm("Correct!");
            // saveScore();
        }
    });

    // Question #3
    $("#button-09").on("click", function () {
        alert("Wrong!");
    });
    $("#button-10").on("click", function () {
        if (correctChoice = true) {
            confirm("Correct!");
            // saveScore();
        }
    });
    $("#button-11").on("click", function () {
        alert("Wrong!");
    });

    // Question #4
    $("#button-12").on("click", function () {
        alert("Wrong!");
    });
    $("#button-13").on("click", function () {
        if (correctChoice = true) {
            confirm("Correct!");
            // saveScore();
        }
    });
    $("#button-14").on("click", function () {
        alert("Wrong!");
    });
    $("#button-15").on("click", function () {
        alert("Wrong!");
    });

    // Question #5
    $("#button-16").on("click", function () {
        alert("Wrong!");
    });
    $("#button-17").on("click", function () {
        alert("Wrong!");
    });
    $("#button-18").on("click", function () {
        if (correctChoice = true) {
            confirm("Correct!");
            // saveScore();
        }
    });
    $("#button-19").on("click", function () {
        alert("Wrong!");
    });
});

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer % 60, 10);

        display.textContent = seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

function saveScore() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    var initials = getInitials.value;
    var newScore = {
        score: time,
        initials: initials
    }
    highScores.push(newScore);
    window.localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "scorepage.html";
}

saveScoreBtn.onclick = saveScore();