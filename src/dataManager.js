// Process the data returned from the API request
function processData(data) {
  // Destructure the data object to extract only key properties
  const { main: tempInfo, name: location, weather: weatherArray } = data;
  // Assign the extracted properties to new object
  const obj = { tempInfo, location, weatherArray };
  // Return the object
  return obj;
}

// Function for handling submit button click
function handleSubmit(location = "london") {
  // Make location all lower case letters
  location.toLowerCase();

  // API request
  fetch(
    // "https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1276&appid=37b1a357549e4bdfda789736f18214b3",
    // Use the location input to submit API request
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=37b1a357549e4bdfda789736f18214b3`,
    { mode: "cors" },
  )
    .then((response) => response.json())
    .then((response) => {
      // Assign processed data to object
      const dataObj = processData(response);
      console.log("data manager", dataObj);
      // Return the data object
      return dataObj;
    })
    .catch((err) => {
      console.log("ERROR!", err);
    });
}

export default handleSubmit;
