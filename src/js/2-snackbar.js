// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const messageTrue = {
  color: 'green',
  position: 'topLeft',
};

const messageFalse = {
  color: 'red',
  position: 'topLeft',
};

const radioBtnSet = document.querySelector("fieldset");
const submitBtn = document.querySelector("button");
const inputTime = document.querySelector('input[name="delay"]')

let selectedRadioBtn;

radioBtnSet.addEventListener("change", e => selectedRadioBtn = e.target);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectedRadioBtn === undefined) {
    return iziToast.show({ ...messageFalse, message: 'Please select any state option'})}

  const inputTimeValue = inputTime.value;

  if (inputTimeValue < 1) {
    return iziToast.show({ ...messageFalse, message: 'Delay must be positive number'})}

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedRadioBtn.value === "fulfilled") {
        resolve(inputTimeValue)
      } else {
        reject(inputTimeValue)
      }
    }, inputTime.value)
  })
    .then(val => {
      iziToast.show({ ...messageTrue, message: `✅ Fulfilled promise in ${val} ms` })
    })
    .catch(err => {
      iziToast.show({ ...messageFalse, message: `❌ Rejected promise in ${err} ms` })
    })
})
