import { processForecastData, processCurrentData } from "./dataManager";

// function for getting the weather data
async function getWeatherData(location = "london") {
  try {
    // Get the weather data from API request using the location input
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location.toLowerCase()}&appid=37b1a357549e4bdfda789736f18214b3`,
      { mode: "cors" },
    );
    // Extract the data from the API response
    const weatherData = await response.json();

    // console.log("raw data", weatherData);

    // Assign processed data to object
    const dataObj = processForecastData(weatherData);

    // Return the data object
    return dataObj;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Function for initialising form
function initForm() {
  // Create form background
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  // Create form container
  const formContainer = document.createElement("form");
  formContainer.classList.add("form-container");

  // Append container to background element
  formBackground.appendChild(formContainer);

  // Add form container to document
  const formContent = document.querySelector(".form-content");
  formContent.appendChild(formBackground);
}

// Add inputs for form
function addInputs() {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add container for location input
  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location-div");
  // Add label for location
  const locationLabel = document.createElement("label");
  locationLabel.setAttribute("for", "location-input");
  locationLabel.textContent = "Location:";
  // Add input for location
  const locationInput = document.createElement("input");
  locationInput.setAttribute("type", "text");
  locationInput.setAttribute("id", "location-input");
  locationInput.setAttribute("name", "location-input");
  // Set input as required
  locationInput.required = true;

  // Append both label and input for location to container
  locationDiv.appendChild(locationLabel);
  locationDiv.appendChild(locationInput);
  // Append container to form container
  formContainer.appendChild(locationDiv);
}

// Add submit button
function addButton() {
  // Get the form container
  const formContainer = document.querySelector(".form-container");

  // Add input element of type submit
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("edit-form-btn");

  // Add event listener to submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the location input
    const locationInput = document.querySelector("#location-input");

    (async () => {
      // Get the weather data
      const weatherData = await getWeatherData(
        locationInput.value.toLowerCase(),
      );

      console.log("weather data:", weatherData);
      // console.log(locationInput.value);
    })();
  });

  // Add submit button to the form container div
  formContainer.appendChild(submitBtn);
}

// Function for generating the location form
function generateForm() {
  // Initiliase form
  initForm();

  // Add inputs
  addInputs();

  // Add button
  addButton();
}

export default generateForm;
