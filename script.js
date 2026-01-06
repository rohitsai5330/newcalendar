const dropdown = document.getElementById("countryFilter");
const table = document.getElementById("holidayTable").getElementsByTagName('tbody')[0];

dropdown.addEventListener("change", function() {
  const selected = this.value;
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const country = row.cells[2].innerText;
    row.style.display = (selected === "All" || country === selected) ? "" : "none";
  }
});
