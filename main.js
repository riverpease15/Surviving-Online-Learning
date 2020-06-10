// Array of questions
var questions = [
     {
           question: "What is the rarest M&M color?",
           answers: {
             a: 'Red',
             b: 'Brown',
             c: 'Blue'
           },
           correctAnswer: 'b'
     },
     {
          question: "Where is the Sea of Tranquility?",
          answers: {
            a: 'The Moon',
            b: 'Europe',
            c: 'Africa'
          },
          correctAnswer: 'a'
     },
     {
          question: "In which European city would you find Orly airport?",
          answers: {
            a: 'London',
            b: 'Madrid',
            c: 'Paris'
          },
          correctAnswer: 'c'
     },
     {
          question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
          answers: {
            a: 'Lady Gaga',
            b: 'Halsey',
            c: 'Taylor Swift'
          },
          correctAnswer: 'a'
     },
     {
          question: "Which two U.S. states don’t observe Daylight Saving Time?",
          answers: {
            a: 'Alaska and Hawaii',
            b: 'Arizona and Hawaii',
            c: 'Alaska and Arizona'
          },
          correctAnswer: 'b'
     }
];

// Function to generate the quiz
function makeQuiz(questions, quizContainer, resultsContainer, submitBtn){

  // Shows the questions
	function showQuestions(questions, quizContainer){
      // Variables to store the output and the user's choices
      var output = [];
      var answers;

      // Iterate through questions
      for(var i=0; i<questions.length; i++){

        // Reset the list of answers
        answers = [];

        // Iterates through available answers for this question
        for(letter in questions[i].answers){

          // Append an HTML radio button for each option
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }

        // Add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }

      // Print the output
      quizContainer.innerHTML = output.join('');
  	}

  // Shows the user's results
	function showResults(questions, quizContainer, resultsContainer){
    // Get the user's answers
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // Variables to store the user's answers and the number correct
    var userAnswer = '';
    var correct = 0;

    // Iterates through questions
    for(var i=0; i<questions.length; i++){

      // Find user answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // If answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // Add to the number of correct answers
        correct++;

        // color the answers green
        answerContainers[i].style.color = '#c5d86d';
      }
      // If answer is wrong or blank
      else{
        // Color the answers red
        answerContainers[i].style.color = '#e71d36';
      }
    }

    // Show number of correct answers out of total
    resultsContainer.innerHTML = correct + ' out of ' + questions.length;
	}

	// Call on the function to show questions
	showQuestions(questions, quizContainer);

	// When user clicks submit, call on the function to show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

// Variables from HTML
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// Make the quiz!
makeQuiz(questions, quizContainer, resultsContainer, submitButton);
