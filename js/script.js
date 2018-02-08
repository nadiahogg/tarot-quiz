const tarotQuiz = {};

tarotQuiz.quiz = {
  currentQuestion: 0,
  questions: [
    {
      text: "Which card is most often associated with a profound new start?",
      options: ["The Emperor", "The Fool", "The World", "Death"],
      correct: 1
    },
    {
      text:
        "Which card is about change happening whether you want it to or not?",
      options: ["Death", "The Wheel of Fortune", "The Fool", "The Devil"],
      correct: 0
    },
    {
      text: "Which card is about being at a crossroads?",
      options: ["Justice", "The Moon", "The Sun", "The Hanged Man"],
      correct: 3
    },
    {
      text:
        "Which card can sometimes indicate a need for measured and thoughtful responses and reactions?",
      options: ["Temperance", "Justice", "Strength", "Judgment"],
      correct: 3
    },
    {
      text:
        "Which card suggests that although changes are not permanent, change itself is?",
      options: [
        "The Wheel of Fortune",
        "The World",
        "The Chariot",
        "The Tower"
      ],
      correct: 0
    },
    {
      text: "Which card points to relationships at the one on one level?",
      options: ["The High Priestess", "The Empress", "The Lovers", "The Star"],
      correct: 2
    },
    {
      text:
        "Which card is about directing energies to make creative and positive beginnings?",
      options: ["The Emperor", "The Sun", "The Hierophant", "The Magician"],
      correct: 3
    },
    {
      text:
        "Which card is about doing what is right, what is expected, and is associated with upstanding, decent behavior?",
      options: ["The Hierophant", "The Emperor", "The Magician", "Justice"],
      correct: 0
    },
    {
      text: "Which card represents the power of the universe?",
      options: ["The Emperor", "The Sun", "The Fool", "The Empress"],
      correct: 1
    },
    {
      text: "Which card is about things falling apart?",
      options: [
        "The Devil",
        "The Tower",
        "The Chariot",
        "The Wheel of Fortune"
      ],
      correct: 1
    }
  ]
};



tarotQuiz.newQuestion = function() {
    //check number of questions that the user has completed.
    //if the number is less than 10 
    //Select a random question from a pool of 30 available questions
    //remove the selected question from the pool of available questions
    randomQuestion = tarotQuiz.quiz.questions[Math.floor(Math.random() * tarotQuiz.quiz.questions.length)];
    displayedText = randomQuestion.text;
    answerOptions = randomQuestion.options;
    questionIndex = tarotQuiz.quiz.questions.indexOf(randomQuestion);
    askedQuestion = tarotQuiz.quiz.questions.splice(questionIndex, 1);
    currentQuestionNumber = tarotQuiz.quiz.currentQuestion + 1;
    if (tarotQuiz.quiz.currentQuestion < 10) {
      //calculate and display the current question number
      $(".question-number").text("Question #" + currentQuestionNumber);
      //insert question text into question-text element to be displayed
      $(".question-text").text(displayedText);
      console.log(displayedText);
      //iterate through the array of answer options and add each option as an li to the ul
      $(".options").html("");
      for (let i = 0; i < answerOptions.length; i = i + 1) {
        $(".options").append('<li id="' + i + '">' + answerOptions[i] + "</li>");
        console.log(answerOptions[i]);
      }
      //if the number is 10
      //display results page
    } else {
      console.log("Da jam done son!!");
    }
};


    //User click the 'next' button
    //Display question to user
    $(".next-question").click(function(event) {
      if (tarotQuiz.quiz.currentQuestion != 10) {
        console.log("clicked next Button");
        tarotQuiz.quiz.currentQuestion = tarotQuiz.quiz.currentQuestion + 1;
        console.log(tarotQuiz.quiz.currentQuestion);
        $(".next-question").addClass("hidden");
        tarotQuiz.newQuestion();
      } 
      
    });    

    
    $(".options").on('click','li',function() {
        console.log('linked clicked')
        let guess = $(this).attr('id');
        $(this).addClass("selected");
        $(".next-question").removeClass("hidden");
        tarotQuiz.checkAnswer();
    });

    tarotQuiz.checkAnswer = function(guess) {
	if (guess == tarotQuiz.quiz.questions[tarotQuiz.quiz.currentQuestion].correct) {
    console.log("correct!");
  } else {
    console.log("try again");
  }
}




//User mouse over an answer option.
    //display the image file for the that option

//User clicks an answer.
    //check if the question answer matches the user's selection
        //if answer is correct display message "You got it right!"
        //add +1 correct answer count
        //else display "Sorry, the correct answer is ${...}"
    //display the image for the correct answer.

//User clicks reveal meaning.
    //show the description of the card $('.description-box').fadeIn(2000);

//User clicks the close button on the meaning 
// $(".description-box").fadeOut();





//User clicks 'try again' button
    //start game again.

$(document).ready(function() {
	$(".start").click(function(event) {
        console.log("Clicked Start Button");
        $(".quiz-start-page").hide();
		$(".question-view").removeClass("hidden");
        event.preventDefault();
        tarotQuiz.newQuestion();
    })
});