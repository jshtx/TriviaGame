$(document).ready(function() {
  
//declare variables including the questions and answers

var questions = {
    1: {
        question: "Who was the only President to serve non-consecutive terms?",
        answerA: "Franklin Pierce",
        answerB: "Grover Cleveland",
        answerC: "Millard Fillmore",
        answerD: "Franklin D. Roosevelt",
        correctAnswer: "answerB"
    },

    2: {
        question: "Who was the first President to live in the White House?",
        answerA: "Thomas Jefferson",
        answerB: "James Madison",
        answerC: "John Adams",
        answerD: "George Washington",
        correctAnswer: "answerC"
    },
    
    3: {
        question: "How many Presidents owned slaves?",
        answerA: "8",
        answerB: "5",
        answerC: "0",
        answerD: "10",
        correctAnswer: "answerA"
    },

    4: {
        question: "Before the Twelfth Amendment was passed in 1804, how was the Vice President determined?",
        answerA: "There were no official Vice Presidents before 1804",
        answerB: "Appointed by the President",
        answerC: "The Presidential Candidate receiving the second most votes in the Electoral college",
        answerD: "President and Vice President were voted on seperately",
        correctAnswer: "answerC"
    },

    5: {
        question: "Who was the first President to be impeached?",
        answerA: "Benjamin Harrison",
        answerB: "Bill Clinton",
        answerC: "Richard Nixon",
        answerD: "Andrew Johnson",
        correctAnswer: "answerD"
    },

    6: {
        question: "Who was the only unanimously elected President by the Electoral College?",
        answerA: "Ronald Reagan",
        answerB: "George Washington",
        answerC: "John F. Kennedy",
        answerD: "James Monroe",
        correctAnswer: "answerB"
    },

    7: {
        question: "Which President signed the Civil Rights Act that extended the rights of emancipated slaves?",
        answerA: "Ulysses S. Grant",
        answerB: "Lyndon B. Johson",
        answerC: "James Garfield",
        answerD: "Rutherford B. Hayes",
        correctAnswer: "answerA"
    },

    8: {
        question: "How many future Presidents signed the Declaration of Independence?",
        answerA: "3",
        answerB: "1",
        answerC: "2",
        answerD: "4",
        correctAnswer: "answerC"
    },

    9: {
        question: "In what city was William McKinley assassinated?",
        answerA: "New York City, NY",
        answerB: "Pittsburgh, PA",
        answerC: "Cleveland, OH",
        answerD: "Buffalo, NY",
        correctAnswer: "answerD"
    },

    10: {
        question: "Who called for an Indian Removal Act in his State of the Union Message and eventually signed the act into law?",
        answerA: "Martin Van Buren",
        answerB: "John Quincy Adams",
        answerC: "Andrew Jackson",
        answerD: "Millard Fillmore",
        correctAnswer: "answerC"
    }
};

var correctlyAnswered = 0;
var incorrectlyAnswered = 0;
var notAnswered = 10;

//question counter var
var questionCounter = 0;
//function to start the game
function startGame (){
     $(".start").hide();
     event.stopPropagation()
     console.log("startGame function is triggering");
     askQuestions();
};

//function for correct answer
function correct() {
    event.stopPropagation()
    $ (".list").hide();
    $ (".question").hide();
    $ (".winOrLose").html("You are correct!");
    
    correctlyAnswered++;
    console.log(correctlyAnswered);
    notAnswered--;
    console.log(notAnswered);
    
    window.setTimeout(askQuestions, 3000);
    
}
//function for incorrect answer
function incorrect(rightAnswer) {
    event.stopPropagation()
    $ (".list").hide();
    $ (".question").hide();   
    $(".winOrLose").html("You are incorrect! The correct answer is " + questions[questionCounter][rightAnswer]);
    
    incorrectlyAnswered++;
    console.log(correctlyAnswered);
    notAnswered--;   
    console.log(notAnswered);

    window.setTimeout(askQuestions, 3000);
}

//function for when user runs out of time
function timesUp() {

    $ (".list").hide();
    $ (".question").hide();
    $(".winOrLose").html("Time is up!");
    
    window.setTimeout(askQuestions, 3000);
}
//function that asks the questions

function askQuestions() {
    questionCounter++;
    

    $ (".list").show();
    $ (".question").show();
    $ (".timeRemaining").show();  

    if (questionCounter <= 10){
    
    $ (".winOrLose").empty();
     
        timer(30);

        $(".question").html(questions[questionCounter].question);
        $("#answerA").html(questions[questionCounter].answerA);
        $("#answerB").html(questions[questionCounter].answerB);
        $("#answerC").html(questions[questionCounter].answerC);
        $("#answerD").html(questions[questionCounter].answerD);

    }

    else {
        
        //runs end of the game screen
        endGame();
    }  
};

//function for when an answer is chosen by user
function answerChosen(userAnswer) {
        
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

        };

function endGame() {
    //end game displayed here
    $ (".timeRemaining").hide();
    $ (".list").hide();
    $ (".question").hide();   
    $(".winOrLose").addClass("tryAgain")
                   .html("That's it! Here's how you did.")
                   .append('<br />')
                   .append('<br />')
                   .append("Correct Answers: " + correctlyAnswered)
                   .append('<br />')
                   .append("Incorrect Answers: " + incorrectlyAnswered)
                   .append('<br />')
                   .append("Not answered: " + notAnswered)
                   .append('<br />')
                   .append('<br />')
                   .append("Click to try again");

    $(".tryAgain").on("click", function() {
        //resets variables to original values
        correctlyAnswered = 0;
        incorrectlyAnswered = 0;
        notAnswered = 10;
        questionCounter = 0;
    askQuestions();
 });

    
};

function timer(i) {
    var int = setInterval(function () {
        if (i === 0){
           timesUp();
        }

        $ (".timeRemaining").html("Time Remaining: "  + i);
        i-- || clearInterval(int);  //if i is 0, then stop the interval
       
        $(".list").on("click", function() {
        clearInterval(int);
        });
        
        
    }, 1000);
}

 
 $(".start").on("click", function() {
    startGame();
 });

  $(".list").on("click", function() {
    answerChosen(this.id);
 });





});