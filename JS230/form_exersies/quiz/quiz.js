class Quiz {
  constructor(questions, answerKey) {
    this.fieldSet = document.querySelector('fieldset');
    this.submitBtn = document.querySelector('.submit');
    this.submitBtn.addEventListener('click', () => this.submitListener(answerKey));

    this.resetBtn = document.querySelector('.reset_form');
    this.resetBtn.addEventListener('click', () => this.resetQuiz());


    this.renderQuestions(questions);
  }

  renderQuestions(questions) {

    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.dataset.id = question.id;

      const p = document.createElement('p');
      p.classList.add('description');
      p.innerHTML = `Q${question.id} ${question.description}`;

      questionDiv.appendChild(p);

      this.createOptions(question.options, questionDiv, question.id);


      this.fieldSet.appendChild(questionDiv);

    });
  }

  createOptions(options, div, id) {
    options.forEach(option => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      input.type = 'radio';
      input.name = `${id}`;
      input.value = option;

      label.appendChild(input);
      label.append(` ${option}`);
      div.appendChild(label);
    })
  }

  submitListener(answerKey) {
    const questionDivs = document.querySelectorAll('.question');
  
    questionDivs.forEach(question => {

      const oldResult = question.querySelector('.result');
      if (oldResult) oldResult.remove();
  
      const id = question.dataset.id;
      const selected = question.querySelector(`input[name="${id}"]:checked`);
  
      const p = document.createElement('p');
      p.classList.add('result');
  
      if (!selected) {
        p.classList.add('wrong');
        p.textContent = `You did'nt answer this question the correct answer is ${answerKey[id]}`
      } else if (selected.value === answerKey[id]) {
        p.classList.add('correct');
        p.textContent = 'Correct Answer';
      } else {
        p.classList.add('wrong');
        p.textContent = `Wrong Answer. The correct answer is ${answerKey[id]}`;
      }
  
      question.appendChild(p);
    });

    this.submitBtn.disabled = true;
    this.submitBtn.classList.add('disabled');
  }

  resetQuiz() {
    const questionDivs = document.querySelectorAll('.question');

    questionDivs.forEach(question => {
      const inputs = question.querySelectorAll('input[type="radio"]');
      inputs.forEach(input => input.checked = false);

      const result = question.querySelector('.result');
      if (result) result.remove();
    })

    this.submitBtn.disabled = false;
    this.submitBtn.classList.remove('disabled');
  }
  
}


const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

document.addEventListener('DOMContentLoaded', () => {
  new Quiz(questions, answerKey);
})