class CancelBookingScheduling {
  constructor() {
    this.bookingForm = document.getElementById('cancelBooking');
    this.scheduleForm = document.getElementById('cancelSchedule');

    this.bookingForm.addEventListener('submit', (event) => this.bookingCancellation(event));
    this.scheduleForm.addEventListener('submit', (event) => this.scheduleCancellation(event));
  }

  async makeBookingCancellation(bookingId) {
    const response = await fetch(`/api/bookings/${encodeURIComponent(bookingId)}`, {
      method: 'PUT'
    })

    if (response.ok) {
      alert('The booking has been cancelled.');
      this.bookingForm.reset();
    } else {
      const text = await response.text();
      alert(text);
    }
  }

  bookingCancellation(event) {
    event.preventDefault();

    const bookingId = this.bookingForm.querySelector('#booking_id').value;
    this.makeBookingCancellation(Number(bookingId));
    
  }

  async makeSchedulingCancellation(scheduleId) {
    const response = await fetch(`/api/schedules/${encodeURIComponent(scheduleId)}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      alert('The Schedule has been cancelled.');
      this.scheduleForm.reset();
    } else {
      const text = await response.text();
      alert(text);
    }
  }


  scheduleCancellation(event) {
    event.preventDefault();

    const scheduleID = this.scheduleForm.querySelector('#schedule_id').value;
    this.makeSchedulingCancellation(Number(scheduleID));
    
  }

}
document.addEventListener('DOMContentLoaded', () => {
  new CancelBookingScheduling();
})