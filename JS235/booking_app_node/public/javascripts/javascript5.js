class Booking {
  constructor() {
    this.selectSchedule = document.getElementById('schedules');
    this.scheduleForm = document.getElementById('schedule_form');
    this.scheduleForm.addEventListener('submit', (event) => this.handleScheduleSubmit(event));

    this.signUpForm = document.getElementById('new_student');
    this.signUpForm.addEventListener('submit', (event) => this.handleNewStudentSubmit(event));

    this.init();
  }

  async init() {
    await this.fetchStaff();
    await this.fetchSchedules();
    await this.fetchStudents();
  }

  async fetchStudents() {
    let response = await fetch('/api/students');
    this.students = await response.json();
  }

  async fetchStaff() {
    let response = await fetch('/api/staff_members');
    this.staffMembers = await response.json();
  }

  async fetchSchedules() {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 6000); // 6s timeout
    });

    try {
      const fetchRequest = fetch('/api/schedules').then(res => res.json());
      let schedules = await Promise.race([fetchRequest, timeout]);

      for (let schedule of schedules) {
        if (!schedule.student_email) {  // only available slots
          let option = document.createElement('option');
          option.value = schedule.id;

          let staff = this.staffMembers.find(s => s.id === schedule.staff_id);
          option.textContent = `${staff.name} | ${schedule.date} | ${schedule.time}`;

          this.selectSchedule.appendChild(option);
        }
      }
    } catch (err) {
      alert('Schedules timed out or failed to load.');
      console.error(err);
    }
  }

  newStudentSignUp(email, bookingSequence) {
    this.signUpForm.style.display = 'block';

    let emailInput = this.signUpForm.querySelector('#new_email');
    let bookingSequenceInput = this.signUpForm.querySelector('#booking_sequence');

    emailInput.value = email;
    bookingSequenceInput.value = bookingSequence;
  }

  async bookSchedule(email, id) {
    let response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, student_email: email })
    });

    if (response.ok) {
      alert('Booking successful!');
      this.scheduleForm.reset();
    } else {
      let errorText = await response.text();
      let bookingSequenceMatch = errorText.match(/booking_sequence:\s*(\d+)/);
      let bookingSequence = bookingSequenceMatch ? bookingSequenceMatch[1] : null;
      alert(`Booking failed: ${errorText}`);

      if (bookingSequence) {
        this.pendingScheduleId = id;
        this.newStudentSignUp(email, bookingSequence);
      }
    }
  }

  async handleScheduleSubmit(event) {
    event.preventDefault();
    let email = document.getElementById('email').value.trim();
    let scheduleId = this.selectSchedule.value;

    this.pendingScheduleId = scheduleId;

    await this.bookSchedule(email, scheduleId);
  }

  async addNewStudent(email, bookingSequence, name) {
    let response = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, booking_sequence: Number(bookingSequence) })
    });

    let text = await response.text();

    if (response.ok) {
      alert(text);
      // book after registering new student
      await this.bookSchedule(email, this.pendingScheduleId);
      this.signUpForm.reset();
      this.signUpForm.style.display = 'none';
    } else {
      alert(text);
    }
  }

  async handleNewStudentSubmit(event) {
    event.preventDefault();

    let emailInput = this.signUpForm.querySelector('#new_email').value;
    let bookingSequenceInput = this.signUpForm.querySelector('#booking_sequence').value;
    let nameInput = this.signUpForm.querySelector('#name').value;

    await this.addNewStudent(emailInput, bookingSequenceInput, nameInput);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Booking();
});
