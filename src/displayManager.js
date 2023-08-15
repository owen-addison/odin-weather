// Function for displaying weather data
function displayData(weatherData) {
  // Get the content div
  const weatherContent = document.querySelector(".weather-content");

  // Get the forecast array from the weather data
  const { forecastArray } = weatherData;

  // Get today's date
  const today = new Date();
  console.log(today.getDate());

  // Iterate through forecast data
  forecastArray.forEach((element) => {
    // Destructure the object for obtain the properties
    const { date, dateText, description, overview, tempInfo } = element;
    // Destructure the tempInfo object
    const { temp } = tempInfo;
    // Convert the temperature to celsius
    const tempC = 1 * temp - 273.15;
    // Convert the temperature to fahrenheit
    const tempF = (tempC * 9) / 5 + 32;

    // Extract the date
    const fullDate = dateText.slice(0, 10);
    // Extract the day's date from date text
    const day = dateText.slice(8, 10);
    // Extract the hour from date text
    const hr = dateText.slice(11, 16);

    console.log(dateText, day, hr);

    // Create div for each element
    const div = document.createElement("div");
  });
}

export default displayData;
