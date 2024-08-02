// JavaScript to handle calculator operations
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === 'AC') {
                currentInput = '';
                previousInput = '';
                operation = null;
                display.innerText = '';
            } else if (value === '=') {
                if (operation && previousInput) {
                    currentInput = performOperation(operation, parseFloat(previousInput), parseFloat(currentInput));
                    display.innerText = currentInput;
                    operation = null;
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/', '%', '^2'].includes(value)) {
                if (currentInput) {
                    if (value === '^2') {
                        currentInput = Math.pow(parseFloat(currentInput), 2);
                        display.innerText = currentInput;
                    } else {
                        if (operation && previousInput) {
                            currentInput = performOperation(operation, parseFloat(previousInput), parseFloat(currentInput));
                            display.innerText = currentInput;
                        }
                        operation = value;
                        previousInput = currentInput;
                        currentInput = '';
                    }
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function performOperation(operation, num1, num2) {
        switch (operation) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num1 / num2;
            case '%': return num1 % num2;
            default: return num2;
        }
    }
});
