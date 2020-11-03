// declared variables
var score = 0;
var questionIndex = 0;

// variables for timer
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var timeRemaining = 60;
var holdInterval = 0;
var penalty = 5;
var ulCreate = document.createElement("ul");

// Function for timer
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeRemaining--;
            currentTime.textContent = "Time: " + timeRemaining;

            if(timeRemaining <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Too bad!";
            }
        }, 1000);
    }
    render(questionIndex);
});

//Function for questions
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for(var i= 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].bigQuestion;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

    userChoices.forEach(function(newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}