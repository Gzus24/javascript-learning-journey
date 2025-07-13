/* Mini Project: Simple Flashcard App (Console-Based)
You'll build a flashcard system where each flashcard:

Has a question and a correct answer

Can be asked and checked

Tracks how many times it's been answered correctly

🔧 Requirements:
Flashcard Factory Function

Create createFlashcard(question, answer)

It should return an object with:

ask() – logs the question

check(userAnswer) – checks if the answer is correct

getStats() – returns how many times it was answered correctly

Closure Use

Keep the correct answer and score private

Demo

Create at least two flashcards

Ask them

Check an answer (both correct and incorrect)

Log how many times each has been answered correctly */


function createFlashCard(question, answer){
    let stats = 0
    return {
        ask: function(){
            return question
        }, 
        check: function(userAnswer){
            if(answer.toLowerCase() === userAnswer.toLowerCase()){
                ++stats
                return answer
            }else{
                return `Your answer is incorrect, correct answer is ${answer}` 
            }
            
        },
        getStats: function(){
            return stats
        }
    }
}

const cardOne = createFlashCard("Whats the capital of Nevada?", "Carson City")
const cardTwo = createFlashCard('What is Spider-Mans real name?', "Peter Parker")
console.log(cardOne.ask())
console.log(cardOne.check("Cason City"))
console.log(cardOne.getStats())

console.log(cardTwo.ask())
console.log(cardTwo.check("Peter Parker"))
console.log(cardTwo.getStats())