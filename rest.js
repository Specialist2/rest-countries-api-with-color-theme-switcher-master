function getCountryInfo() {
  let countryName = document.getElementById("countryinput").value.trim();

  if (countryName === "") {
    alert("Please enter a country name");
    return;
  }

  let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Country not found");
      }

      return response.json();
    })
    .then((data) => {
      let country = data[0];
      let countryFlag = country.flags.svg; // Country flag URL
      let countryPopulation = country.population.toLocaleString(); // Format population with commas

      // Update the result div with country information
      document.getElementById("result").innerHTML = `
        
        <h2>${country.name.common}</h2>
        <p><strong>Population:</strong> ${countryPopulation}</p>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      `;
    })
    .catch((error) => {
      // If there’s an error (e.g., country not found), display the error message
      document.getElementById(
        "result"
      ).innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
