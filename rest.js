async function getCountry() {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();
  console.log(data);
  data.slice(0, 20).forEach((country) => {
    let container = document.querySelector(".countries");
    container.innerHTML += `
  <div>
  <img src="${country.flags.svg}" alt="flag" width="100" height="100"><br>
  <h2>${country.name.common}<h2>
  <span>${country.population}</span><br>
  </div>`;
  });
  // calling a function to put the data in the UI - dom manipulation
  /*  return data;
  data.forEach((country) => {}); */
}
getCountry();
