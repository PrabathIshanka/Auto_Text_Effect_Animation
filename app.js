const containerEl = document.querySelector(".container");
const career = [
  "Software Engineer",
  "YouTuber",
  "Web Developer",
  "FreeLancer",
  "Instructor",
];

let careerIndex = 0;
let careerCharacter = 0;
updateText();

function updateText() {
  careerCharacter++;
  containerEl.innerHTML = `<h1>I am ${
    career[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${career[careerIndex].slice(0, careerCharacter)}</h1>`;
  if (careerCharacter === career[careerIndex].length) {
    careerIndex++;
    careerCharacter = 0;
  }

  if (careerIndex === career.length) careerIndex = 0;
  setTimeout(updateText, 300);
}
