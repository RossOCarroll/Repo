const app = {
  events: [],

  init() {
    this.eventForm = document.getElementById('event-form');
    this.eventNameInput = document.getElementById('event-name');
    this.eventDescriptionInput = document.getElementById('event-description');
    this.eventDateInput = document.getElementById('event-date');
    this.formError = document.getElementById('form-error');

    this.status = document.getElementById('status');
    this.eventList = document.getElementById('event-list');
    this.loadEventsBtn = document.getElementById('load-events');
    this.detailName = document.getElementById('detail-name');
    this.detialDate = document.getElementById('detail-date');
    this.detialDescription = document.getElementById('detial-description');
    this.attendeeList = document.getElementById('attendee-List');

    this.bindEvents();
  },

  bindEvents() {
    this.loadEventsBtn.addEventListener('click', this.handleLoadEvents.bind(this));
    this.eventForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    this.eventList.addEventListener('click', this.handleEventClick.bind(this));

  },

  handleLoadEvents(event) {
    console.log(event)
  }


};

document.addEventListener('DOMContentLoaded', () => app.init());
