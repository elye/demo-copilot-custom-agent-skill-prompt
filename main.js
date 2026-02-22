
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let input = '';
let resultDisplayed = false;

function resetCalculator() {
    input = '';
    resultDisplayed = false;
    display.value = '';
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

function safeEval(expr) {
    // Replace constants
    expr = expr.replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E');
    // Replace functions
    expr = expr.replace(/sin\(/g, 'Math.sin(')
               .replace(/cos\(/g, 'Math.cos(')
               .replace(/tan\(/g, 'Math.tan(')
               .replace(/log\(/g, 'Math.log10(')
               .replace(/ln\(/g, 'Math.log(')
               .replace(/exp\(/g, 'Math.exp(')
               .replace(/√/g, 'Math.sqrt');
    // Replace power operator ^ with Math.pow
    expr = expr.replace(/([\d.]+)\^([\d.]+)/g, 'Math.pow($1,$2)');
    // Replace factorial n!
    expr = expr.replace(/(\d+)!/g, 'factorial($1)');
    // Remove invalid characters
    if (/[^0-9+\-*/().^πe!\sMathlogincostanexpqrt]/.test(expr)) return 'Error';
    try {
        // eslint-disable-next-line no-eval
        let val = eval(expr);
        if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
            return val;
        } else {
            return 'Error';
        }
    } catch {
        return 'Error';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            resetCalculator();
        } else if (button.id === 'backspace') {
            if (resultDisplayed) {
                resetCalculator();
            } else {
                input = input.slice(0, -1);
                display.value = input;
            }
        } else if (button.id === 'equals') {
            if (input !== '') {
                let expr = input
                    .replace(/xʸ/g, '^')
                    .replace(/π/g, 'π')
                    .replace(/e/g, 'e')
                    .replace(/√/g, '√');
                let result = safeEval(expr);
                display.value = result;
                input = '' + result;
                resultDisplayed = true;
            }
        } else if (button.classList.contains('sci')) {
            if (value === 'pi') {
                input += 'π';
            } else if (value === 'e') {
                input += 'e';
            } else if (value === 'sqrt') {
                input += '√(';
            } else if (value === '^') {
                input += '^';
            } else if (value === 'fact') {
                // Add factorial to last number
                if (input.match(/\d+$/)) {
                    input += '!';
                }
            } else if (["sin","cos","tan","log","ln","exp"].includes(value)) {
                input += value + '(';
            } else if (value === '(' || value === ')') {
                input += value;
            }
            display.value = input;
        } else if (button.classList.contains('operator')) {
            if (resultDisplayed) {
                resultDisplayed = false;
            }
            input += value;
            display.value = input;
        } else {
            if (resultDisplayed) {
                resetCalculator();
            }
            if (value === '.' && input.split(/[^\d.]/).pop().includes('.')) return;
            input += value;
            display.value = input;
        }
    });
});

resetCalculator();
