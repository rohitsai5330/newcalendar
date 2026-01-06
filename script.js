const dropdown = document.getElementById("countryFilter");
const rows = document.querySelectorAll("#holidayTable tbody tr");

// ✅ Set UAE as default
dropdown.value = "UAE";

// ✅ Filter function
function filterRows() {
  const selected = dropdown.value;

  rows.forEach(row => {
    row.style.display =
      row.cells[2].innerText === selected ? "" : "none";
  });
}

// ✅ Apply filter on page load
filterRows();

// ✅ Apply filter on dropdown change
dropdown.addEventListener("change", filterRows);
