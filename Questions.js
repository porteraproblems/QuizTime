// variable with array and objects for the questions
var questions = [
    {
        bigQuestion: "What year did Super Mario Bros. debut on the NES?",
        choices: ["1983", "1984", "1985", "1986"],
        correctAnswer: "1985"
    },
    {
        bigQuestion: "In the original Donkey Kong arcade game, Mario was called what?",
        choices: ["Mario", "Jumpman", "Bob", "The Plumber"],
        correctAnswer: "Jumpman"
    },
    {
        bigQuestion: "The green-clad protagonist in The Legend of Zelda is____?",
        choices: ["Zelda", "Link", "Luigi", "Green Mario"],
        correctAnswer: "Link"
    },
    {
        bigQuestion : "In Zelda, which is not part of the Triforce?",
        choices: ["Courage", "Wisdom", "Power", "Shadow"],
        correctAnswer: "Shadow"
    },
    {
        bigQuestion: "What year did Nintendo start their company?",
        choices: ["1889", "1900", "1979", "1985"],
        correctAnswer: "1889"
    },
];

var questionCheck = 0;
var time = questions.length*60;
var timer;
var questionsId = document.getElementById("questionsDiv");
var timeID = document.getElementById("time");
var choicesUlId = document.getElementById("choicesUl");
var beginId = document.getElementById("begin");
var mainPgEl = document.getElementById("mainPage");
var subBtn = document.getElementById("submit");
var subPg = document.getElementById("submitScores");
var scorePg = document.getElementById("highScores");

beginId.addEventListener("click", begin);

function begin() {

}

function time () {
    timer = setInterval(function() {
        var seconds = 60;
        seconds--;
        timeID.textContent = "Time Remaining " + seconds;
        if(seconds <= 0) {
            clearInterval(timeID);
        }
    }, 1000);
}

function startQs () {
    var questList;
    if(questList === questions.length) {
        questList = 0;
        questionsId.style.display = "block";
        mainPgEl.style.display = "none";
    }

    else {
        var questStore = questions[questList];
        
    }
}
console.log(startQs);


// function begin() {
//     timer = setInterval(startTime, 1000);
//     timeId.textContent = time;
//     function questionPull() {
//         var currentQuestion = questions [questionCheck];
//         var bigQuestionSet= document.getElementById("bigQuestion");
//         bigQuestionSet.textContent = currentQuestion.bigQuestion;
//         choicesUlId.innerHTML = "";
//         currentQuestion.choices.forEach(function (choice, i) {
//             var aBCD = document.createElement("button");
//             aBCD.setAttribute("choicesUl", "choicesUl");
//             aBCD.textContent = i + choice;
//             aBCD.onclick = //need to create function when button is clicked
//             choicesUlId.appendChild(aBCD);
//         });
//     };
// }
// begin();