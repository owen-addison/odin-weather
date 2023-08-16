import { processForecastData, processCurrentData } from "./dataManager";
import displayData from "./displayManager";

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

// Function for generating toggle slider
function createToggle() {
  // Create container for switch
  const tempContainer = document.createElement("div");
  tempContainer.classList.add("temp-container");

  // Create switch
  const label = document.createElement("label");
  label.classList.add("switch");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox"); // Ensure the type is set to checkbox
  checkbox.classList.add("checkbox");
  label.appendChild(checkbox);

  const slider = document.createElement("span");
  slider.classList.add("slider");
  label.appendChild(slider);

  // Add an event listener to the label
  label.addEventListener("click", (e) => {
    e.preventDefault();

    checkbox.checked = !checkbox.checked;

    // Get the location input
    const locationInput = document.querySelector("#location-input");

    // Check if the input is empty
    if (locationInput.value.trim() === "") {
      alert("Please enter a location."); // Optional: Alert the user
      return; // Exit the function
    }

    (async () => {
      // Get the weather data
      const weatherData = await getWeatherData(
        locationInput.value.toLowerCase(),
      );

      console.log("weather data:", weatherData);

      // Display the weather data
      displayData(weatherData);

      // console.log(locationInput.value);
    })();
  });

  // Create text for temp units
  const cels = document.createElement("p");
  cels.textContent = "Celsius";
  const fahr = document.createElement("p");
  fahr.textContent = "Fahrenheit";

  // Add elements in order to temp container
  tempContainer.appendChild(cels);
  tempContainer.appendChild(label);
  tempContainer.appendChild(fahr);

  return tempContainer;
}

// Function for initialising form
function initForm() {
  // Create form container
  const formContainer = document.createElement("form");
  formContainer.classList.add("form-container");

  // Add form container to document
  const topContent = document.querySelector(".top-content");
  topContent.appendChild(formContainer);

  // Create toggle and add to document
  topContent.appendChild(createToggle());
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

    // Check if the input is empty
    if (locationInput.value.trim() === "") {
      alert("Please enter a location."); // Optional: Alert the user
      return; // Exit the function
    }

    (async () => {
      // Get the weather data
      const weatherData = await getWeatherData(
        locationInput.value.toLowerCase(),
      );

      // Display the weather data
      displayData(weatherData);
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
