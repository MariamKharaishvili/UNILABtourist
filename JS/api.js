fetch(
  "https://fakerapi.it/api/v1/custom?_quantity=10&customfield1=country&customfield2=city&customfield3=latitude&customfield4=longitude"
)
  .then((response) => response.json())
  .then((data) => {
    const locationsTableBody = document.getElementById("locationsTableBody");
    data.data.forEach((location) => {
      const countryCell = document.createElement("td");
      countryCell.textContent = location.customfield1;
      const row = document.createElement("tr");
      row.appendChild(countryCell);
      const cityCell = document.createElement("td");
      cityCell.textContent = location.customfield2;
      row.appendChild(cityCell);

      const latitudeCell = document.createElement("td");
      latitudeCell.textContent = location.customfield3;
      row.appendChild(latitudeCell);
      const longitudeCell = document.createElement("td");
      longitudeCell.textContent = location.customfield4;
      row.appendChild(longitudeCell);
      locationsTableBody.appendChild(row);
    });
  })
  .catch((error) => console.error(error));
