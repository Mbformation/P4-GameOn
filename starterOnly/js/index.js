import Form from "./form/form.js";

fetch("formData.json")
  .then((response) => response.json())
  .then((data) => {
    data.submitButtonElement = document.querySelector(
      data.submitButtonSelector
    );
    const signupForm = new Form(data);
    data.fields = data.fields.map(function (field) {
      field.element = document.querySelector(field.selector);
      return field;
    });
    signupForm.matchFieldsAndValidation();
    signupForm.checkForSubmission();
    signupForm.submit();
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
