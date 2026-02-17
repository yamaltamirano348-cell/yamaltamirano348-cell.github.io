// ==========================
// FizzBuzz 4
// ==========================

// Returns true if number is evenly divisible by divisor
function checkDivision(number, divisor) {
  return number % divisor === 0;
}

// Make sure "word" is ONE WORD (no spaces). Hyphens like Level-Up are ok.
function isSingleWord(word) {
  return word.trim() !== "" && !word.trim().includes(" ");
}

function buildFullName(first, middle, last) {
  let full = first.trim();

  if (middle.trim() !== "") {
    full += " " + middle.trim() + ".";
  }

  if (last.trim() !== "") {
    full += " " + last.trim();
  }

  return full.trim();
}

function getIntValue(id) {
  return parseInt(document.getElementById(id).value, 10);
}

function getTextValue(id) {
  return document.getElementById(id).value.trim();
}

function showError(msg) {
  const output = document.getElementById("output");
  output.innerHTML = `<p><strong>Error:</strong> ${msg}</p>`;
}

function generateFizzBuzz() {
  const firstName = getTextValue("firstName");
  const middleInitial = getTextValue("middleInitial");
  const lastName = getTextValue("lastName");

  const total = getIntValue("total");

  const div1 = getIntValue("div1");
  const div2 = getIntValue("div2");
  const div3 = getIntValue("div3");

  const word1 = getTextValue("word1");
  const word2 = getTextValue("word2");
  const word3 = getTextValue("word3");

  // Must be blank (assignment says set default to blank)
  const defaultWord = getTextValue("defaultWord"); // should stay ""

  // Basic validation
  if (firstName === "" || lastName === "") {
    showError("Please enter your first and last name.");
    return;
  }

  if (!Number.isInteger(total) || total < 1) {
    showError("Total must be a whole number 1 or greater.");
    return;
  }

  const divisors = [div1, div2, div3];
  if (divisors.some(d => !Number.isInteger(d) || d < 1)) {
    showError("All divisors must be whole numbers 1 or greater.");
    return;
  }

  if (!isSingleWord(word1) || !isSingleWord(word2) || !isSingleWord(word3)) {
    showError("Each word field must be a single word (no spaces). Example: Level-Up is OK.");
    return;
  }

  // Keep the rules flexible (easy to add more later)
  const rules = [
    { divisor: div1, word: word1 },
    { divisor: div2, word: word2 },
    { divisor: div3, word: word3 }
  ];

  const fullName = buildFullName(firstName, middleInitial, lastName);

  let html = "";
  html += `<h3>Welcome, ${fullName}!</h3>`;
  html += `<ol>`;

  for (let i = 1; i <= total; i++) {
    const words = [];

    for (const rule of rules) {
      if (checkDivision(i, rule.divisor)) {
        words.push(rule.word);
      }
    }

    // If not divisible by any rule, default is BLANK
    let text = "";
    if (words.length > 0) {
      text = words.join(", ");
    } else {
      text = defaultWord; // should be ""
    }

    // Match the example style: "15. Exploration, Level-Up"
    // If blank, show just "15."
    if (text === "") {
      html += `<li>${i}.</li>`;
    } else {
      html += `<li>${i}. ${text}</li>`;
    }
  }

  html += `</ol>`;

  document.getElementById("output").innerHTML = html;
}

// Hook up buttons
document.getElementById("fbForm").addEventListener("submit", function (e) {
  e.preventDefault();
  generateFizzBuzz();
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("output").innerHTML = "";
});
