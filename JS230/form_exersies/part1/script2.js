// Modern vanilla JS form validation using Constraint Validation API
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = Array.from(form.querySelectorAll('input'));
  const formErrors = form.querySelector('.form_errors');

  // Helpers
  function getLabelTextFor(input) {
    const label = form.querySelector(`label[for="${input.id}"]`);
    return label ? label.textContent.trim() : input.name;
  }

  function showFieldError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error_message');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
    input.classList.add('invalid_field');
  }

  function clearFieldError(input) {
    const errorSpan = input.parentElement.querySelector('.error_message');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
    input.classList.remove('invalid_field');
  }

  function validateInput(input) {
    // Use constraint validation API properties
    const validity = input.validity;
    if (validity.valid) return true;

    if (validity.valueMissing) {
      showFieldError(input, `${getLabelTextFor(input)} is a required field.`);
      return false;
    }

    if (validity.patternMismatch) {
      if (input.id === 'password') {
        showFieldError(input, 'Password must be at least 10 characters long.');
      } else if (input.id === 'phone') {
        showFieldError(input, 'Phone number must use the format 111-222-3333.');
      } else {
        showFieldError(input, `Please enter a valid ${getLabelTextFor(input)}.`);
      }
      return false;
    }

    // Fallback for other constraint failures
    showFieldError(input, `The ${getLabelTextFor(input)} is invalid.`);
    return false;
  }

  // Event handlers
  function onBlur(e) {
    const input = e.target;
    // Validate this control on blur
    validateInput(input);

    // If the form is fully valid, clear the top-level error
    if (form.checkValidity()) {
      formErrors.textContent = '';
    }
  }

  function onFocus(e) {
    const input = e.target;
    // Clear inline message when the control regains focus
    clearFieldError(input);
  }

  function validateAllInputs() {
    let allValid = true;
    inputs.forEach(input => {
      const ok = validateInput(input);
      if (!ok) allValid = false;
    });
    return allValid;
  }

  function onSubmit(e) {
    // Prevent native submission when invalid
    if (!form.checkValidity()) {
      e.preventDefault();
      formErrors.textContent = 'Fix errors before submitting this form.';
      // Validate all so user sees messages
      validateAllInputs();
      return;
    }

    // No errors: allow submit (form action is '#')
    formErrors.textContent = '';
  }

  // Wire up events
  inputs.forEach(input => {
    input.addEventListener('blur', onBlur);
    input.addEventListener('focus', onFocus);
  });

  form.addEventListener('submit', onSubmit);
});