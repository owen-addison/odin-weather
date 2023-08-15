// Function for displaying weather data
function displayData(weatherData) {
  // Get the content div
  const weatherContent = document.querySelector(".weather-content");

  // Get the forecast array from the weather data
  const { forecastArray } = weatherData;

  // Get today's date
  const today = new Date();
  // Convert date to YYY-MM-DD format
  const todayStr = today.toISOString().slice(8, 10);

  const addedDates = new Set();

  forecastArray.forEach((forecast) => {
    // Destructure the object for obtain the properties
    const { date, dateText, description, overview, tempInfo } = forecast;
    // Extract YYYY-MM-DD from dateText
    const forecastDateStr = dateText.slice(0, 10);
    // Destructure the tempInfo object
    const { temp } = tempInfo;
    // Convert the temperature to celsius
    const tempC = Math.round(1 * temp - 273.15);
    // Convert the temperature to fahrenheit
    const tempF = Math.round((tempC * 9) / 5 + 32);

    let dayDiv;

    if (!addedDates.has(forecastDateStr)) {
      addedDates.add(forecastDateStr);

      // Add div to the DOM
      dayDiv = document.createElement("div");
      dayDiv.classList.add("day-div");
      dayDiv.setAttribute("data-date", forecastDateStr); // Set a data attribute
      dayDiv.innerHTML = forecastDateStr; // or whatever content you want here
      weatherContent.appendChild(dayDiv);
    } else {
      dayDiv = document.querySelector(`div[data-date='${forecastDateStr}']`);
    }

    // Add 3-hour forecast div to the respective day div
    const threeHourDiv = document.createElement("div");
    threeHourDiv.innerHTML = `${forecast.dateText.slice(
      11,
      16,
    )} ${overview} ${tempC}`; // or any other details you'd like to display
    dayDiv.appendChild(threeHourDiv);
  });
}

export default displayData;
