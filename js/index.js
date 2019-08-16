function submitButton() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (day == '' || day > 31) {
    alert('Enter correct day');
  }
}