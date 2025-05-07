// Functions

// Simple fucntion without argument or parameters
function printText() {
    document.getElementById('text').innerText = "We arr going to learn js functions!";
    console.log('function 1');
}
printText()

// Simple function with argument
function printMsg(message) {
    document.getElementById('msg').innerText = message;
    console.log('function 2');
}
printMsg("This is simple Message");

// Adition of two number by function with params
function addTowNumber(a, b) {
    console.log('function 3');
    console.log(a + b);
}

addTowNumber(10, 20+5);
