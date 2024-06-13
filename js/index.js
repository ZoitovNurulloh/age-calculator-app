let btn = document.getElementById("btn").addEventListener("click", handleSubmit);

let date = new Date();
let dateDay = date.getDay();
let dateMonth = 1+date.getMonth();
let dateYear = date.getFullYear();

let inpDay = document.getElementById("form__day");
let inpMonth = document.getElementById("form__month");
let inpYear = document.getElementById("form__year");

let errDay = document.getElementById("form__err--day");
let errMonth = document.getElementById("form__err--month");
let errYear = document.getElementById("form__err--year");

let consoleYear = document.getElementById("age__console--years");
let consoleMonth = document.getElementById("age__console--months");
let consoleDay = document.getElementById("age__console--days");

const  months = [31, 28, 31,30,31, 30, 31, 31, 30,31,30,31] 

function validate() {
  let valid = true;
  if (inpDay.value == "" || inpDay.value == null) {
    errDay.innerHTML = "This field is required";
    inpDay.classList.add("form__input--err");
    errDay.parentElement.querySelector("label").classList.add("form__label--err");
    valid = false;
  }
  if (inpMonth.value == "" || inpMonth.value == null) {
    errMonth.innerHTML = "This field is required";
    inpMonth.classList.add("form__input--err");
    errMonth.parentElement.querySelector("label").classList.add("form__label--err");
    valid = false;
  }
  if (inpYear.value == "" || inpYear.value == null) {
    errYear.innerHTML = "This field is required";
    inpYear.classList.add("form__input--err");
    errYear.parentElement.querySelector("label").classList.add("form__label--err");
    valid = false;
  }
  if(inpMonth.value > 12) {
    errMonth.innerHTML = "Must be a valid month";
    errMonth.parentElement.querySelector("label").classList.add("form__label--err");
    valid = false;
  }

  if (inpYear.value > dateYear) {
    errYear.innerHTML = "Must be in the past";
    errYear.parentElement.querySelector("label").classList.add("form__label--err");
    valid = false;
  }

  else {
    valid = true;
  }
  return valid;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inpDay.value > dateDay) {
      dateDay = dateDay + months[dateMonth-1];
      dateMonth = dateMonth - 1;
    }

    if (inpMonth.value > dateMonth) {
      dateMonth = dateMonth + 12;
      dateYear = dateYear - 1;
    }

    let d = dateDay - inpDay.value;
    let m = dateMonth - inpMonth.value;
    let y = dateYear - inpYear.value;

    consoleDay.innerHTML = d;
    consoleMonth.innerHTML = m;
    consoleYear.innerHTML = y;
  }
}