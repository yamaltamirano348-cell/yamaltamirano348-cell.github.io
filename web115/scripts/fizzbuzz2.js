// ========================
// FizzBuzz 2
// ========================

// ----- SETTINGS -----
const START = 1;
const END = 140;

const NUM_A = 3;
const NUM_B = 5;

const WORD_DEFAULT = "Paws & Polish!";
const WORD_A = "EEK!";
const WORD_B = "SCREAM!";

// ----- GET USER NAME (NO NUMBER PROMPT) -----
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

// Multiple of 3
if (i % NUM_A === 0) {
message += WORD_A;
}

// Multiple of 5
if (i % NUM_B === 0) {
if (message !== "") message += " ";
message += WORD_B;
}

// Default
if (message === "") {
message = WORD_DEFAULT;
}

// Include the number in each line
outputHTML += `<li>${i}. ${message}</li>`;
}

outputHTML += "</ol>";

// Print to page
document.getElementById("output").innerHTML = outputHTML;
