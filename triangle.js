const angle = document.querySelectorAll('.angle-input');
const isTriangle = document.querySelector('#triangle-btn');
const output = document.querySelector('#output');
const error = document.querySelector('#error')
function sumOfAngles(a,b,c){
    let sum = 0;
    sum = a+b+c;
    return sum;
}

function checkTriangle(){
    const sum = sumOfAngles(
        Number(angle[0].value),
        Number(angle[1].value),
        Number(angle[2].value)
    )
    if(angle[0].value&&angle[1].value&&angle[2].value){
        if(sum===180){
            error.style.display = "none";
            output.style.color ="#102020";
            output.innerText = "Yayy It Forms a triangle 😄"
        }
        else{
            error.style.display = "none";
            output.style.color = "#ff2252"
            output.innerText = "Oops!! It doesn't Forms a triangle 😅"
        }
    }
    else{
        error.style.display = "block"
        error.style.color = "rgb(250, 40, 40)";
        error.innerText = "Please fill all the fields !"
    }
}
isTriangle.addEventListener('click', checkTriangle);