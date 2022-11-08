var time = document.getElementById("Timer");
var questions = document.getElementById("questions");
var title = document.getElementById("Header");
var startBtn = document.getElementById("startBtn");
var container = document.getElementById("anwsers");
var scoreHere = document.getElementById("score");
var score = localStorage.getItem("score1");
var initials = document.getElementById("scoreButton");
var leaderboard = document.getElementById("scoreBoard");
var submitInitials = document.getElementById("submitIn");
var currentScore = 0;
var currentQuestion = 0;
var correct = "";
var secondsLeft = 59;

var questionsList = [
    {
        question:"How_do_you_create_a_function?",
        anwsers:[
            "function[]",
            "function{}",
            "function()",
            "<function>"
        ],
        correct: "function()",
    },
 
    {
         question:"How_do_you_add_a_value_to_local_storage?",
         anwsers:[
             ".setItem",
             ".getItem",
             ".pushItem",
             ".addItem"
         ], 
         correct: ".setItem",
     },
 
     {
         question:"How_do_you_add_text?",
         anwsers:[
             ".addText",
             ".addContent",
             ".textContent",
             ".text"
         ],
         correct: ".textContent",
     },
 
     {
         question:"How_do_you_specify_an_event_when_creating_a_function?",
         anwsers:[
             "dataset.target",
             "get.target",
             "src.target",
             "event.target"
         ],
         correct: "event.target",
     }
 
 ];
 

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    questions.classList.remove('hide');
    anwsers.classList.remove('hide');
    questionsList[0];
    Countdown();
    console.log("its working");
    displayQuestion();
    displayButton();
    score = 0;
}

function displayButton() {
    container.innerHTML = " ";
    
    for (var i = 0; i < questionsList[currentQuestion].anwsers.length; i++){
       var anwserButtons = document.createElement("button");
       anwserButtons.textContent = questionsList[currentQuestion].anwsers[i];
       anwserButtons.setAttribute("onclick", "nextQuestion(event)");
       container.appendChild(anwserButtons);
    }

}

function displayQuestion() {
    questions.innerHTML = " ";
    
    for (var i = 0; i < questionsList[currentQuestion].question.length; i++){
        var theQuestion = document.createElement("p");
        theQuestion.textContent = questionsList[currentQuestion].question[i];
        theQuestion.setAttribute("onclick", "nextQuestion(event)");
        questions.appendChild(theQuestion);
     }

}


function nextQuestion(event){
    var anwserChosen = event.target.innerHTML;
    if (anwserChosen === questionsList[currentQuestion].correct){
        score++;
        console.log(score);
        localStorage.setItem("score1", score);
    } else {
        secondsLeft-= 10;
    }
    if(currentQuestion >= 3){
        console.log("finish");
        secondsLeft = 0;
        endGame();
    }
    currentQuestion++;
    displayButton();
    displayQuestion();
    


}


function Countdown() {


     secondsLeft = 59;

    var counter = setInterval(function() {
    if (secondsLeft >= 1){
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left";
    }
    if (secondsLeft == 0) {
        time.textContent = '';        
        clearInterval(counter);
        endGame();
    }
    }, 1000);
}

var initialsInput = document.querySelector("#initials");
var leaderboardlist = document.querySelector("#list")
var submitButton = document.querySelector("#submitIn");


function displayLeaderboard(){
    scoreButton.classList.add('hide');
    var initials2 = localStorage.getItem("initials");
    leaderboardlist.textContent = initials2 + score;
}

function scoreButton() {
    initials.classList.remove('hide');
}

submitButton.addEventListener("click", function(event2)  {
    event2.preventDefault();
    localStorage.setItem("initials", initials)
    displayLeaderboard();
});

function score1() {
    scoreHere.textContent = "Your score is " + score;

    scoreButton();
    displayLeaderboard();
}



function endGame() {
    startBtn.classList.add('hide');
    questions.classList.add('hide');
    anwsers.classList.add('hide');
    scoreHere.classList.remove('hide');
    //scoreboard();
    console.log("game ended");
    score1()
}





