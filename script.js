// let userInput = document.getElementById("date");

// userInput.max = new Date().toISOString().split("T")[0];

// function calculateAge() {
//   let birthDate = new Date(userInput.value);

//   let d1 = birthDate.getDate();
//   let m1 = birthDate.getMonth() + 1;
//   let y1 = birthDate.getFullYear();

//   let today = new Date();

//   let d2 = today.getDate();
//   let m2 = today.getMonth() + 1;
//   let y2 = today.getFullYear();

//   let d3, m3, y3;
//   y3 = y2 - y1;

//   if (m2 >= m1) {
//     m3 = m2 - m1;
//   } else {
//     y3--;
//     m3 = 12 + m2 - m1;
//   }
//   if (d2 >= d1) {
//     d3 = d2 - d1;
//   } else {
//     m3--;
//     d3 = getDaysInMonth(y1, m1) + d2 - d1;
//   }
//   if (m3 < 0) {
//     m3 = 11;
//     y3--;
//   }
//   console.log(y3, m3, d3);
// }

// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }
function calculateAge() {
  // Get the user's birthdate input
  var birthdateInput = document.getElementById("birthdate").value;

  // Convert the birthdate input to a Date object
  var birthDate = new Date(birthdateInput);

  // Get today's date
  var today = new Date();

  // Calculate the difference in years, months, and days
  var yearsDiff = today.getFullYear() - birthDate.getFullYear();
  var monthsDiff = today.getMonth() - birthDate.getMonth();
  var daysDiff = today.getDate() - birthDate.getDate();

  // Adjust the age if the current month is before the birth month, or if the birth day hasn't occurred yet this month
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Display the age in years, months, and days
  var ageOutput = document.getElementById("ageOutput");
  ageOutput.innerHTML =
    "You are <span class='years'>" +
    yearsDiff +
    "</span> years, <span class='months'>" +
    monthsDiff +
    "</span> months, and <span class='days'>" +
    daysDiff +
    "</span> days old.";
   if (yearsDiff > 18) {
    ageOutput.innerHTML += "<br>Get married!";
  } else {
    ageOutput.innerHTML +=
      "<br>You are too young for married.Focus on your study";
  }
}
