function submitButton() {
  var cc = parseInt(document.getElementById("year").value.slice(0, 2));
  var yy = parseInt(document.getElementById("year").value.slice(2, 4));
  var mm = parseInt(document.getElementById("month").value);
  var dd = parseInt(document.getElementById("day").value);
  var gender = document.querySelector('input[name=gender]:checked').value;
  var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var d = parseInt(day.toFixed());

  if (gender === 'male') {
    if (d === 0) {
      alert(" You were born on Sunday and your Akan name is Kwasi");
    }
    else if (d === 1) {
      alert(" You were born on Monday and your Akan name is Kwadwo");
    }
    else if (d === 2) {
      alert("You were born on Tuesday and your Akan name is Kwabena");
    }
    else if (d === 3) {
      alert("You were born on Wednesday and your Akan name is Kwaku");
    }
    else if (d === 4) {
      alert("You were born on Thursday and your Akan name is Yaw");
    }
    else if (d === 5) {
      alert("You were born on Friday and your Akan name is Kofi");
    }
    else {
      alert("You were born on Saturday and your Akan name is Kwame");
    }
  }
  if (gender === 'female') {
    if (d === 0) {
      alert("You were born on Sunday and your Akan name is Akosua");
    }
    else if (d === 1) {
      alert("You were born on Monday and your Akan name is Adwoa");
    }
    else if (d === 2) {
      alert("You were born on Tuesday and your Akan name is Abenaa");
    }
    else if (d === 3) {
      alert("You were born on Wednesday and your Akan name is Aku");
    }
    else if (d === 4) {
      alert("You were born on Thursday and your Akan name is Yaa");
    }
    else if (d === 5) {
      alert("You were born on Friday and your Akan name is Afua");
    }
    else {
      alert("You were born on Saturday and your Akan name is Ama");
    }
  }
}