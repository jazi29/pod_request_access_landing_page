// function validateForm() {
//   let form = document.forms["form"]["post"].value;
//   let submit = document.getElementById("submit");

//   if (form == "") {
//     alert("OOps");
//     return false;
//   }
// }

// alert("Oops! Please add your email")
// errorMessage.style.color = "red";
// form.innerHTML = errorMessage;

// let form = document.getElementById("form");

// function formValidate() {
//   if (clickPost.value == "") {
//     errorMessage.style.display = "block";
//     event.preventDefault();

//     clickPost.addEventListener("input", function (event) {
//       // console.log("Пользователь вводит текст: " + event.target.value);
//       errorMessage.style.display = "none";

//       if (email.validity.typeMismatch) {
//         // errorMessage.style.display = "block";
//         alert("No");
//         event.preventDefault();
//       }
//     });
//   }
// }

document.getElementById("form").addEventListener("submit", function (event) {
  let clickPost = document.getElementById("post");
  let email = document.getElementById("email");
  let errorMessage = document.getElementById("error-message");

  if (clickPost.value === "") {
    errorMessage.style.display = "block";
    event.preventDefault();
  } else {
    errorMessage.style.display = "none";
  }

  clickPost.addEventListener("input", function () {
    if (clickPost.value !== "") {
      errorMessage.style.display = "none";
      console.log("Пользователь вводит текст: " + event.target.value);
    }
  });

  if (email.validity.typeMismatch) {
    alert("Пожалуйста, введите корректный email-адрес.");
    event.preventDefault();
  }
});
