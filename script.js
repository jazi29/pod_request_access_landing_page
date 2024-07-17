// function validateForm() {
//   let form = document.forms["form"]["post"].value;
//   let submit = document.getElementById("submit");

//   if (form == "") {
//     alert("OOps");
//     return false;
//   }
// }

let form = document.getElementById("form");
let clickPost = document.getElementById("post");
let submitButton = document.getElementById("submit");
let errorMessage = "Oops! Please add your email";
errorMessage.style.color = "red";

function formValidate() {
  if (clickPost.value == "") {
    // alert("Oops! Please add your email")
    // errorMessage.style.color = "red";
    // form.innerHTML = errorMessage;
    form.insertAdjacentHTML("afterend", errorMessage);
  }
}
