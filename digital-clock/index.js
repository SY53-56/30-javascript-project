

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


