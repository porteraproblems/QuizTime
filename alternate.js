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

