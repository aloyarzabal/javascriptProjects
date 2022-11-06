const equalButton = document.getElementById("equalButton");
const plusButton = document.getElementById("plusButton");
const mainCalculation = document.getElementById("mainCalculation");
const calculatorBottonGrid = document.getElementById("calculatorButtonsGrid");
const temporaryCalculation = document.getElementById("temporaryCalculation");

equalButton.addEventListener("click", () => {});

plusButton.addEventListener("click", () => {});

let operationToCalculate = "";
let gatheringNumbers = "";
let firstInteraction = true;
let equalPressed = false;

calculatorBottonGrid.addEventListener("click", (e) => {
  if (e.target.localName === "span") {
    const pressedValue = e.target.innerText;

    const printInCalculatorScreen = (value) =>
      (mainCalculation.innerHTML = value);
    const printInOperationScreen = (value) =>
      (temporaryCalculation.innerHTML = value);

    const calculate = () => {
      operationToCalculate = eval(operationToCalculate).toFixed(2);
      printInCalculatorScreen(operationToCalculate);
      gatheringNumbers = operationToCalculate;
      // operationToCalculate = '';
    };

    // --- OPTION =
    if (pressedValue === "=") {
      calculate();
      printInOperationScreen(0);
      gatheringNumbers = "";
      equalPressed = true;
    }

    // --- OPTION C
    else if (pressedValue === "C") {
      operationToCalculate = "";
      firstInteraction = true;
      printInCalculatorScreen(0);
      printInOperationScreen(0);
    }

    // --- OPTION MATH
    else if (
      pressedValue === "-" ||
      pressedValue === "+" ||
      pressedValue === "/" ||
      pressedValue === "*" ||
      pressedValue === "%"
    ) {
      let lastCharacterWasOperation =
        typeof operationToCalculate === "string"
          ? operationToCalculate.slice(-1)
          : "";
      if (
        lastCharacterWasOperation === "-" ||
        lastCharacterWasOperation === "+" ||
        lastCharacterWasOperation === "/" ||
        lastCharacterWasOperation === "*" ||
        lastCharacterWasOperation === "%"
      ) {
        operationToCalculate = operationToCalculate?.slice(0, -1);
      }

      if (equalPressed) {
        equalPressed = false;
      }

      if (firstInteraction) {
        firstInteraction = false;
        operationToCalculate = "0";
      }

      printInOperationScreen(operationToCalculate + pressedValue);
      printInCalculatorScreen(0);
      gatheringNumbers = "";
      operationToCalculate += pressedValue;
    }

    // --- OPTION NUMBERS
    else {
      if (equalPressed) {
        equalPressed = false;
        operationToCalculate = "";
      }

      if (firstInteraction) {
        firstInteraction = false;
        operationToCalculate = pressedValue;
      } else operationToCalculate += pressedValue;

      gatheringNumbers += pressedValue;
      printInCalculatorScreen(gatheringNumbers);
    }
  }
});
