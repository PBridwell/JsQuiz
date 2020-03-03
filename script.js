var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');
var timeEl = document.getElementById('time-count');
var startScore = 0;
var secondsLeft = 90;
var totalScore = document.getElementById('score-count');



var currentQuestionIndex 


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
})

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.innerHTML = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          endGame();
        }
    
      }, 1000);
    }

function setScore() {
    totalScore.innerHTML = 0;
}


function startGame() {
console.log('started');
startButton.classList.add('hide');
currentQuestionIndex = 0;
questionContainerEl.classList.remove('hide');
setScore();
nextQuestion();
setTimer();


}

function nextQuestion() {
    resetQ();
    showQuestion();
    


}

function showQuestion(question) {
    console.log(questions[currentQuestionIndex].answers);
    questionEl.innerText = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button);
    })

}

function resetQ() { 
    nextButton.classList.add('hide');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild (answerButtonsEl.firstChild)
        
    }
}


function selectAnswer(e) { 
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);

    })
        
        if(questions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');            
        } else {
            startButton.innerText = 'Submit Score';
            startButton.classList.remove('hide');

        }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
        parseInt(totalScore) +2;
    } else {
        element.classList.add('wrong');
        secondsLeft-=1; 
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}



var questions = [
    {
        question: 'Where was I born?',
        answers: [
            {text: 'Riverside, CA', correct: true },
            {text: 'Phoenix, AZ', correct: false },
            {text: 'Campinas, SP', correct: false },
            {text: 'Portland, OR', correct: false },
        ]
    },
    {
        question: 'What is my favorite whiskey?',
        answers: [
            {text: 'High West Double Rye', correct: false },
            {text: 'Jameson Sherry Cask', correct: false },
            {text: 'Red Breast 12-year', correct: true },
            {text: 'Johnnie Walker Blue', correct: false },
        ]
    },
    {
        question: 'Where did I attend university?',
        answers: [
            {text: 'Lewis and Clark College', correct: false },
            {text: 'Arizona State University', correct: false },
            {text: 'University of California Santa Cruz', correct: false },
            {text: 'University of Arizona', correct: true },
        ]
    },
    {
        question: 'How many Passports do I hold?',
        answers: [
            {text: 'One', correct: false },
            {text: 'None', correct: false },
            {text: 'Two', correct: false },
            {text: 'Three', correct: true },
        ]
    },
    {
        question: 'What is my middle name?',
        answers: [
            {text: 'Matthew', correct: false },
            {text: 'Michael', correct: true },
            {text: 'Kevin', correct: false },
            {text: 'Oren', correct: false },
        ]
    },
    {
        question: 'What is my favorite color?',
        answers: [
            {text: 'Blue', correct: false },
            {text: 'Green', correct: true },
            {text: 'Purple', correct: false },
            {text: 'Red', correct: false },
        ]
    }



]
