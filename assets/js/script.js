var playerScore = 0;
var questionCounter = 0;
var startButton = document.getElementById("start-btn");
var h1 = document.getElementById("intro-heading");
var p = document.getElementById("intro-p");
var showQuestionWrapperEl = document.getElementById("question-wrapper");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons")

startButton.addEventListener("click", startQuiz);

function startQuiz () {
startButton.classList.add("hide");
h1.classList.add("hide");
p.classList.add("hide");
showQuestionWrapperEl.classList.remove("hide");
getQuestion ();

}

function getQuestion () {
  resetState();
  showQuestion(myQuestions[questionCounter]);
}

function showQuestion(question){
   questionEl.textContent = question.question;
   question.answers.forEach(function(answer, i) {
    var abutton = document.createElement("button");
    abutton.textContent = i + 1 + ". " + answer;
    console.log(myQuestions.answers);
    abutton.classList.add("btn");
    if(answer.correctAnswer){
        window.alert("correct!");
        playerScore +10;
    }
    abutton.addEventListener("click", selectAnswer);
    answerEl.appendChild(abutton);
   });
}

function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}
function selectAnswer (e) {

}

var myQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: [
			"strings",
			"booleans",
			"alerts",
            "numbers"
        ],
		correctAnswer: '2'
	},
	{
		question: "The condition in an if / else statement is enclosed with _______.",
		answers: [
			"quotes",
			"curly brackets",
			"parentheses",
            "square brackets"
        ],
		correctAnswer: '2'
	}
];

// var nextQuestionEl = document.createElement("div");

// questionEl.appendChild(nextQuestionEl);

// var nextQuestion = myQuestions[questionCounter];
// console.log(nextQuestion);

// nextQuestionEl.textContent = nextQuestion.question;

// var answerEl = document.createElement("button");

// console.log(myQuestions[0].answers);

// for (var i=0; i<myQuestions[0].answers.length; i++) {
//    console.log[myQuestions[0].answers];
// answerEl.textContent = nextQuestion.answers[i];
//}

//questionEl.appendChild(answerEl);


// increase counter to get to next question in array
questionCounter++;


//myQuestions;

// for (var i=0; i<myQuestions.answers.length; i++);