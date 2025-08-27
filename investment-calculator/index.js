const form = document.querySelector("form");
const main = document.querySelector(".main");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const invest = document.querySelector("#invest").value;
  const annual = document.querySelector("#annual").value;
  const interest = document.querySelector("#interest").value;
  const duration = document.querySelector("#duration").value;

  const investNum = Number(invest);
  const annualNum = Number(annual);
  const interestNum = Number(interest);
  const durationNum = Number(duration);

  if (
    isNaN(investNum) ||
    isNaN(annualNum) ||
    isNaN(interestNum) ||
    isNaN(durationNum)
  ) {
    alert("Invalid number");
    return;
  }

  // Clear previous output


  const div = document.createElement("div")
  // Create table
  const table = document.createElement("table");
  table.style.border = "1";
  table.style.borderCollapse = "collapse";
 

  // Header row
  const header = document.createElement("tr");
  header.classList.add("tr")
  header.innerHTML = `
    <th>Year</th>
    <th>Starting Amount</th>
    <th>Interest Earned</th>
    <th>End of Year Total</th>
  `;
  table.appendChild(header);

  // Calculation loop
  let currentAmount = investNum;

  for (let year = 1; year <= durationNum; year++) {
    const interestEarned = (currentAmount * interestNum) / 100;
    currentAmount += interestEarned + annualNum;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${year}</td>
      <td>${(currentAmount - interestEarned - annualNum).toFixed(2)}</td>
      <td>${interestEarned.toFixed(2)}</td>
      <td>${currentAmount.toFixed(2)}</td>
    `;
    table.appendChild(row);
  }

  // Add table to page
  div.appendChild(table);
const data=   document.querySelector(".show").appendChild(div)
main.appendChild(data)

});
