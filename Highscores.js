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