const inputs = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");


function CalculateProductOfSides(a, b) {
    const productOfSides = (a * b);
    return productOfSides;
}

function CalculateAreaOfTriangle() {
    const productOfSides = CalculateProductOfSides(
        Number(inputs[0].value),
        Number(inputs[1].value)
    );
    const AreaOfTriangle = (productOfSides / 2);
    outputEl.innerText =
      "The Area of Triangle is " + AreaOfTriangle + " square units.";
}



checkAreaBtn.addEventListener("click", CalculateAreaOfTriangle);