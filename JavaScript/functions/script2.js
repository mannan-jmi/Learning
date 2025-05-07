function multiply(a, b) {
    let result = a * b;
    return result;
}

let result = multiply(10, 50); // 500

function addition(a, b, c) {
    let result = a + b + c;
    return result;
}

let iteration1 = 100;
let iteration2 = 15;

let response = addition(iteration1, iteration2, result);


function divideOrResult(value, divider) {
    return value / divider;
}

let finResult = divideOrResult(response, 50);

console.log(finResult);

function printResult(printableResult) {
    let element = document.getElementById('output');

    // console.log(element.innerText);

    element.innerText = `Final Result: ${printableResult}`;
}


printResult(finResult);


