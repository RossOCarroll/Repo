class Editor {
  constructor() {
    this.textBox = document.querySelector('.text_box');
    this.buttons = document.querySelector('.buttons');

    this.textBoxListener();
    this.buttonListener();
  }

  textBoxListener() {
    document.addEventListener('selectionchange', event => {
      let text = this.getSelectedText();
    })
  }

  getSelectedText() {
    return window.getSelection().toString();
  }

  buttonListener() {
    this.buttons.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button) return;

      if (button.id === 'createLink') {
        this.createLink();
      } else {
        this.handleCommand(button.id);
      }
    })
  }

  handleCommand(command) {
    if (!this.getSelectedText()) return;
    document.execCommand(command);
  }

  createLink() {
    let url = prompt('Enter a url:');
    if (!url) return;

    document.execCommand('createLink', false, url);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new Editor();
});