// Process the data returned from the API request for forecast data
function processForecastData(data) {
  // Destructure the data object to extract only key properties
  const { name: location } = data.city;
  const { list: rawArray } = data;
  // For each element in the raw array extract the key data and repackage
  const forecastArray = rawArray.map((obj) => {
    // Destructure the object for the 3 hour forecast to extract the key properties
    const {
      dt: date,
      dt_txt: dateText,
      main: tempInfo,
      rain,
      weather: weatherArray,
    } = obj;
    // Get the "main" and "description" properties from the weather array
    const { main: overview, description } = weatherArray[0];
    // Assign the properties to a new object
    const newObj = { date, dateText, overview, description, tempInfo, rain };
    // Return the new object as past of the new array
    return newObj;
  });
  // Assign the extracted and processed data to a new forecast object
  const forecastData = { location, forecastArray };
  // Return the object
  return forecastData;
}

// Process the data returned from the API request for current data
function processCurrentData(data) {
  // Destructure the data object to extract only key properties
  const { main: tempInfo, name: location, weather: weatherArray } = data;
  // Assign the extracted properties to new object
  const currentData = { tempInfo, location, weatherArray };
  // Return the object
  return currentData;
}

export { processForecastData, processCurrentData };
