// variable with array and objects for the questions
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
        bigQuestion : "In Zelda, which is not part of the Triforce?",
        ABCD: ["Courage", "Wisdom", "Power", "Shadow"],
        correctAnswer: "Shadow"
    },
    {
        bigQuestion: "What year did Nintendo start their company?",
        ABCD: ["1889", "1900", "1979", "1985"],
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

beginId.addEventListener("click", startQs);

function begin() {

}

function timeInt () {
    timer = setInterval(function() {
        var seconds = 60;
        seconds--;
        timeID.textContent = "Time Remaining " + seconds;
        if(seconds <= 0) {
            clearInterval(timeID);
        }
    }, 1000);
}
timeInt();

function startQs() {
    var questList;
    if (questList === questions.length) {
      questList = 0;
      questionsId.style.display = 'block';
      mainPgEl.style.display = 'none';
    } else {
      var questStore = questions[questList];
    }
    for (var i = 0; i < questions.length; i++) {
      var userQuestion = questList[questionIndex].bigQuestion;
      var userChoices = questList[questionIndex].ABCD;
      questionsId.textContent = userQuestion;
  
      userChoices.forEach(function (newItem) {
        var listItem = document.createElement('li');
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener('click', compare);
      });
    }
  }