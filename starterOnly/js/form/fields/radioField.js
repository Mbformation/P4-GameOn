import ErrorMessage from "../errorMessage/errorMessage.js";

/* RadioField object definition */
const RadioField = {
  /* Listen to each radio button */
  listen(field) {
    const radioButtons = document.querySelectorAll(field.selector); // select all radio buttons
    /* Add listener to each radio button */
    radioButtons.forEach((rb) => {
      rb.addEventListener("change", () => {
        /* If this.validate() returns false, show "wrong" message*/
        if (!this.validate(field)) {
          ErrorMessage.wrong(field);

          /* Else hide message */
        } else {
          ErrorMessage.hide(field);
        }
        /* call form.validate method */
        field.form.validate();
      });
    });
  },

  /* Validate each radio button */
  validate(field) {
    const radioButtons = document.querySelectorAll(field.selector); // select all radio buttons
    /* Loop into each radio button, if checked return true, else return false */
    for (let i = 0; i < radioButtons.length; i++) {
      const rb = radioButtons[i];
      if (rb.checked) {
        return true;
      }
    }

    return false;
  },
};

export default RadioField;
