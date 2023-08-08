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

// Function for generating the location form
function generateForm() {
  initForm();
  console.log("done");
}

export default generateForm;
