function submitButton() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let century = year.slice(0, 2);

  // alert(century);

  let femaleNames = ['Akosua', 'Adwwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  let gender = document.getElementsByName("gender").value;
  alert(gender);

  let dayOfTheWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;

  let dayOfBirth = Math.floor(dayOfTheWeek);
  alert(dayOfBirth);

  //form validation
  if (day <= 0 || day > 31) {
    alert('Enter valid Day');
  } else if (month <= 0 || month > 12) {
    alert('Enter valid Month');
  } else if (year > 2019 || year <= 0) {
    alert('Enter valid year');
  } else if (gender == "male") {
    alert('you are male!!');
  }
  function checkDayOfWeek() {
    day = calculateDay();
    checkGender();
    console.log("The function runs");//Test chackDayOfWeek function
  }

  //arrays
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  //get selected radio button
  function checkGender() {
    var gen = document.getElementsByName("rads");
    if (gen[0].checked == true) {
      var gender = "male";
    } else if (gen[1].checked == true) {
      var gender = "female";
    } else {
      console.log("pass");//Test the radio buttons
    }
    switch (gender) {
      case gender = "male":
        switch (day) {
          case (0 || -0):
            document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
            break;
          case (1 || -1):
            document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
            break;
          case (2 || -2):
            document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
            break;
          case (3 || -3):
            document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is " + maleNames[3];
            break;
          case (4 || -4):
            document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
            break;
          case (5 || -5):
            document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
            break;
          case (6 || -6):
            document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
            break;
          default:
          // console.console.log("Pass");//Test male case
        }
        break;
      case gender = "female":
        switch (day) {
          case 0 || -0:
            document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
            break;
          case 1 || -1:
            document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
            break;
          case 2 || -2:
            document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
            break;
          case 3 || -3:
            document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
            break;
          case 4 || -4:
            document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
            break;
          case 5 || -5:
            document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
            break;
          case 6 || -6:
            document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
            break;

        }
        break
      default:
        console.log("pass");//Test gender switch
    }
  }


  // if (day == '' || day > 31) {
  //   alert('Enter correct day');
  // } else if (month == '' || month > 12) {
  //   alert('month error');
  // } else if (year == '' || year > 2019) {
  //   alert('year error');
  // } else {
  //   alert('check your data');
}
// let maleNames=[]

//   var dD = Number(prompt("Enter date:"));
//   var mM = Number(prompt("Enter month:"));
//   var cC = Number(prompt("Enter century:"));
//   var yY = Number(prompt("Enter year:"));
//   function dayOfTheWeek() {
//     var d = Math.round((((cC / 4) - 2 * cC - 1) + ((5 * yY / 4)) + ((26 * (mM + 1) / 10)) + dD) % 7);
//     var pickedDay;
//     switch (d) {
//       case 0:
//         pickedDay = "Kwasi";
//         alert("Kwasi");
//         break;
//       case 1:
//         pickedDay = "Kwadwo";
//         alert("Kwadwo");
//         break;
//       case 2:
//         pickedDay = "Kwabena";
//         alert("Kwabena");
//         break;
//       case 3:
//         pickedDay = "Kwaku";
//         alert("Kwaku");
//         break;
//       case 4:
//         pickedDay = "Yaw";
//         alert("Yaw");
//         break;
//       case 5:
//         pickedDay = "Kofi";
//         alert("Kofi");
//         break;
//       case 6:
//         pickedDay = "Kwame";
//         alert("Kwame");
//         break;
//       default:
//         pickedDay = "You are lost!"
//     }
//   }
//   alert(dayOfTheWeek());
//   //var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];*/dddddddddddddddddddddddd
// }