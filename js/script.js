const tarotQuiz = {};

tarotQuiz.quiz = {
  currentQuestion: 0,
  score: 0,
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
    },
    {
      text:
        "Which tarot card is often associated with a feeling of being trapped?",
      options: ["The Chariot", "The Tower", "Temperance", "The Devil"],
      correct: 3
    },
    {
      text: "Which card is often a sign of being overwhelmed?",
      options: ["The World", "The Moon", "The Star", "The Chariot"],
      correct: 0
    },
    {
      text:
        "Which card is sometimes considered to be first and foremost about self-control?",
      options: ["The Hierophant", "The Emperor", "The Empress", "The Fool"],
      correct: 1
    },
    {
      text: "Which card often appears when things are far from being clear?",
      options: ["The Star", "The Moon", "The Sun", "Justice"],
      correct: 1
    },
    {
      text:
        "Which card doesn't guarantee success but says go ahead and make a wish anyway - there is always hope?",
      options: [
        "The Magician",
        "The Wheel of Fortune",
        "The Star",
        "The World"
      ],
      correct: 2
    },
    {
      text: "Which card is an indication that change is inevitable?",
      options: ["Death", "Temperance", "The Magician", "Strength"],
      correct: 0
    },
    {
      text:
        "Which card sometimes indicates that what goes around comes around?",
      options: ["The Wheel of Fortune", "The World", "Death", "Justice"],
      correct: 3
    },
    {
      text: "Which card is referred to as the Pisces of the tarot deck?",
      options: ["The High Priestess", "The Empress", "The Star", "The Moon"],
      correct: 0
    },
    {
      text:
        "Which card often appears when it seems as if the whole world has turned upside down?",
      options: ["The Chariot", "The Hanged Man", "The Tower", "The Devil"],
      correct: 0
    },
    {
      text:
        "Which card generally means that you should be on the lookout for things that are going to be important and meaningful?",
      options: ["Death", "Strength", "The Hierophant", "Justice"],
      correct: 1
    },
    {
      text:
        "Which tarot card can sometimes indicate the possibility of pregnancy?",
      options: ["The High Priestess", "The Empress", "The Moon", "The Star"],
      correct: 1
    }
  ]
};

tarotQuiz.cards = [
  {
    cardName: "The Fool",
    fileName: "00_fool"
  },
  {
    cardName: "The Magician",
    fileName: "01_magician"
  },
  {
    cardName: "The High Priestess",
    fileName: "02_highpriestess"
  },
  {
    cardName: "The Empress",
    fileName: "03_empress"
  },
  {
    cardName: "The Emperor",
    fileName: "04_emperor"
  },
  {
    cardName: "The Hierophant",
    fileName: "05_hierophant"
  },
  {
    cardName: "The Lovers",
    fileName: "06_lovers"
  },
  {
    cardName: "The Chariot",
    fileName: "07_chariot"
  },
  {
    cardName: "Strength",
    fileName: "08_strength"
  },
  {
    cardName: "The Hermit",
    fileName: "09_hermit"
  },
  {
    cardName: "The Wheel of Fortune",
    fileName: "10_wheelfortune"
  },
  {
    cardName: "Justice",
    fileName: "11_justice"
  },
  {
    cardName: "The Hanged Man",
    fileName: "12_hangedman"
  },
  {
    cardName: "Death",
    fileName: "13_death"
  },
  {
    cardName: "Temperance",
    fileName: "14_temperance"
  },
  {
    cardName: "The Devil",
    fileName: "15_devil"
  },
  {
    cardName: "The Tower",
    fileName: "16_tower"
  },
  {
    cardName: "The Star",
    fileName: "17_star"
  },
  {
    cardName: "The Moon",
    fileName: "18_moon"
  },
  {
    cardName: "The Sun",
    fileName: "19_sun"
  },
  {
    cardName: "Judgment",
    fileName: "20_judgement"
  },
  {
    cardName: "The World",
    fileName: "21_world"
  }
];

tarotQuiz.newQuestion = function() {
    //check number of questions that the user has completed.
    //if the number is less than 10 
    //Select a random question from a pool of 30 available questions
    //remove the selected question from the pool of available questions
    const randomNumber = Math.floor(Math.random() * tarotQuiz.quiz.questions.length)
    const randomQuestion = tarotQuiz.quiz.questions[randomNumber];
    tarotQuiz.quiz.currentAnswer = randomQuestion;
    const displayedText = randomQuestion.text;
    const answerOptions = randomQuestion.options;
    const questionIndex = tarotQuiz.quiz.questions.indexOf(randomQuestion);
    const askedQuestion = tarotQuiz.quiz.questions.splice(questionIndex, 1);
    const currentQuestionNumber = tarotQuiz.quiz.currentQuestion + 1;
      //calculate and display the current question number
      $(".question-number").text("Question #" + currentQuestionNumber);
      //insert question text into question-text element to be displayed
      $(".question-text").text(displayedText);
      console.log(displayedText);
      //iterate through the array of answer options and add each option as an li to the ul
      $(".remaining-questions").append("<p>" + (11 - currentQuestionNumber) + " question(s) remaining." + "</p>");
      $(".options").html("");
      for (let i = 0; i < answerOptions.length; i = i + 1) {
        $(".options").append('<li id="' + i + '">' + answerOptions[i] + "</li>");
        console.log(answerOptions[i]);
      }
      //if the number is 10
      //display results page
};


    //User click the 'next' button
    //Display question to user
    $(".next-question").click(function(event) {
      if (tarotQuiz.quiz.currentQuestion + 1 !== 10) {
        console.log("clicked next Button");
        tarotQuiz.quiz.currentQuestion = tarotQuiz.quiz.currentQuestion + 1;
        console.log(tarotQuiz.quiz.currentQuestion);
        $(".next-question").addClass("hidden");
        $(".feedback").html('');
        $(".remaining-questions").html("");
        tarotQuiz.newQuestion();
      } 
      else {
        console.log("Da jam done son!!");
        $(".question-view").addClass("hide");
        $(".quiz-end-page").removeClass("hidden");
        if (tarotQuiz.quiz.score < 5) {
                 $(".score-display").text("Nice try, this result simply means you're at the beginning of your journey...kinda like The Fool" + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
        } else if (tarotQuiz.quiz.score >= 5 && tarotQuiz.quiz.score < 8) {
                  $(".score-display").text("You haven't mastered the deck as yet, but you're definitely starting to come into your own with your practice. " + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
        } else if (tarotQuiz.quiz.score >= 8) {
                $(".score-display").text("Wow, you're a true Star!" + "You scored " + tarotQuiz.quiz.score + " out of " + 10);
              }
      }
    $(".options").addClass("active");  
    $(".card-image").removeAttr("src");
    });
      
    
    $(".options").on('click','li',function() {
      if ($(".options").hasClass("active")) {
        console.log('linked clicked')
        let guess = $(this).attr('id');
        $(".options").removeClass("active");
        $(this).addClass("selected");
        $(".next-question").removeClass("hidden");
        tarotQuiz.checkAnswer(guess);
      }
    });

    
  

    $(".options").on("mouseover", "li", function() {
      if ($(".options").hasClass("active")) {
      let optionName = (this.innerText);
      for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
        if (optionName == tarotQuiz.cards[i].cardName){
          $(".card-image").attr("src", "./assets/" + tarotQuiz.cards[i].fileName + ".jpg");
        }
      }
    }

    });

    $(".options").on("mouseleave", "li", function() {
      console.log("left area")
      if ($(".options").hasClass("active")) {
      $(".card-image").removeAttr("src");
      }
    });

    $(".restart").click(function(event) {
      tarotQuiz.quiz.current = 0;
      tarotQuiz.quiz.score = 0;
      $(".quiz-end-page").addClass("hidden");
      $(".score").addClass("hide");
      $(".feedback").html("");
      $(".remaining-questions").html("");
      $(".quiz-start-page").show();
    });





    tarotQuiz.checkAnswer = function(guess) {
      const currentAnswer = tarotQuiz.quiz.randomQuestion;
	if (guess == tarotQuiz.quiz.currentAnswer.correct) {
    console.log("correct!");
    $(".feedback").append(`<p>You got it right! The correct answer is</p>`); 
    tarotQuiz.quiz.score++;
  } else {
    console.log("try again");
    $(".feedback").append(`<p>Sorry, that's incorrect.</p>`);
   
  }
  $("#" + tarotQuiz.quiz.currentAnswer.correct).addClass("correct-answer");
  
  for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
    if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
      $(".card-image").attr("src", "./assets/" + tarotQuiz.cards[i].fileName + ".jpg");
  }
}
};

// tarotQuiz.showImage = function(correctCard) {
//   const correctCard = tarotQuiz.quiz.currentAnswer.;
// }




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
		$(".question-view").removeClass("hide");
        event.preventDefault();
        tarotQuiz.newQuestion();
    })
});