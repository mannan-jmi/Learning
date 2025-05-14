/**
 * FUnction to get input field value and return
 * @returns string
 */
function getCurrentValue() {
    return document.getElementById('inputValue').value;
}

/**
 * Function to update input field value with new one
 * @param {string} newValue 
 */
function updateInputValue(newValue) {
    document.getElementById('inputValue').value = newValue;
}

/**
 * Function to focus on input
 */
function focusInput() {
    document.getElementById('inputValue').focus();
}

/**
 * Function to get value of string and return last value
 * @param {string} value 
 * @returns string
 */
function getLastValue(value) {
    return value.slice(-1);
}

/**
 * Function to get button value
 * @param {string} inputValue 
 */
function appendValue(inputValue) {
    let arthMaticArray = ['*', '/', '+', '%', '-', '.'];
    let currentValue = getCurrentValue();

    if (currentValue.length <= 14) {
        // Start - Raplaced duplicate arthmatic value in lastest operator
        let lastValueOfCurrentInputFiled = getLastValue(currentValue);
        if (lastValueOfCurrentInputFiled !== '') {
            let isLastValueArthMatic = arthMaticArray.includes(lastValueOfCurrentInputFiled);
            let isNewValueArthMatic = arthMaticArray.includes(inputValue);
            if (isLastValueArthMatic && isNewValueArthMatic) {
                currentValue = currentValue.slice(0, -1)
            }
        }
        // End - Raplaced duplicate arthmatic value in lastest operator

        let newValue = currentValue + inputValue;
        updateInputValue(newValue);
    } else {
        alert("Can't enter more then 15 digits");
    }
    focusInput();
}

/**
 * Function to calculate all values
 */
function result() {
    let currentValue = getCurrentValue();
    let isDataCorrect = checkLastValue(currentValue);
    if (currentValue !== '' && isDataCorrect) {
        let evaluatedValue = eval(currentValue);
        updateInputValue(evaluatedValue);
        focusInput();
    }
}

/**
 * Function to clear the input field value
 */
function clearInput() {
    updateInputValue('');
    focusInput();
}

/**
 * Function to remove value from last
 */
function removeLastValue() {
    let currentValue = getCurrentValue();
    let newValue = currentValue.slice(0, -1);
    updateInputValue(newValue);
    focusInput();
}

/**
 * Function to validate input last value
 * @param {string} currentValue 
 * @returns boolean
 */
function checkLastValue(currentValue) {
    let isCorrect = false;
    let lastValue = parseInt(currentValue.slice(-1));
    if (typeof lastValue == 'number' && !isNaN(lastValue)) {
        isCorrect = true;
    }
    return isCorrect;
}