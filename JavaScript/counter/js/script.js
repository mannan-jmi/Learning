var counter = 0;
printCounterResult(counter);
// document.getElementById('counter').innerText = counter;

/**
 * Function to increase a counter value
 */
function increase() {
    if(counter < 10){
        let incrementedResult = ++counter;
        // document.getElementById('counter').innerText = incrementedResult;
        printCounterResult(incrementedResult);
    }
}

/**
 * Function to decrease a counter value
 */
function decrease() {
    if(counter > 0) {
        let incrementedResult = --counter;
        // document.getElementById('counter').innerText = incrementedResult;
        printCounterResult(incrementedResult)
    }
}

/**
 * Function to display result on #counter
 * @param {string} value 
 */
function printCounterResult(value) {
    document.getElementById('counter').innerText = value;
}


/*
// click event fire via event listner (alternate way to fire fn on btn)
document.getElementById('incrBtn').addEventListener('click', function() {
    // do yur logic here
    alert('You clicked on increase button');
});
*/