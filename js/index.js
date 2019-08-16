function submitButton() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  if (day == '' || day > 31) {
    alert('Enter correct day');
  } else if (month == '' || month > 12) {
    alert('month error');
  } else if (year == '' || year > 2019) {
    alert('year error');
  }else{
    alert('check your data');
  }
}