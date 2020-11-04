// Var with array and object for questions 
var questions = [
    {
        bigQuestion: "What year did Super Mario Bros. debut on the NES?",
        ABCD: ["1983", "1984", "1985", "1986"],
        correctAnswer: "1985"
    },
    {
        bigQuestion: "In the original Donkey Kong arcade game, Mario was called what?",
        ABCD: ["Mario", "Jumpman", "Bob", "The Plumber"],
        correctAnswer: "Jumpman"
    },
    {
        bigQuestion: "The green-clad protagonist in The Legend of Zelda is____?",
        ABCD: ["Zelda", "Link", "Luigi", "Green Mario"],
        correctAnswer: "Link"
    },
    {
        bigQuestion: "In Zelda, which is not part of the Triforce?",
        ABCD: ["Courage", "Wisdom", "Power", "Shadow"],
        correctAnswer: "Shadow"
    },
    {
        bigQuestion: "What year did Nintendo start their company?",
        ABCD: ["1889", "1900", "1979", "1985"],
        correctAnswer: "1889"
    },
];

// Variables
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

//Event listener for timer
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time remaining: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Too Bad!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders bigQuestions and ABCD to page: 
function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].bigQuestion;
        var userABCD = questions[questionIndex].ABCD;
        questionsDiv.textContent = userQuestion;
    }
    userABCD.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
//Q&A Selection
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].correctAnswer) {
            score++;
            createDiv.textContent = "Correct! The correctAnswer is:  " + questions[questionIndex].correctAnswer;
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct correctAnswer is:  " + questions[questionIndex].correctAnswer;
        }

    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "Quiz is donw!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
//Quiz is finished
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    //Time remaining
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);
   //enter
   var createInput = document.createElement("input");
   createInput.setAttribute("type", "text");
   createInput.setAttribute("id", "initials");
   createInput.textContent = "";

   questionsDiv.appendChild(createInput);

   //submit
   var createSubmit = document.createElement("button");
   createSubmit.setAttribute("type", "submit");
   createSubmit.setAttribute("id", "Submit");
   createSubmit.textContent = "Submit";

   questionsDiv.appendChild(createSubmit);
 
    //Event listener for local storage
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./HighScores.html");
        }
    });

}
