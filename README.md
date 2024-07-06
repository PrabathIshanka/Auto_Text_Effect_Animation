# Auto Text Effect Animation

## Project Overview
This project is a simple web application that displays an auto text effect animation. The text dynamically changes to show various career options in sequence. The application is built using HTML, CSS, and JavaScript.

## Features
- Displays different career options in a smooth text animation.
- Uses a custom font from Google Fonts.
- Styled using CSS for a clean and modern look.
- Utilizes JavaScript to dynamically update the text.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/PrabathIshanka/auto-text-effect-animation.git
    ```

2. Navigate to the project directory:
    ```sh
    cd auto-text-effect-animation
    ```

## Usage
Open the `index.html` file in your web browser to view the auto text effect animation.

### File Structure

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auto Text Effect Animation</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container"></div>
    <script src="app.js"></script>
  </body>
</html>
```
### style.css
```css
@import url("https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap");

body {
  margin: 0;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: cornflowerblue;
  font-family: "Playwrite DE Grund", cursive;
}
```
### app.js
```js
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

let careerIndex = 0;        // Index to keep track of the current career
let careerCharacter = 0;    // Index to keep track of the current character in the career string

// Function to update the text in the container element
function updateText() {
  careerCharacter++; // Increment character index
  
  // Update the inner HTML of the container with the current career up to the current character
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, careerCharacter)}</h1>`;
  
  // Check if the entire career string has been displayed
  if (careerCharacter === careers[careerIndex].length) {
    careerIndex++;       // Move to the next career
    careerCharacter = 0; // Reset character index
  }

  // If we've gone through all careers, reset the index to start over
  if (careerIndex === careers.length) careerIndex = 0;
  
  // Update text every 300 milliseconds
  setTimeout(updateText, 300);
}

// Start the text update process
updateText();
```
