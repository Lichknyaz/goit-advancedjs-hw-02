// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;

const startBtn = document.querySelector("button");
const inputDate = document.querySelector("#datetime-picker");

startBtn.style.backgroundColor = "grey"
startBtn.disabled = true

const startBtnDisabledStyle = () => {
  if (startBtn.disabled === true) {
    startBtn.style.backgroundColor = 'grey';
  } else {
    startBtn.style.backgroundColor = ''
  }
}

const startBtnOperation = () => {
  if (userSelectedDate<new Date()) {
    iziToast.show({
      title: 'Warning',
      message: 'Please choose a date in the future',
      color: 'red',
      position: 'topCenter',
    });
    startBtn.disabled = true
    startBtnDisabledStyle();
  } else {
    startBtn.disabled = false
    startBtnDisabledStyle();
  }
}

const addLeadingZero = (value) => {
  return value.padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    startBtnOperation();
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startBtn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    inputDate.disabled = true;
    startBtn.disabled = true;
    startBtnDisabledStyle();
    let remainingTimeMS = (userSelectedDate - Date.now());
    let remainingTime = convertMs(remainingTimeMS);
    console.log(remainingTimeMS);
    daysElement.textContent = addLeadingZero(remainingTime.days.toString());
    hoursElement.textContent = addLeadingZero(remainingTime.hours.toString());
    minutesElement.textContent = addLeadingZero(remainingTime.minutes.toString());
    secondsElement.textContent = addLeadingZero(remainingTime.seconds.toString());
    if (remainingTimeMS < 1000) {
      clearInterval(intervalId);
      inputDate.disabled = false;
    }
  }, 1000);
});

