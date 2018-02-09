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
    fileName: "00_fool",
    meaning: "<p>The Fool is numbered 0, the number of unlimited potential, and does not actually have a specific place in the sequence of the Tarot cards. The Fool can come either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered as the Fool’s journey through life and as such, he is ever present and therefore needs no number.</p><p>The Fool is shown at the beginning of his journey with unlimited potential. The sun rising up behind him represents the beginning of his journey. He is facing north-west, the direction of the unknown. He is looking upwards, toward the sky, or Spirit. He is about to step off a cliff into the material world but is he prepared? He has all the tools and resources he needs in the bag on his staff but he has not opened the bag yet. The white rose in his left hand represents purity and innocence. He has a guardian in the little white dog who will protect him throughout his journey but who will also push him to learn the lessons the Fool came here to learn. The mountains behind the Fool represent the realms of Spirit that he has just left and will spend his life trying to regain.</p>"
  },
  {
    cardName: "The Magician",
    fileName: "01_magician",
    meaning: "<p>The Magician is associated with the planet, Mercury and carries with it skill, logic, and intellect. The number of the Magician is one, the number of beginnings. The Magician is the bridge between the world of the spirit and the world of humanity. His right hand holds a staff raised toward the sky and his left hand points to the earth. He takes the power of the Universe and channels it through his own body and directs it to the physical plane. Above the Magician’s head is the symbol of eternity and around his waist is a snake biting its own tail, another symbol of eternity. His magical table holds all four suits of the Tarot, each of which represents one of the four primordial elements of the alchemists – earth, air, fire and water. These symbolise the appropriate use of mind, heart, body and soul in the process of manifestation. The Magician’s robe is white, symbolising the purity and innocence found in the Fool but his cloak is red, representing worldly experience and knowledge. In the bed of flowers at his feet this duality is repeated in the mix of pure white lilies and thorny red roses.</p>"
  },
  {
    cardName: "The High Priestess",
    fileName: "02_highpriestess",
    meaning: "<p>The High Priestess is also known as Persephone, Isis, the Corn Maiden and Artemis. She sits at the gate before the great Mystery, as indicated by the Tree of Life in the background. She sits between the darkness and the light, represented by the pillars of Solomon’s temple, which suggests it is she who is the mediator of the passage into the depth of reality. The tapestry hung between the pillars keeps the casual onlookers out and allows only those initiated to enter. The pomegranates on the tapestry are sacred to Persephone. They are a symbol of duty (because Persephone ate a pomegranate seed in the underworld which forced her to return every year). The blue robe the Priestess is wearing is a symbol of knowledge. She is wearing the crown of Isis symbolising the Triple Goddess. The solar cross on her breast is a symbol of balance between male and female.</p><p>In her lap, she holds the half-revealed and half-concealed Torah, representative of the exoteric and the esoteric teachings and higher knowledge. The moon under her left foot shows her dominion over pure intuition. The palm indicates fertility of the mind and the cube on which she sits is the earth. The planet associated with the High Priestess is the Moon.</p>"
  },
  {
    cardName: "The Empress",
    fileName: "03_empress",
    meaning: "<p>The Empress is the archetypal Earth Mother, the Anima, the Feminine Principle, Demeter, Freyja and the Goddess of Fertility. Ruled by Venus, the planet of love, creativity, fertility, art, harmony, luxury, beauty and grace.</p><p>The main feature of this card is the Empress herself, a full-figured woman with blond hair and a peaceful and calm aura about her. On her head she wears a crown of stars, showing her connection with the mystical realm of angels and fairies. She is dressed in a patterned robe of pomegranates, symbolic of fertility and is seated upon a luxurious array of cushions and flowing red velvet with the symbol of Venus emblazoned upon it.</p><p>The Empress is surrounded by a beautiful, lush forest with a stream running through it, demonstrating the Empress’s deep emotional connection with Mother Earth and life. She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature. In the foreground, golden wheat springs from the ground, reflecting abundance from a recent harvest.</p>"
  },
  {
    cardName: "The Emperor",
    fileName: "04_emperor",
    meaning: "<p>The Emperor is the complement to the Empress. He is the Masculine Principle, the Animus and the Patriarch. He represents power and authority, and his stern attitude is quite a departure from the sensual beauty of the Empress. The Emperor has a long, white beard, a symbol of his experience. As an archetype, it is common to see masculine figures of authority or father figures with long white beards. It suggests that this man has acquired years of wisdom and experience and he is worthy of listening to because he has seen first-hand the consequences of his actions.</p><p>Behind his throne are barren mountains and the throne itself is decorated with four rams’ heads, representing intellectual heights, determination, action, initiative and leadership. The ram is also a symbol of Aries, the astral ruler of the Emperor. In his right hand, the Emperor holds an Ankh, the Egyptian symbol of Life, and in his left is an orb representing the world over which he rules. The orange background and the Emperor’s red clothing symbolise his passion and energy for life and the challenges it offers.</p>"
  },
  {
    cardName: "The Hierophant",
    fileName: "05_hierophant",
    meaning: "<p>The Hierophant is known as the High Priest in some decks. He is the masculine counterpart to the High Priestess. He is also known as Chiron, the Pope and the Shaman. The Hierophant is ruled by Taurus.</p><p>The Hierophant is represented by a religious figure, sitting within a formal church environment. He is wearing three elaborate vestments of his office that represent the three worlds. The crown he is wearing has three tiers to. His right hand is raised in benediction, the same hand the Magician has raised. While the Magician was taking raw power from the Universe and manifesting it on the material plane, the Hierophant channels that power through society (as in the religions of the world). The triple sceptre is another symbol of his dominion over the three worlds. The crossed keys represent a balance between the conscious and subconscious minds and unlock the mysteries. Before him kneel two initiates. The Hierophant’s task is to bring the two initiates into the church so that they can take up their appointed roles. This symbolises entry into all types of institutions where there is a shared group identity. These could include schools, clubs, teams, companies and societies.</p>"
  },
  {
    cardName: "The Lovers",
    fileName: "06_lovers",
    meaning: "<p>The sign associated with the Lovers is Gemini. The two figures in the Lovers card are blessed and protected by the angel in the clouds above them. Angels, in general, represent the refinement of earthly desires. This angel, in particular, is Raphael, the angel of Air. One of the associations of Air is communication, necessary for a healthy relationship. The purple cloak on the angel represents royalty, a symbol of how important communication is. The sun shines brightly over the couple, bringing warmth and security. The earth at their feet is green and fertile and suggests life and happiness. The snake in the fruit-laden tree behind the woman suggests the story of Adam and Eve, the fall of humanity from grace, and the temptations of the world. The snake is also a symbol of the senses. The flames behind the man represent the flames of passion, indicating the primary concern of the man. There are twelve flames, representing the twelve zodiac signs, the symbol of time and eternity. The man looks to the woman, who looks to the angel, indicating the path of the conscious to the subconscious to the super-conscious, or from physical desire to emotional needs to spiritual concerns. The mountain is a phallic symbol, while the water is a feminine symbol, indicating balance between the two.</p>"
  },
  {
    cardName: "The Chariot",
    fileName: "07_chariot",
    meaning: "<p>The Chariot is associated with the astrological sign of Cancer. He sits within a canopy of six-pointed stars, representing the celestial influences at work in this Tarot card. The crescent moons on the man’s shoulders are outward facing to refer to the formative world. The symbols on his tunic are alchemical symbols, representing the spiritual transformation of man. The square signifies earth, a sign of strength of will. The laurel and star crown indicate the highest attainment of man in spiritual evolution.</p><p>The wings on the Chariot represent inspiration and the Hindu sign of the union of positive and negative. The black and white sphinxes have the same meaning. The Charioteer holds no reins, just the wand from the Magician card. He controls through strength of will in the same way the Magician does. The city is behind him, indicating he has turned his back on civilisation and materialism in order to seek spiritual matters.</p>"
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
        $(".show-meaning").addClass("hidden");
        $(".next-question").addClass("hidden");
        $(".feedback").html('');
        $(".card-meaning").html("");
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
      
    
    //show card meaning when user clicks show meaning button
    


    $(".options").on('click','li',function() {
      if ($(".options").hasClass("active")) {
        console.log('linked clicked')
        let guess = $(this).attr('id');
        $(".options").removeClass("active");
        $(this).addClass("selected");
        $(".show-meaning").removeClass("hidden");
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

    $(".show-meaning").click(function(event) {
      for (let i = 0; i < tarotQuiz.cards.length; i = i + 1) {
    if ($(".correct-answer")[0].innerText == tarotQuiz.cards[i].cardName) {
      console.log("HELLL YAS");
      $('.card-meaning').html(`<p> ${tarotQuiz.cards[i].meaning} </p>`);
  }
}
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