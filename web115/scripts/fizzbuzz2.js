// ========================
// FizzBuzz 2
// ========================

// ----- SETTINGS -----
const START = 1;
const END = 140;

const firstDivisor = 3;
const secondDivisor = 5;

const WORD_DEFAULT = "Paws & Polish!";
const WORD_A = "EEK!";
const WORD_B = "SCREAM!";

// ----- DIVISION CHECK FUNCTION -----
function checkDivision(number, divisor) {
  return number % divisor === 0;
}

// ----- GET USER NAME -----
const firstName = prompt("Enter your first name:") || "";
const middleInitial = prompt("Enter your middle initial (optional):") || "";
const lastName = prompt("Enter your last name:") || "";

// Build full name cleanly
let fullName = firstName.trim();

if (middleInitial.trim() !== "") {
  fullName += " " + middleInitial.trim() + ".";
}

if (lastName.trim() !== "") {
  fullName += " " + lastName.trim();
}

// ----- OUTPUT -----
let outputHTML = "";

if (fullName.trim() !== "") {
  outputHTML += `<h3>Welcome, ${fullName}!</h3>`;
} else {
  outputHTML += `<h3>Welcome!</h3>`;
}

outputHTML += "<ol>";

// ----- MAIN LOOP -----
for (let i = START; i <= END; i++) {
  let message = "";

  if (checkDivision(i, firstDivisor)) {
    message += WORD_A;
  }

  if (checkDivision(i, secondDivisor)) {
    if (message !== "") message += " ";
    message += WORD_B;
  }

  if (message === "") {
    message = WORD_DEFAULT;
  }

  outputHTML += `<li>${message}</li>`;
}

outputHTML += "</ol>";

// Print to page
document.getElementById("output").innerHTML = outputHTML;
