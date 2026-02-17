// =========================
// FizzBuzz 3
// (3, 5, 7 with all combos)
// =========================

// ----- SETTINGS -----
const START = 1;
const END = 140;

const WORD_DEFAULT = "Paws & Polish!";

// Rules list (easy to add more later!)
const rules = [
  { divisor: 3, word: "EEK!" },
  { divisor: 5, word: "SCREAM!" },
  { divisor: 7, word: "BANG!" }
];

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
  let messageParts = [];

  // Check every rule in the list
  for (let r = 0; r < rules.length; r++) {
    if (checkDivision(i, rules[r].divisor)) {
      messageParts.push(rules[r].word);
    }
  }

  // If nothing matched, use default
  let message = (messageParts.length > 0) ? messageParts.join(" ") : WORD_DEFAULT;

  outputHTML += `<li>${message}</li>`;
}

outputHTML += "</ol>";

// Print to page
document.getElementById("output").innerHTML = outputHTML;
