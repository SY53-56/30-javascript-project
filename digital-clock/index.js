

function digitalClock() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // Format with leading zeros if needed
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Update HTML
  document.querySelector(".hours").textContent = hour + ":";
  document.querySelector(".min").textContent = min + ":";
  document.querySelector(".sec").textContent = sec;
}

// Run every second
setInterval(digitalClock, 1000);

// Optional: run once immediately to avoid 1s delay
digitalClock();



const main = document.querySelector(".main");
const click = document.querySelector(".color");

// Load old data from localStorage
const oldData = JSON.parse(localStorage.getItem("darkmode") || "false");
if (oldData) {
  document.body.classList.add("active");
}

// Save data function
function saveData(task) {
  localStorage.setItem("darkmode", JSON.stringify(task));
}

// Toggle dark mode
function darkMode() {
  document.body.classList.toggle("active");
  let isDark = document.body.classList.contains("active");
  saveData(isDark);
}

// Event listener
click.addEventListener("click", darkMode);
// comment
const text = document.querySelector(".text");
const range = document.querySelector(".range");
const postBtn = document.querySelector(".post");
const box = document.querySelector(".comment");

// ✅ Safe JSON parsing
let taskData = localStorage.getItem("nothing");
let dataOld = [];

if (taskData) {
  try {
    dataOld = JSON.parse(taskData);
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    dataOld = [];
  }
}



// ✅ Show old comments
dataOld.forEach((item) => {
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  h2.textContent = `comment: ${item.comment}`;
  h3.textContent = `star: ${item.range}`;
  box.appendChild(h2);
  box.appendChild(h3);
});

function commentShow(evt) {
  evt.preventDefault();

  const inputValue = text.value.trim();
  const rangeValue = range.value.trim();
  if (inputValue === '' && rangeValue === '') return;

  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  h2.textContent = `comment: ${inputValue}`;
  h3.textContent = `star: ${rangeValue}`;
  box.appendChild(h2);
  box.appendChild(h3);

  let newComment = {
    comment: inputValue,
    range: rangeValue
  };

  dataOld.push(newComment); // Use existing array
  localStorage.setItem("nothing", JSON.stringify(dataOld)); // Update storage

  text.value = "";
  range.value = "";
}

postBtn.addEventListener("click", commentShow);
