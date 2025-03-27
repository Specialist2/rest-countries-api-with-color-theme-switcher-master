let data = [];
async function fetchData() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  data = await response.json();
  console.log(data);
  displayCountries(data);
}

function displayCountries(filteredCountries) {
  const container = document.querySelector(".result");
  container.innerHTML = "";
  filteredCountries.forEach((country) => {
    container.innerHTML += `
  <div class="country-container">
  <img src="${country.flags.svg}" alt="flag" width="100" height="100"><br>
  <h2>${country.name.common}</h2>
  <span>${country.capital[0]}</span><br>
  <span>${country.population.toLocaleString()}</span><br>
  <span>${country.region}</span><br>
  </div>`;
  });
}
function filteredCountriesByRegion(region) {
  if (region === "all") {
    displayCountries(data);
  } else {
    const filteredCountries = data.filter(
      (country) => country.region === region
    );
    displayCountries(filteredCountries);
  }
}
document.getElementById("country").addEventListener("change", (event) => {
  filteredCountriesByRegion(event.target.value);
});
//displaying countries as input is typed
function filteredCountriesByInput(inputText) {
  const filteredCountries = data.filter((country) => {
    return country.name.common.toLowerCase().includes(inputText.toLowerCase());
  });
  displayCountries(filteredCountries);
}
document.getElementById("country-input").addEventListener("input", (event) => {
  const inputText = event.target.value;
  filteredCountriesByInput(inputText);
});
fetchData();
const modeButton = document.querySelector("#mode");
modeButton.addEventListener("click", () =>
  document.body.classList.toggle("dark-mode")
);
