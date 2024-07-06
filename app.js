// Select the container element where the text will be displayed
const containerEl = document.querySelector(".container");

// Array of different career options
const careers = [
  "Software Engineer",
  "YouTuber",
  "Web Developer",
  "Freelancer",
  "Instructor",
];

let careerIndex = 0; // Index to keep track of the current career
let careerCharacter = 0; // Index to keep track of the current character in the career string

// Function to update the text in the container element
function updateText() {
  careerCharacter++; // Increment character index

  // Update the inner HTML of the container with the current career up to the current character
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, careerCharacter)}</h1>`;

  // Check if the entire career string has been displayed
  if (careerCharacter === careers[careerIndex].length) {
    careerIndex++; // Move to the next career
    careerCharacter = 0; // Reset character index
  }

  // If we've gone through all careers, reset the index to start over
  if (careerIndex === careers.length) careerIndex = 0;

  // Update text every 300 milliseconds
  setTimeout(updateText, 300);
}

// Start the text update process
updateText();
