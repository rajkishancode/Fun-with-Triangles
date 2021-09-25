const inputs = document.querySelectorAll(".side-input");
const calculateHypotenuseBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");


function CalculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
const sumOfSquares =CalculateSumOfSquares(Number(inputs[0].value),(inputs[1].value));
const lengthOfHypotenuse = (Math.sqrt(sumOfSquares)).toFixed(2);
outputEl.innerText =
  "The length of Hypotenuse is " + lengthOfHypotenuse + " units.";
  
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);