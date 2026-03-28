// "Magic number" global constants:
// ==================================================
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const TEMPS_LENGTH = 5;
const MIN_TEMP = 0;
const MAX_TEMP = 100;
// Define boundaries for Cold (0-50), Mild (51-70), and Hot (71-100):
const COLD_MAX = 50;
const MILD_MAX = 70;

// Get elements from DOM as global variables:
// ==================================================
let container = document.querySelector(".card-container");

// Array of temperatures:
// Start hardcoded:
// let temps = [20, 40, 60, 80, 100];
// Generate random temperatures:
let temps = [];
for (let i = 0; i < TEMPS_LENGTH; i++) {
  let rand = Math.floor(Math.random() * (MAX_TEMP - MIN_TEMP + 1) + MIN_TEMP);
  temps.push(rand);
}

// Render cards to the DOM:
// ==================================================
// Current date:
const currentDate = new Date();
let j = 1;
for (let i = 0; i < temps.length; i++) {
  // Get a date in a readable format:
  let date;
  // This is for fixing problems like "32 of March":
  if (currentDate.getDate() + i > MONTH_DAYS[currentDate.getMonth()]) {
    // Go to next month and start from 0:
    date =
      j +
      " of " +
      MONTHS[currentDate.getMonth() < 11 ? currentDate.getMonth() + 1 : 0] +
      ", " +
      currentDate.getFullYear();
    j++;
  } else {
    date =
      currentDate.getDate() +
      i +
      " of " +
      MONTHS[currentDate.getMonth()] +
      ", " +
      currentDate.getFullYear();
  }
  // Assign cold, mild, or hot:
  let tempGroup =
    temps[i] <= COLD_MAX ? "Cold" : temps[i] <= MILD_MAX ? "Mild" : "Hot";
  // Create the elements:
  // Card:
  let card = document.createElement("div");
  card.classList = "card";
  card.classList += " " + tempGroup;
  // Assign the text content and append to DOM:
  container.appendChild(card);
  // Span 1:
  let span1 = document.createElement("span");
  span1.classList = "date";
  span1.textContent = date;
  card.appendChild(span1);
  // Span 2:
  let span2 = document.createElement("span");
  span2.classList = "temp";
  span2.textContent = temps[i] + "°F";
  card.appendChild(span2);
  // Span 3:
  let span3 = document.createElement("span");
  span3.classList = "temp-group";
  span3.textContent = tempGroup;
  card.appendChild(span3);
}
