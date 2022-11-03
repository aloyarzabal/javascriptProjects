const equalButton = document.getElementById("equalButton");
const plusButton = document.getElementById("plusButton");
const mainCalculation = document.getElementById("mainCalculation");
const calculatorBottonGrid = document.getElementById("calculatorButtonsGrid");
const temporaryCalculation = document.getElementById("temporaryCalculation");


equalButton.addEventListener("click", () => {

});

plusButton.addEventListener('click', () => {

})
let calculation = 0;
let lastValuePressed = 0;
let mathOperation = '';
calculatorBottonGrid.addEventListener('click', (e) => {


    if (e.target.localName === 'span') {

        const calculate = () => {
            console.log(`Calculation: ${calculation}, Last value pressed: ${lastValuePressed}, Operacion: ${mathOperation}`);
            if (mathOperation && mathOperation === '/') calculation /= lastValuePressed;
            else if (mathOperation === '*') calculation *= lastValuePressed;
            else if (mathOperation === '+') calculation += lastValuePressed;
            else if (mathOperation === '-') calculation -= lastValuePressed;
            else if (mathOperation === '%') calculation = calculation * lastValuePressed / 100;
            mainCalculation.innerHTML = calculation;
        }

        const pressedValue = e.target.innerText;
        if (pressedValue === 'C') {
            calculation = 0;
            mathOperation = '';
        }
        else if (pressedValue === '%') {
            mathOperation = '%';
        }
        else if (pressedValue === '/') {

            mathOperation = '/';
        }
        else if (pressedValue === '*') {

            mathOperation = '*';
        }
        else if (pressedValue === '+') {
            mathOperation = '+';
            if (!calculation) temporaryCalculation.innerHTML = lastValuePressed;

        }
        else if (pressedValue === '-') {
            mathOperation = '-';

        }
        else if (pressedValue === '=') {
        }
        else {
            numberPressed = Number(pressedValue);
            mainCalculation.innerHTML = numberPressed;
            lastValuePressed = numberPressed;
        }
    }
});