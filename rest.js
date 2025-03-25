async function getCountry() {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();
  console.log(data);

  // calling a function to put the data in the UI - dom manipulation
  /*  return data;
  data.forEach((country) => {}); */
}
getCountry();
