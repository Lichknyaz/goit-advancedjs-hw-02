// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const messageTrue = {
  color: 'green',
  position: 'topCenter',
};

const messageFalse = {
  color: 'red',
  position: 'topCenter',
};

const radioBtnSet = document.querySelector("fieldset");
const submitBtn = document.querySelector("button");
const inputTime = document.querySelector('input[name="delay"]')

let selectedRadioBtn;

radioBtnSet.addEventListener("change", e => selectedRadioBtn = e.target);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedRadioBtn.value === "fulfilled") {
        resolve()
      } else {
        reject()
      }
    }, inputTime.value)
  })
    .then(messageOk => {
      iziToast.show({ ...messageTrue, message: `✅ Fulfilled promise in ${inputTime.value} ms` })
    })
    .catch(error => {
      iziToast.show({ ...messageFalse, message: `❌ Rejected promise in ${inputTime.value} ms` })
    })
})
