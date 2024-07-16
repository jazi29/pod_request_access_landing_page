function validateForm() {
  let form = document.forms["form"]["post"].value;
  let submit = document.getElementById("submit");

  if (form == "") {
    alert("OOps");
    return false;
  }
}
