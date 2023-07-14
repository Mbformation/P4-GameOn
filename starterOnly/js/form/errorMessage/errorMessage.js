/* Definition of ErrorMessage object */

const ErrorMessage = {
  /* Show error message */
  wrong(field) {
    field.element.parentElement.setAttribute("data-error", field.errorMessage);
    field.element.parentElement.setAttribute("data-error-visible", "true");
  },
  /* Hide error message */
  hide(field) {
    field.element.parentElement.removeAttribute("data-error");
    field.element.parentElement.removeAttribute("data-error-visible");
  },
};

export default ErrorMessage;
