const countriesDropdown = document.getElementById("countries");
const addButton = document.getElementById("addBtn");
const gridBody = document.getElementById("gridBody");

addButton.addEventListener("click", addToGridView);

function addToGridView() {
  const selectedCountry = countriesDropdown.value;

  if (!selectedCountry) {
    alert("Please select a country.");
    return;
  }

  const newRow = document.createElement("tr");
  const countryCell = document.createElement("td");
  countryCell.textContent = selectedCountry;

  const editCell = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    alert(`Editing ${selectedCountry}`);
  });
  editCell.appendChild(editButton);

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    gridBody.removeChild(newRow);
  });
  deleteCell.appendChild(deleteButton);

  newRow.appendChild(countryCell);
  newRow.appendChild(editCell);
  newRow.appendChild(deleteCell);
  gridBody.appendChild(newRow);

  countriesDropdown.value = "";
}
