var questionCheck = 0;
var time = questions.length*60;
var timer;
var questionsId = document.getElementById("questionsDiv");
var timeID = document.getElementById("time");
var choicesUlId = document.getElementById("choicesUl");
var beginId = document.getElementById("begin");

function begin() {
    timer = setInterval(function startTime, 1000);
    timeId.textContent = time;
    function questionPull();
}

function questionPull() {
    var firstQuestion = questions [questionCheck];
    var bigQuestionSet= document.getElementById("bigQuestion");
    bigQuestionSet.textContent = firstQuestion.bigQuestion;
    choicesUlId.innerHTML = "";
//for loop to loop over choices, attach event listener to each choice. append display on page whatever answer they select.
}

//create function to update time, same as the set interval like on line 10