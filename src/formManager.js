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
  const content = document.querySelector(".content");
  content.appendChild(formBackground);
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

// Function for generating the location form
function generateForm() {
  // Initiliase form
  initForm();

  // Add inputs
  addInputs();
}

export default generateForm;
