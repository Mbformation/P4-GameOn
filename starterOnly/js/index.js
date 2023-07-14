import Form from "./form/form.js";

/* Fetch formData.json and copy into data object */
fetch("formData.json")
  .then((response) => response.json())
  .then((data) => {
    /* Add SubmitButtonElement property */
    data.submitButtonElement = document.querySelector(
      data.submitButtonSelector
    );
    /* Add element property to each field */
    data.fields = data.fields.map(function (field) {
      field.element = document.querySelector(field.selector);
      return field;
    });
    const signupForm = new Form(data); // Form class instanciation
    signupForm.listenForValidation(); // Call listenFormValidation method
    signupForm.submit(); // Call submit method
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
