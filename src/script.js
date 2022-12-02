// --------------- DECLARATIONS --------------
// -------------------- 1 --------------------
const equalButton = document.getElementById("equalButton");
const plusButton = document.getElementById("plusButton");
const mainCalculation = document.getElementById("mainCalculation");
const calculatorBottonGrid = document.getElementById("calculatorButtonsGrid");
const temporaryCalculation = document.getElementById("temporaryCalculation");

// -------------------- 2 --------------------
const gallery = document.querySelectorAll(".gallery__div");
const hufflepuffButton = document.getElementById("hufflepuffButton");
const griffindorButton = document.getElementById("griffindorButton");
const slytherinButton = document.getElementById("slytherinButton");
const ravenclawButton = document.getElementById("ravenclawButton");

// -------------------- 3 --------------------
const inputTextToDo = document.getElementById("input_toDo");
const buttonTextToDo = document.getElementById("submitButton_toDo");
const listTasksToDo = document.getElementById("toDoList");
const listTasks = document.getElementById("doneList");
const amountOfTasksToDo = document.getElementById("h3__toDo");

// ------------------ SCRIPTS ----------------
// --------------------- 1 -------------------

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

// --------------------- 2 -------------------

let positionImgClicked = 4;
gallery[4].classList.add("imgClicked");

const restoreOtherPictures = (i) => {
  gallery[positionImgClicked].classList.remove("imgClicked");
  gallery[i].classList.add("imgClicked");
  positionImgClicked = i;
};

const deleteOtherPictures = (picture) => {
  for (let i = 0; i <= gallery.length - 1; ++i) {
    if (i < picture) gallery[i].classList.add("eliminateLeft");
    else if (i > picture) gallery[i].classList.add("eliminateRight");
    else {
      threePs = gallery[i].children[1].children;
      for (let j = 1; j < 4; ++j) threePs[j].classList.toggle("invisible");
    }
  }
};
gallery.forEach((picture, i) => {
  picture.addEventListener("click", (e) => {
    picture.classList.add("imgClicked");
    restoreOtherPictures(i);
  });
});

hufflepuffButton.addEventListener("click", () => {
  deleteOtherPictures(0);
});
griffindorButton.addEventListener("click", () => {
  deleteOtherPictures(1);
});
slytherinButton.addEventListener("click", () => {
  deleteOtherPictures(2);
});
ravenclawButton.addEventListener("click", () => {
  deleteOtherPictures(3);
});

// --------------------- 3 -------------------
let taskCounter = 0;
let sequenceCounter = 0;

const overwriteNumTasks = function (counter) {
  amountOfTasksToDo.innerText =
    amountOfTasksToDo.innerText.slice(0, -1) + counter;
};

const modifyCounters = function (task, sequence) {
  taskCounter += task;
  sequenceCounter += sequence;
  if (task !== 0) {
    overwriteNumTasks(taskCounter);
  }
};

buttonTextToDo.addEventListener("click", (e) => {
  e.preventDefault;
  let insertedText = inputTextToDo.value;
  insertedText =
    insertedText[0].toUpperCase() + insertedText.toLowerCase().slice(1);
  const HTMLText = `<div class="toDoList__div-toDo-task"> 
      <h3>${insertedText}</h3>
      <p class="toDoList__div-toDo-task-buttons-number"> ${
        sequenceCounter + 1
      }</p>
      <div class="toDoList__div-toDo-task-buttons">
         <div class="toDoList__div-toDo-task-buttons-delete"> </div>
         <div class="toDoList__div-toDo-task-buttons-done"> </div>
      </div>
    </div>`;
  listTasksToDo.insertAdjacentHTML("beforeend", HTMLText);
  modifyCounters(1, 1);

  inputTextToDo.value = "";
  taskButtons = document.querySelectorAll("buttonInsideTask");
});

listTasksToDo.addEventListener("click", (e) => {
  const deleteTodo =
    e.target.classList[0] === "toDoList__div-toDo-task-buttons-delete";
  const doneToDo =
    e.target.classList[0] === "toDoList__div-toDo-task-buttons-done";

  if (deleteTodo || doneToDo) {
    const eliminatedElement = e.target.parentElement.parentElement;
    eliminatedElement.remove();

    let pictureURL = deleteTodo
      ? "../assets/icons/cruz_roja.png"
      : "../assets/icons/check_verde.png";

    const finishedElement = `<div class="toDoList__div-done-div">
    <img class="toDoList__div-done-div-img" src="${pictureURL}"> 
    <p class="toDoList__div-done-div-p"> ${eliminatedElement.children[0].innerText}</p>
      </div>`;

    listTasks.insertAdjacentHTML("beforeend", finishedElement);
    modifyCounters(-1, 0);
  }
});
