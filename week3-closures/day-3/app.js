// Week 3, Day 3: Encapsulation & Function Factories

/*Task 1: Encapsulation Practice
Instructions:
Create a function createSecretHolder(secret) that returns an 
object with two methods:

getSecret() – returns the secret.

setSecret(newSecret) – sets a new secret.

You should not expose the secret variable directly. */

function createSecretHolder(secret){
    return {
        getSecret: function(){
            console.log(secret)
        },
        setSecret: function(newSecret){
            secret = newSecret;
        }
    }
}

const holder = createSecretHolder('Waffles')

holder.setSecret("Banana")
holder.getSecret()

/*Task 2: Function Factory
Instructions:
Create a function makeMultiplier(factor) that returns a new function.
The returned function should multiply its input by the factor. */

function makeMultiplier(factor){
    return function(num){
        console.log(factor * num)
    }
}

const double = makeMultiplier(2)
const triple = makeMultiplier(3)

double(5)
triple(6)

/* Task 3: Quiz Factory Function
Instructions:
Write a function makeQuestion(questionText, correctAnswer) that 
returns an object with:

ask() – logs the question.

*/

function makeQuestion(questionText, correctAnswer){
    return {
        ask: function(){
            console.log(questionText)
        },
        checkAnswer: function(answer){
            if(typeof answer !== "string"){
                console.log('Not string')
            }else{
                if(answer === correctAnswer){
                    console.log(true)
                }else{
                    console.log(false)
                }
            }
         
        }
    }
}

const q = makeQuestion("What is 5 + 5?", "10")

q.ask()
q.checkAnswer("10")