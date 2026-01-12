class ViewBookings {
  constructor() {
    this.displayDates();
    this.datesUl = document.getElementById('bookings');
  }

  async fetchAllDates() {
    let response = fetch('/api/bookings');
    let dates = (await response).json();
    return dates;
  }

  async displayDates() {
    const dates = await this.fetchAllDates();
    
    dates.forEach(date => {
      const li = document.createElement('li');
      li.textContent = date;
      li.style.cursor = 'pointer';

      li.addEventListener('click', (event) => this.handleDate(event))

      this.datesUl.appendChild(li);
    })
  }

  async fetchBookings(date) {
    let response = await fetch(`/api/bookings/${date}`);
    let bookings = await response.json();
    return bookings
  }

  async handleDate(event) {
    event.preventDefault();

    const liClicked = event.target;
    const existingUl = liClicked.querySelector('ul');
    if (existingUl) {
      liClicked.removeChild(existingUl);
      return;
    }


    let date = event.target.textContent;
    let bookings = await this.fetchBookings(date);
    let ul = document.createElement('ul');

    bookings.forEach(booking => {
      let li = document.createElement('li');
      li.textContent = `${booking[0]} | ${booking[1]} | ${booking[2]}`;
      ul.appendChild(li);
    })

    liClicked.appendChild(ul);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ViewBookings()
})




/* <ul class="bookings">
<li>07-03-18
  <ul>
    <li>Booking</li>
  </ul>
</li>
</ul> */