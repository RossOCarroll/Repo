Hello, Thank you for grading my Todo app!

- Overview 

  - A simple Todo app built with JavaScript and a templating module. Users can add, update, complete, and     delete todos, as well as view them grouped by due dates and completed due dates.

- Set up / run
  - run npm install
  - run npm start
  - Navigate to http://localhost:3000 in browser

- Assumptions and Design

  - I chose to use the provided templates.js and CSS instead of building my own UI from scratch. This felt like a real world challenge for me. This did produce some timing challenges for me which in hindsight might have caused more pain then creating my own HTML and CSS.

  - Because the templater fully replaces the DOM on each render, this influenced the structure of the application. Specifically the renderHtml and bindEvents workflow.
  
  - I went with an OOP approach to better organize my code. Although I felt with more time I could of broken the app down into separate classes for better readability and maintainability.

  - I assumed that the todo data should be refetched from the API on every CRUD operation to keep consistent between the backend and frontend.

  - I made some minor updates to templates.js to make it work smoothly with my main.js logic.