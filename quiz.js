const quizForm = document.querySelector(".quiz-form");
const userInputs = document.querySelectorAll(".user-Input");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#result");
const error = document.querySelector("#error");

const correctAnswers = ["Equilateral","Right", "90", "60", "isosceles"];

function formHandler(){
    let score = 0;
    let i = 0;
    const userInputAnswer  = new FormData(quizForm)
    for(let value of userInputAnswer.values()){
        if(value===correctAnswers[i]){
            score = score +1
        }
        i = i+1
    }
    if(score===5)
    output.innerText = "Hurray! Your Score is " +score + "😁";
    else
    output.innerText = "Your Score is " +score
}

submitBtn.addEventListener("click", formHandler)