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

// -------------------- 4 --------------------
const sliderLeftButton = document.querySelector(".slide__button--left");
const sliderRightButton = document.querySelector(".slide__button--right");
// const sliderBasic = document.getElementsByClassName("slide__content-text--1");
// const sliderPremium = document.getElementsByClassName("slide__content-text--2");
// const sliderElite = document.getElementsByClassName("slide__content-text--3");
const sliderOptionsContainer = document.querySelector(
  ".slide__content-options"
);
const sliderOptions = document.querySelectorAll(".slide__content-option");
const slides = document.querySelectorAll(".slide__content-text");

// -------------------- 5 --------------------
const countdownButton = document.getElementById(
  "countdownMain__dateSelection-button"
);
const introducedDay = document.getElementById("countdown-birthday-day");
const introducedMonth = document.getElementById("countdown-birthday-month");
const introducedYear = document.getElementById("countdown-birthday-year");
const displayedDays = document.getElementById("displayedDays");
const displayedHours = document.getElementById("displayedHours");
const displayedMinutes = document.getElementById("displayedMinutes");
const displayedSeconds = document.getElementById("displayedSeconds");
const countdownSection = document.querySelector(".countdownMain__timeLeft");

// --------------------------------------------------------  SCRIPTS --------------------------------------------------------
// ----------------------------------------------------------- #1 -----------------------------------------------------------

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

// ----------------------------------------------------------- #2 -----------------------------------------------------------

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

// ----------------------------------------------------------- #3 -----------------------------------------------------------
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

// ----------------------------------------------------------- #4 -----------------------------------------------------------
let actualSlide = 0;

const moveSlide = (newSlide) => {
  actualSlide = newSlide;

  slides.forEach((slide) => {
    slide.classList.add("hiddenSlide");
  });

  sliderOptions.forEach((option) => {
    option.classList.remove("slide__content-option-selected");
  });

  slides[actualSlide].classList.remove("hiddenSlide");
  sliderOptions[actualSlide].classList.add("slide__content-option-selected");
};

// Left button
sliderLeftButton.addEventListener("click", () => {
  if (actualSlide - 1 < 0) moveSlide(slides.length - 1);
  else moveSlide(actualSlide - 1);
});

// Right button
sliderRightButton.addEventListener("click", () => {
  if (actualSlide + 1 === slides.length) moveSlide(0);
  else moveSlide(actualSlide + 1);
});

// Option button
sliderOptionsContainer.addEventListener("click", (e) => {
  const classList = e.target.classList;

  let selectedOption;
  classList.forEach((el) => {
    if (el.includes("slide__content-option--")) {
      selectedOption = el.slice(-1);
      moveSlide(selectedOption - 1);
    }
  });
});

// ----------------------------------------------------------- #5 -----------------------------------------------------------
// countdownButton

// introducedDay
// introducedMonth
// introducedYear

// displayedDays
// displayedHours
// displayedMinutes
// displayedSeconds

countdownButton.addEventListener("click", (e) => {
  e.preventDefault;

  const iDay = introducedDay.value;
  const iMonth = introducedMonth.value - 1;
  const iYear = introducedYear.value;

  const today = new Date();
  const birthDate = new Date(today.getFullYear(), iMonth, iDay);
  // Seconds of a year
  const msOfAYear = 365 * 24 * 60 * 60 * 1000;

  //If positive - didn't happen this year yet
  const msToBirthday =
    birthDate - today >= 0
      ? birthDate - today
      : msOfAYear - Math.abs(birthDate - today);

  //Display timer
  let time = msToBirthday / 1000;
  const tick = () => {
    displayedDays.textContent = Math.round(time / 60 / 60 / 24);

    const remainingHours = (time / 60 / 60) % 24;
    displayedHours.textContent = Math.floor(remainingHours);

    const remainingMinutes = (remainingHours - Math.floor(remainingHours)) * 60;
    displayedMinutes.textContent = Math.round(remainingMinutes);

    const remainingSeconds =
      (remainingMinutes - Math.floor(remainingMinutes)) * 60;
    displayedSeconds.textContent = Math.round(remainingSeconds);

    time--;
  };

  const timer = setInterval(tick, 1000);
  // Call out after 1 minute
  setTimeout(() => {
    clearInterval(timer);
  }, 1 * 60 * 1000);

  introducedDay.value = "";
  introducedMonth.value = "";
  introducedYear.value = "";

  countdownSection.style.opacity = 100;
});
