var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

goBack.addEventListener("click", function() {
    window.location.replace("index.html");
}
);

clear.addEventListener("click", function() {
    localStorage.clear();
    localStorage.reload();
}
);

//create a save high score area
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});