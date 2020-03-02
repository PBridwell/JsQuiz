var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-buttons');



var currentQuestionIndex 


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
})


function startGame() {
console.log('started');
startButton.classList.add('hide');
currentQuestionIndex = 0;
questionContainerEl.classList.remove('hide');
nextQuestion();



}

function nextQuestion() {
    resetQ();
    showQuestion();
    


}

function showQuestion(question) {
    console.log(questions[currentQuestionIndex].answers);
    questionEl.innerText = questions[0].question;
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
        nextButton.classList.remove('hide')

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

var test = {
    question: "is this difficult?",
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
    }


]