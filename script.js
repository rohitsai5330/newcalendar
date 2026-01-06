document.getElementById("countryFilter").addEventListener("change", function () {
  const selected = this.value;
  const rows = document.querySelectorAll("#holidayTable tbody tr");

  rows.forEach(row => {
    row.style.display =
      selected === "UAE" || row.cells[2].innerText === selected
        ? ""
        : "none";
  });
});
