// Function for getting the day name from a string
function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Monday"
}

// Function for displaying weather data
function displayData(weatherData) {
  // Get the content div
  const weatherContent = document.querySelector(".weather-content");
  // Get the checkbox status
  const toggleStatus = document.querySelector(".checkbox").checked;

  // Empty weather content div
  while (weatherContent.firstChild) {
    weatherContent.removeChild(weatherContent.firstChild);
  }

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
    // Get the day name
    const dayName = getDayName(forecastDateStr); // Get the day name
    // Destructure the tempInfo object
    const { temp } = tempInfo;
    // Convert the temperature to celsius
    const tempC = Math.round(1 * temp - 273.15);
    // Convert the temperature to fahrenheit
    const tempF = Math.round((tempC * 9) / 5 + 32);

    const tempDisplay = toggleStatus ? `${tempF} \u2109` : `${tempC} \u2103`;

    let dayDiv;

    if (!addedDates.has(forecastDateStr)) {
      addedDates.add(forecastDateStr);

      // Add div to the DOM
      dayDiv = document.createElement("div");
      dayDiv.classList.add("day-div");
      dayDiv.setAttribute("data-date", forecastDateStr); // Set a data attribute
      // Add day title
      const dayTitle = document.createElement("h4");
      dayTitle.classList.add("day-title");
      dayTitle.textContent = `${dayName}, ${forecastDateStr}`;
      dayDiv.appendChild(dayTitle);
      weatherContent.appendChild(dayDiv);
    } else {
      dayDiv = document.querySelector(`div[data-date='${forecastDateStr}']`);
    }

    // Add 3-hour forecast div to the respective day div
    const threeHourDiv = document.createElement("div");
    threeHourDiv.classList.add("time-div");
    // Hourly display title
    const hour = document.createElement("h5");
    hour.textContent = forecast.dateText.slice(11, 16);
    threeHourDiv.appendChild(hour);
    // Weather details
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div");
    const overviewText = document.createElement("p");
    overviewText.textContent = `Overview: ${overview}`;
    const tempText = document.createElement("p");
    tempText.textContent = `Temperature: ${tempDisplay}`;
    infoDiv.appendChild(overviewText);
    infoDiv.appendChild(tempText);
    threeHourDiv.appendChild(infoDiv);
    dayDiv.appendChild(threeHourDiv);
  });
}

export default displayData;
