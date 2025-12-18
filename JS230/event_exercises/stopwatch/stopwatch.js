class App {
  constructor() {
    this.elapsed = 0;
    this.running = false;
    this.startTime = 0;
    this.intervalId = null;

    this.toggleBtn = this.createToggle();
    this.resetBtn = this.createReset();



  }

  getTime() {
    return {
      hours: Math.floor(this.elapsed / 3600000),
      minutes: Math.floor(this.elapsed / 60000) % 60,
      seconds: Math.floor(this.elapsed / 1000) % 60,
      centiseconds: Math.floor(this.elapsed / 10) % 100
    }
  }

  createToggle() {
    const toggleBtn = document.querySelector('.toggle');

    toggleBtn.addEventListener('click', event => {
      if (this.running) {
        this.stop();
        toggleBtn.textContent = 'Start';
      } else {
        this.start();
        toggleBtn.textContent = 'Stop';
      }
    })

    return toggleBtn;
  }

  start() {
    this.running = true;
    this.startTime = performance.now() - this.elapsed;

    this.intervalId = setInterval(() => {
      this.elapsed = performance.now() - this.startTime;
      this.render();
    }, 10)
  }

  stop() {
    this.running = false;
    clearInterval(this.intervalId);
  }

  render() {
    const time = this.getTime();

    document.querySelector('.hours').textContent =
      String(time.hours).padStart(2, '0');
    document.querySelector('.minutes').textContent =
      String(time.minutes).padStart(2, '0');
    document.querySelector('.seconds').textContent =
      String(time.seconds).padStart(2, '0');
    document.querySelector('.cent-seconds').textContent =
      String(time.centiseconds).padStart(2, '0');
  }

  createReset() {
    const resetBtn = document.querySelector('.reset');

    resetBtn.addEventListener('click', event => {
      this.stop();
      this.elapsed = 0;

      this.render();
    })

    return resetBtn;
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  new App();
})