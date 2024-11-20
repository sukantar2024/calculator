let display = document.getElementById("calc-display");

// Append symbols or numbers to the display
function appendSymbol(symbol) {
    display.value += symbol;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        // Evaluate the mathematical expression
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
