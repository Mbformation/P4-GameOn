class ErrorMessage {
  constructor(field) {
    this.field = field;
  }
  wrong(field) {
    field.element.parentElement.setAttribute("data-error", field.errorMessage);
    field.element.parentElement.setAttribute("data-error-visible", "true");
  }
  empty(field) {
    field.element.parentElement.setAttribute("data-error", "Champ obligatoire");
    field.element.parentElement.setAttribute("data-error-visible", "true");
  }
  hide(field) {
    field.element.parentElement.removeAttribute("data-error");
    field.element.parentElement.removeAttribute("data-error-visible");
  }
}

export default ErrorMessage;
