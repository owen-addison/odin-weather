// Process the data returned from the API request
function processData(data) {
  // Destructure the data object to extract only key properties
  const { main: tempInfo, name: location, weather: weatherArray } = data;
  // Assign the extracted properties to new object
  const obj = { tempInfo, location, weatherArray };
  // Return the object
  return obj;
}

export default processData;
