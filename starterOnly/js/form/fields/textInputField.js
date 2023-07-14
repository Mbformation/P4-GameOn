import ErrorMessage from "../errorMessage/errorMessage.js";

/* TextInputField object definition*/
const TextInputField = {
  /* Add listener to each text input field */
  listen(field) {
    field.element.addEventListener("input", () => {
      /* if validate is true, hide message, if false, show error message. 
      Call form.validate method */
      if (this.validate(field)) {
        ErrorMessage.hide(field);
      } else {
        ErrorMessage.wrong(field);
      }
      field.form.validate();
    });
  },

  /* Validate each text input field */
  validate(field) {
    const regexPattern = new RegExp(field.regex);
    const fieldValue = field.element.value.trim();
    if (field.required && fieldValue == "") {
      return false;
    }

    if (!regexPattern.test(fieldValue)) {
      return false;
    }

    return true;
  },
};

export default TextInputField;
