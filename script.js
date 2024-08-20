let form = document.getElementById("form");
let clickPost = document.getElementById("post");
let errorMessage = document.getElementById("error-message");
let checkMessage = document.getElementById("check-message");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", function (event) {
  if (clickPost.value === "") {
    errorMessage.style.display = "block";
    checkMessage.style.display = "none";
    event.preventDefault();
    return;
  }

  if (!emailPattern.test(clickPost.value)) {
    checkMessage.style.display = "block";
    errorMessage.style.display = "none";
    event.preventDefault();
    return;
  }

  errorMessage.style.display = "none";
  checkMessage.style.display = "none";

  // alert("All good");
});

clickPost.addEventListener("input", function (event) {
  errorMessage.style.display = "none";
  checkMessage.style.display = "none";
});
