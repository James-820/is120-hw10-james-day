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
const TEMPS_LENGTH = 5;
const MIN_TEMP = 0;
const MAX_TEMP = 100;
// Define boundaries for Cold (0-50), Mild (51-70), and Hot (71-100):
const COLD_MAX = 50;
const MILD_MAX = 70;

// Get elements from DOM as global variables:
// ==================================================
let container = document.querySelector(".card-container");
// Current date:
const currentDate = new Date();

// Array of temperatures:
// Start hardcoded:
let temps = [20, 40, 60, 80, 100];
// Generate random temperatures:

// Render cards to the DOM:
// ==================================================
for (let i = 0; i < temps.length; i++) {
  // Get a date in a readable format:
  let date =
    currentDate.getDate() +
    i +
    " of " +
    MONTHS[currentDate.getMonth()] +
    ", " +
    currentDate.getFullYear() +
    "\n";
  // Assign cold, mild, or hot:
  let tempGroup =
    temps[i] <= COLD_MAX ? "Cold" : temps[i] <= MILD_MAX ? "Mild" : "Hot";
  // Create the elements:
  // Card:
  let card = document.createElement("div");
  card.classList = "card";
  //   card.id = temps[i];
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
  // Assign background color:
  if (tempGroup === "Cold") {
    card.backgroundColor = "blue";
  } else if (tempGroup === "Mild") {
    card.backgroundColor = "white";
  } else {
    card.backgroundColor = "red";
  }
  // Assign the text content and append to DOM:
  container.appendChild(card);
}
