const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");


function CalculateSumOfAngles(angle1,angle2,angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;

}


function isTriangle() {
    const sumOfAngles = CalculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if(sumOfAngles === 180){
        
        outputEl.innerText="Yes,  all the three angles form a triangle"
    }
    else{

        outputEl.innerText="No,all the three angles does not form a triangle"
    }
}

isTriangleBtn.addEventListener("click",isTriangle)