const areaInput = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-btn');
const output = document.querySelector('#output');
const error = document.querySelector('#error');

function calculateBaseAndArea(b,h){
    const baseAndHeight = b * h;
    return baseAndHeight;
}
function calculateArea(){
    const baseAndHeight = calculateBaseAndArea(Number(areaInput[0].value),Number(areaInput[1].value))
    const area = (1/2) * baseAndHeight
    if(Number(areaInput[0].value)&&Number(areaInput[1].value)){
        error.style.display = "none";
        output.style.color ="#274644";
        output.innerText = "Area of Triangle = " +area;
    }
    else{
        error.style.display = "block"
        error.style.color = "rgb(250, 40, 40)";
        error.innerText = "Please fill all the fields !"
    }
}
areaBtn.addEventListener('click',calculateArea)