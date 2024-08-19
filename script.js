let clickPost = document.getElementById("post");
// let email = document.getElementById("email");
let errorMessage = document.getElementById("error-message");
let checkMessage = document.getElementById("check-message");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

document.getElementById("form").addEventListener("click", function (event) {
  event.preventDefault();
  if (clickPost.value === "") {
    errorMessage.style.display = "block";
    checkMessage.style.display = "none";
    console.log("It's work");
    // event.preventDefault();
  }
  clickPost.addEventListener("input", function (event) {
    if (clickPost.value !== "") {
      errorMessage.style.display = "block";
      checkMessage.style.display = "none";
      console.log("Пользователь вводит текст: " + event.target.value);
    }

    if (!isValidLogin(clickPost.value)) {
      checkMessage.style.display = "block";
      errorMessage.style.display = "none";
      // event.preventDefault();
    } else {
      errorMessage.style.display = "none";
      checkMessage.style.display = "none";
      form.submit();
      alert("All good");
    }
    function isValidLogin(clickPost) {
      emailPattern.test(clickPost.value);
    }
  });
});

// if (!emailPattern.test(email)) {
//   errorMessage.style.display = "none";
//   checkMessage.style.display = "block";
//   // alert("O");

//   event.preventDefault();
// } else {
//   checkMessage.style.display = "none";
// }

//   if (emailPattern.match(email)) {
//     event.preventDefault();
//     checkMessage.style.display = "block";
//     errorMessage.style.display = "none";
//     console.log("email is wrong");
//   } else {
//     checkMessage.style.display = "none";
//     errorMessage.style.display = "block";
//     console.log("email is right");
//   }
// });
