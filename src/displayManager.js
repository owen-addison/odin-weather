// Function for displaying weather data
function displayData(weatherData) {
  // Get the content div
  const weatherContent = document.querySelector(".weather-content");

  // Get the forecast array from the weather data
  const { forecastArray } = weatherData;

  // Get today's date
  const today = new Date();
  console.log(today.getDate());
}

export default displayData;
