import ErrorMessage from "../errorMessage/errorMessage.js";

/* CheckboxField object definition */
const CheckboxField = {
  /* Listen to each checkbox */
  listen(field) {
    field.element.addEventListener("input", () => {
      if (this.validate(field)) {
        ErrorMessage.hide(field);
      } else {
        ErrorMessage.wrong(field);
      }
      field.form.validate(); // call form.validate method
    });
  },

  /* Validate each checkbox */
  validate(field) {
    if (!field.required) {
      return true;
    }
    return field.element.checked;
  },
};

export default CheckboxField;
