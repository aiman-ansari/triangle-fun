const sides = document.querySelectorAll('.sides');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const error = document.querySelector('#error');
const output = document.querySelector('#output');

function squareOfSides(a,b){
    let squaresOfNumbers = 0;
    squaresOfNumbers = a*a + b*b;
    return squaresOfNumbers
}
function calculateHypotenuse(){
    const square = squareOfSides(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseLength = Math.sqrt(square);
    if(Number(sides[0].value)&&Number(sides[1].value)){
        error.style.display = "none";
        output.style.color ="#274644";
        output.innerText = "Hypotenuse = " +hypotenuseLength.toFixed(2);
    }
    else{
        error.style.display = "block"
        error.style.color = "rgb(250, 40, 40)";
        error.innerText = "Please fill all the fields !"
    }
}
hypotenuseBtn.addEventListener('click', calculateHypotenuse)