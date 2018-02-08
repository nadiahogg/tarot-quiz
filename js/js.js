//Display question to user.

const quiz = {
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
      options: ["The Devil", "The Tower", "The Chariot", "The Wheel of Fortune"],
      correct: 1
    }
  ]
};
    //check number of questions that the user has completed.
        //if the number is less than 10 
            //Select a random question from a pool of 30 available questions
            //remove the selected question from the pool of available questions
            //display the selected question and corresponding answers to the visitor (Stretch goal: randomize 3 incorrect answers )
        //if the number is 10 
            //display results page

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

//User click the 'next' button
    //Display question to user

//User clicks 'try again' button
    //start game again.
