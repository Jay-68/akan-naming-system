function submitButton() {
  let day = Number(document.getElementById("day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);
  let century = Number(year.slice(0, 2));

  let gender = document.querySelector('input[name=gender]:checked').value;
  alert(day);
  let femaleNames = ['Akosua', 'Adwwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  let dayOfTheWeek = Math.round((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);

  // let index = Math.abs(dayOfTheWeek() - 1);
  // alert(index);
  //form validation
  function formValidation() {
    if (day <= 0 || day > 31) {
      return false;
    } else if (month <= 0 || month > 12) {
      return false;
    } else if (year <= 1600) {
      return false;
    } else {
      alert('Check Your dates!');
    }
  }
  var akanName;
  if (gender == 'male') {
    switch (dayOfTheWeek) {
      case 1:
        akanName = 'Kwasi';
        alert('You were born on Monday and your Akan name is Kwasi');
        break;
      case 2:
        akanName = 'Kwadwo';
        alert('You were born on Tuesday and your Akan name is Kwadwo');
        break;
      case 3:
        akanName = 'Kwabena';
        alert('You were born on Wednesday and your Akan name is Kwabena');
        break;
      case 4:
        akanName = 'Kwaku';
        alert('You were born on Thursday and your Akan name is Kwaku');
        break;
      case 5:
        akanName = 'Yaw';
        alert('You were born on Friday and your Akan name is Yaw');
        break;
      case 6:
        akanName = 'Kofi';
        alert('You were born on Saturday and your Akan name is Kofi');
        break;
      case 0:
        akanName = 'Kwame';
        alert('You were born on Sunday and your Akan name is Kwame');
        break;
      default:
    };
    // } else if (gender == 'female')

    //   switch (index) {
    //     case (1):
    //       document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + femaleNames[1];
    //       break;
    //     case (2):
    //       document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + femaleNames[2];
    //       break;
    //     case (3):
    //       document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is " + femaleNames[3];
    //       break;
    //     case (4):
    //       document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + femaleNames[4];
    //       break;
    //     case (5):
    //       document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + femaleNames[5];
    //       break;
    //     case (6):
    //       document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + femaleNames[6];
    //       break;
    //     case (0):
    //       document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + femaleNames[0];
    //       break;
    //     default:
    //       document.getElementById("result").innerHTML = "oops their is a problem somewhere!!!";
    //   }
  }
}
