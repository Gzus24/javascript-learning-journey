// Day 5 : Callback Project Mini Quiz App
// Use callbacks to check answers dynamically, show flexibility,
//  and practice function reuse outside of array methods.

const questions = [
    {
        question: "What is 2 + 2?",
        choices: [3, 4, 5],
        correct: '4'
    }, 
    {
        question: "Which language runs in the browser?",
        choices: ["Python", "C++", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "Is the Earth round?",
        choices: ["Yes", "No", 'Neither'],
        correct: "Yes"
    }
] 

const quiz = document.getElementById('question')
const btn = document.getElementById('btn')
const answers = document.querySelectorAll("span")
const choiceContainer = document.getElementById('answers-container')
const holder = document.querySelector('.holder')

let myPick = '';
let i = 0 
let score = 0;

function displayQuestions(){
    quiz.textContent = questions[i].question
}

function displayAnswers(){
    for(let j = 0; j < answers.length; j++){
        answers[j].textContent = questions[i].choices[j]
      }
   
}

function chooseAnAnswer(e){
   if(e.target.tagName === 'SPAN'){
        holder.textContent = e.target.textContent
        myPick = holder.textContent
        answers.forEach(span =>{
            span.classList.remove('pickedChoice')
        })
        e.target.classList.add('pickedChoice')
    }
    
}

function submitAnswer(){
    answers.forEach(span =>{
        span.classList.remove('pickedChoice')
    })

    return myPick
}



function compareAndScore(answer){
    let currentIndex = i
   
    if(answer === questions[currentIndex].correct){
        score++
    }
    console.log(`my score : ${score}`)
}

btn.addEventListener('click', submitAnswer)

btn.addEventListener('click', ()=>{
    const answer = submitAnswer()
    compareAndScore(answer)
    if (i < questions.length - 1) {
                i++
                displayQuestions();
                displayAnswers();
            } else {
                quiz.textContent = "Quiz completed! Final score: " + score;
                btn.disabled = true
                answers.forEach(span =>{
                    span.style.display = 'none'
                })
            }
})
choiceContainer.addEventListener('click', chooseAnAnswer)