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
  let checkMessage = document.getElementById("check-message");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (clickPost.value === "") {
    errorMessage.style.display = "block";
    checkMessage.style.display = "none";
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

  if (!emailPattern.test(email)) {
    checkMessage.style.display = "block";
    errorMessage.style.display = "none";

    event.preventDefault();
  } else {
    checkMessage.style.display = "none";
  }

  // if (email.validity.typeMismatch) {
  //   alert("Пожалуйста, введите корректный email-адрес.");
  //   event.preventDefault();
  // }
});
