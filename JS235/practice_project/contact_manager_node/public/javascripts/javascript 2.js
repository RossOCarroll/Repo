class App {
  constructor() {
    this.contacts = [];
    this.editingId = null;
    this.addContactBtn = document.getElementById('add-contact-button');
    this.addContactBtnMainDiv = document.getElementById('add-contact-button-main')
    this.searchInput = document.getElementById('search-input');
    this.createContactForm = document.getElementById('create-contact-form');
    this.cancelBtn = document.getElementById('cancel-button');
    this.formDiv = document.getElementById('form-div');
    this.contactsList = document.getElementById('contact-list');
    this.placeHolder = document.getElementById('placeholder');
    this.editFormDiv = document.getElementById('edit-form-div');
    this.editForm = document.getElementById('edit-contact-form');
    this.cancelEditBtn = document.getElementById('cancel-edit');
    this.submitEditBtn = document.getElementById('edit-submit');
    this.emptySearch = document.getElementById('empty-search');
    this.tagFilter = document.getElementById('tag-filter');

    this.addContactBtn.addEventListener('click', (event) => this.handleAddContact(event));
    this.addContactBtnMainDiv.addEventListener('click', (event) => this.handleAddContact(event));
    this.createContactForm.addEventListener('submit', (event) => this.handleFormSubmit(event));
    this.editForm.addEventListener('submit', (event) => this.handleEditFormSubmit(event));
    this.cancelBtn.addEventListener('click', () => this.handleCancel());
    this.cancelEditBtn.addEventListener('click', () => this.handleEditCancel());
    this.contactsList.addEventListener('click', (event) => this.handleDelete(event));
    this.contactsList.addEventListener('click', (event) => this.handleEdit(event));
    this.searchInput.addEventListener('input', (event) => this.handleSearchInput(event));
    this.tagFilter.addEventListener('change', (event) => this.handleFilter(event));
    this.init()
  }

  async init() {
    this.emptySearch.hidden = true;
    await this.getContacts();

    if (this.contacts.length > 0) {
      this.placeHolder.hidden = true;
      this.loadContacts();
    }
  }

  async fetchContacts() {
    try {
      let response = await fetch('http://localhost:3000/api/contacts');
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      return await response.json();

    } catch(error) {
      console.error(error);
    }
  }

  async getContacts() {
    this.contacts = await this.fetchContacts();
  }

  handleAddContact(event) {
    this.clearFieldErrors();
    this.formDiv.hidden = this.formDiv.hidden ? false : true;
  }

  handleCancel() {
    this.clearFieldErrors();
    this.formDiv.hidden = true;
    return;
  }

  handleEditCancel() {
    this.clearFieldErrors();
    this.editFormDiv.hidden = true;
    return;
  }

  validateContact({name, email, phone}, formDiv) {
    let valid = true;

    if (name === '') {
      this.formError('name', formDiv);
      valid = false;
    }

    if (email === '') {
      this.formError('email', formDiv);
      valid = false;
    }

    if (phone === '') {
      this.formError('phone', formDiv);
      valid = false;
    }

    return valid;
  }

  getFormData(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    return {
      name: data.name,
      email: data.email,
      phone: data.phone,
      tags: formData.getAll('tags').join(',')
    };
  }

  async refreshContacts() {
    await this.getContacts();
    this.loadContacts();
  }

  formError(field, formDiv) {
    const fieldDiv = formDiv.querySelector(`#${field}`);
    if (!fieldDiv) return; 
    fieldDiv.querySelectorAll('.error-message').forEach(e => e.remove());
  
    const span = document.createElement('span');
    span.className = 'error-message';
    span.textContent = `Please enter a valid ${field} field`;
    fieldDiv.appendChild(span);
  }

  clearFieldErrors() {
    this.formDiv.querySelectorAll('.error-message').forEach(e => e.remove());
  }

  clearEditFieldErrors() {
    this.editFormDiv.querySelectorAll('.error-message').forEach(e => e.remove());
  }

  async addContact(contactInfo) {
    try {
      let response = await fetch('http://localhost:3000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactInfo)
      });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      return await response.json();

    } catch(error) {
      console.log(error)
    }
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    this.clearFieldErrors();

    const { name, email, phone, tags } = this.getFormData(this.createContactForm);

    if (!this.validateContact({name, email, phone}, this.formDiv)) return;

    this.clearFieldErrors();

    const contactData = await this.addContact(
      {
        full_name: name, 
        email: email, 
        phone_number: phone, 
        tags: tags}
      );
    this.contacts.push(contactData);

    this.createContactForm.reset();
    this.formDiv.hidden = true;
    await this.refreshContacts();
  }

  loadContacts(list = this.contacts) {
    this.contactsList.innerHTML = '';

    list.forEach(contact => {
      const li = document.createElement('li');
      li.className = 'media col-md-3 col-sm-4 col-xs-6';
      li.dataset.id = contact.id;
  
      li.innerHTML = `
        <div class="media-heading">
          <h3>${contact.full_name}</h3>
        </div>
  
        <div class="media-body">
          <dl>
            <dt>Phone Number:</dt>
            <dd>${contact.phone_number || 'N/A'}</dd>
            <dt>Email:</dt>
            <dd>${contact.email}</dd>
            <dt>Tags</dt>
            <dd>${contact.tags || ''}</dd>
          </dl>
        </div>
  
        <div class="contact-btn-wrapper">
          <button class="edit-contact btn btn-outline" data-id="${contact.id}">
            <span class="glyphicon glyphicon-pencil"></span> Edit
          </button>
          <button class="delete-contact btn btn-outline" data-id="${contact.id}">
            <span class="glyphicon glyphicon-trash"></span> Delete
          </button>
        </div>
  
        <hr>
      `;
      this.contactsList.appendChild(li);
    })
  }

  async deleteContact(id) {
    try {
      let response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    } catch(error) {
      console.error(error);
    }
  }

  async handleDelete(event) {
    const deleteBtn = event.target.closest('.delete-contact');
    if (!deleteBtn) return;
  
    const id = Number(deleteBtn.dataset.id);
    this.contacts = this.contacts.filter(c => c.id !== id)
    await this.deleteContact(id);
    await this.refreshContacts();
  }

  async findContact(id) {
    try {
      let response = await fetch(`http://localhost:3000/api/contacts/${id}`);

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      return await response.json();
    } catch(error) {
      console.error(error)
    }
  }

  async handleEdit(event) {
    this.clearEditFieldErrors();
    const editBtn = event.target.closest('.edit-contact');
    if (!editBtn) return;

    const id = Number(editBtn.dataset.id);
    const contact = await this.findContact(id);
    if (!contact) return;
    
    this.editingId = id;
    this.editFormDiv.hidden = false;
    this.editForm.name.value = contact.full_name;
    this.editForm.email.value = contact.email;
    this.editForm.phone.value = contact.phone_number;

    const tags = (contact.tags || '')
    .split(',')
    .map(tag => tag.trim());

    const tagInputs = this.editForm.querySelectorAll('input[name="tags"]');

    tagInputs.forEach(input => {
      input.checked = false;
    });
    tagInputs.forEach(input => {
      input.checked = tags.includes(input.value);
    });
  }

  async updateContact(id, contactInfo) {
    try {
      let response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactInfo)
        }
      );

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return await response.json();
    } catch(error) {
      console.error(error);
    }
  }

  async handleEditFormSubmit(event) {
    event.preventDefault();
    this.clearEditFieldErrors();

    const { name, email, phone, tags } = this.getFormData(this.editForm);

    if (!this.validateContact({name, email, phone}, this.editFormDiv)) return;

    this.clearEditFieldErrors();
    const updatedContact = await this.updateContact(this.editingId, {
      id: Number(this.editingId),
      full_name: name,
      email: email,
      phone_number: phone,
      tags: tags
    })

    this.editForm.reset();
    this.editFormDiv.hidden = true;

    await this.refreshContacts();
  }

  handleSearchInput(event) {
    let query = event.target.value.toLowerCase();

    this.emptySearch.hidden = true;
    
    if (query === '') {
      this.loadContacts(); 
      return;
    } 

    let filtered = this.contacts.filter(contact => contact.full_name.toLowerCase().includes(query));
    this.loadContacts(filtered);

    if (filtered.length <= 0) {
      this.emptySearch.hidden = false;
      let strong = this.emptySearch.querySelector('strong');
      strong.textContent = query;
    }
  }

  handleFilter(event) {
    let query = event.target.value.toLowerCase();

    if (!query) {
      this.loadContacts();
      return;
    }

    const filtered = this.contacts.filter(contact => {
      const tagsArray = (contact.tags || '')
        .split(',')
        .map(tag => tag.trim().toLowerCase());
  
      return tagsArray.includes(query);
    });
    this.loadContacts(filtered);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App()
})

