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
  } else {
    alert('check your data');
  }
let maleNames=[]

  var dD = Number(prompt("Enter date:"));
  var mM = Number(prompt("Enter month:"));
  var cC = Number(prompt("Enter century:"));
  var yY = Number(prompt("Enter year:"));
  function dayOfTheWeek() {
    var d = Math.round((((cC / 4) - 2 * cC - 1) + ((5 * yY / 4)) + ((26 * (mM + 1) / 10)) + dD) % 7);
    var pickedDay;
    switch (d) {
      case 0:
        pickedDay = "Kwasi";
        alert("Kwasi");
        break;
      case 1:
        pickedDay = "Kwadwo";
        alert("Kwadwo");
        break;
      case 2:
        pickedDay = "Kwabena";
        alert("Kwabena");
        break;
      case 3:
        pickedDay = "Kwaku";
        alert("Kwaku");
        break;
      case 4:
        pickedDay = "Yaw";
        alert("Yaw");
        break;
      case 5:
        pickedDay = "Kofi";
        alert("Kofi");
        break;
      case 6:
        pickedDay = "Kwame";
        alert("Kwame");
        break;
      default:
        pickedDay = "You are lost!"
    }
  }
  alert(dayOfTheWeek());
  //var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];*/dddddddddddddddddddddddd
}