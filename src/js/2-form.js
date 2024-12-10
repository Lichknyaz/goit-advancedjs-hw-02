let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

const fillFromLS = () => {
  if (localStorage.getItem('feedback-form-state')) {
    try {
      form.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
      form.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
    } catch (err) {
      console.log(err);
    }
  }
}

fillFromLS();

form.addEventListener("input", () => {
  formData.email = form.elements.email.value.trim()
  formData.message = form.elements.message.value.trim()
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.elements.email.value && form.elements.message.value) {
    form.reset();
    console.log(formData);
    localStorage.clear();
    formData = {
      email: "",
      message: ""
    };
  } else {
    alert("Fill please all fields")
  }
})


