const inputEmail = document.querySelector("#email");
const submitBtn = document.querySelector(".button");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputEmail.value == "") {
    errorMsg.innerHTML = "oops you forgot the email";
  }
});
