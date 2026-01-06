const dropdown = document.getElementById("countryFilter");
const rows = document.querySelectorAll("#holidayTable tbody tr");

// Set default country
dropdown.value = "UAE";

// Apply filter on load
filterRows();

// Filter on change
dropdown.addEventListener("change", filterRows);

function filterRows() {
  const selected = dropdown.value;

  rows.forEach(row => {
    row.style.display =
      row.cells[2].innerText === selected ? "" : "none";
  });
}
