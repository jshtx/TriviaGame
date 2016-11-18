$(document).ready(function() {
  
//declare variables including the questions and answers

var questions = {
    1: {
        question: "Who was the first President?",
        answerA: "Jefferson",
        answerB: "Washington",
        answerC: "Adams",
        answerD: "Roosevelt",
        correctAnswer: "answerB"
    },

    2: {
        question: "Who was the second President?",
        answerA: "Kennedy",
        answerB: "Truman",
        answerC: "Adams",
        answerD: "Reagan",
        correctAnswer: "answerC"
    },
    
    3: {
        question: "Who was the third President?",
        answerA: "Jefferson",
        answerB: "Cleveland",
        answerC: "Lincoln",
        answerD: "Fillmore",
        correctAnswer: "answerA"
    }
};

//question counter var
var questionCounter = 0;
//function to start the game
function startGame (){
     $(".start").hide();
     Sevent.stopPropagation()
     console.log("startGame function is triggering");
     askQuestions();
};

//function for correct answer
function correct() {

    $ (".list").empty();
    $ (".question").empty();
    $ (".winOrLose").html("You are correct!");
    
    setTimeout(askQuestions, 3000);
    
}
//function for incorrect answer
function incorrect(rightAnswer) {
    $ (".list").empty();
    $ (".question").empty();   
    $(".winOrLose").html("You are incorrect! The correct answer is " + questions[questionCounter][rightAnswer]);
    
    setTimeout(askQuestions, 3000);
}

//function for when user runs out of time
function timesUp() {
    $ (".list").empty();
    $ (".question").empty();
    $(".winOrLose").html("Time is up!");
    
    setTimeout(askQuestions, 3000);
}
//function that asks the questions

function askQuestions() {
    questionCounter++;
    console.log("askQuestions function is triggering");
    console.log(questionCounter);
    $ (".winOrLose").empty();
     
        

        $(".question").html(questions[questionCounter].question);
        $("#answerA").html(questions[questionCounter].answerA);
        $("#answerB").html(questions[questionCounter].answerB);
        $("#answerC").html(questions[questionCounter].answerC);
        $("#answerD").html(questions[questionCounter].answerD);

        $(".list").on("click", function() {
        
        var userAnswer = this.id;
        var rightAnswer = questions[questionCounter].correctAnswer;
        console.log(userAnswer);

        if (questions[questionCounter].correctAnswer === userAnswer){
            console.log("correct answer");
            correct();
        }   
        else if (questions[questionCounter].correctAnswer != userAnswer) {
            console.log("incorrect answer");
            incorrect(rightAnswer);

        }
        else {
            console.log("times up");
            timesUp();
        }

        });

    
    
    

};





 $(".start").on("click", function() {
    startGame();
 });




});