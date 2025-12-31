class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.topError = this.form.querySelector('.form_errors');

    this.firstName = document.getElementById('first_name');
    this.lastName = document.getElementById('last_name');
    this.phone = document.getElementById('phone');

    this.ccFields = Array.from(document.querySelectorAll('.cc-inputs input'));
    this.setTabForwarding(this.ccFields);

    // Create CC error message and add to DOM
    this.ccContainer = document.querySelector('.cc-inputs');
    this.ccErrorMsg = this.ccContainer.querySelector('.error_message');
    
    this.ccContainer.after(this.ccErrorMsg);

    // Input restrictions
    this.keydownListener(this.firstName);
    this.keydownListener(this.lastName);
    this.phoneListener(this.phone);
    this.ccListener(this.ccFields);

    this.ccFields.forEach(input => {
      input.addEventListener('blur', () => this.validateCC());
      input.addEventListener('focus', () => {
        this.ccErrorMsg.style.display = 'none';
      });
    });

    // Collect inputs + error spans
    this.fields = Array.from(this.form.querySelectorAll('input:not(.cc-input)')).map(input => {
      const error = input.parentElement.querySelector('.error_message');
      return { input, error };
    });

    this.bindEvents();
  }

  bindEvents() {
    this.fields.forEach(field => {
      field.input.addEventListener('blur', () => this.validateField(field));
      field.input.addEventListener('focus', () => this.clearFieldError(field));
    });

    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  validateField(field) {
    const { input, error } = field;

    // Email validation message
    if (input.name === 'email') {
      if (input.value !== '' && input.validity.patternMismatch) {
        input.setCustomValidity('Please enter a valid email address (must contain "@")');
      } else {
        input.setCustomValidity('');
      }
    }

    // Name validation
    if ((input.name === 'first_name' || input.name === 'last_name') && /[0-9]/.test(input.value)) {
      input.setCustomValidity('Name must not contain numbers.');
    } else if (input.name === 'first_name' || input.name === 'last_name') {
      input.setCustomValidity('');
    }

    if (!input.checkValidity()) {
      error.textContent = input.validationMessage;
      error.style.display = 'inline-block';
      input.classList.add('invalid');
      return false;
    } else {
      this.clearFieldError(field);
      return true;
    }
  }

  clearFieldError(field) {
    if (!field.error) return;
    field.error.textContent = '';
    field.error.style.display = 'none';
    field.input.classList.remove('invalid');
    field.input.setCustomValidity('');
  }

  handleSubmit() {
    let hasErrors = false;

    this.fields.forEach(field => {
      if (!this.validateField(field)) hasErrors = true;
    });

    if (!this.validateCC()) hasErrors = true;

    this.topError.textContent = hasErrors
      ? 'Fix errors before submitting this form.'
      : '';

    if (!hasErrors) {
      alert('Form submitted successfully!');
      this.form.reset();
      this.fields.forEach(field => field.input.classList.remove('invalid'));
      this.ccErrorMsg.style.display = 'none';
    }
  }

  keydownListener(field) {
    field.addEventListener('keydown', event => {
      const allowed = /^[a-zA-Z\s']$/;
      const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

      if (!allowed.test(event.key) && !controlKeys.includes(event.key)) {
        event.preventDefault();
      }
    });
  }

  phoneListener(field) {
    field.addEventListener('keydown', event => {
      const allowed = /^[0-9-]$/;
      const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

      if (!allowed.test(event.key) && !controlKeys.includes(event.key)) {
        event.preventDefault();
      }
    });
  }

  ccListener(inputs) {
    inputs.forEach(input => {
      input.addEventListener('keydown', event => {
        const allowed = /^[0-9]$/;
        const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

        if (!allowed.test(event.key) && !controlKeys.includes(event.key)) {
          event.preventDefault();
        }
      });
    });
  }

  validateCC() {
    const invalid = this.ccFields.some(input => input.value.length !== 4);

    if (invalid) {
      this.ccErrorMsg.textContent =
        'Credit Card must be 16 digits';
      this.ccErrorMsg.style.display = 'inline-block';
      return false;
    } else {
      this.ccErrorMsg.textContent = '';
      this.ccErrorMsg.style.display = 'none';
      return true;
    }
  }

  setTabForwarding(inputs) {
    inputs.forEach((input, index) => {
      input.addEventListener('input', event => {
        if (input.value.length === input.maxLength) {
          const next = inputs[index + 1];
          if (next) next.focus();
        }
      })

      input.addEventListener()
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FormValidator('form');
});
