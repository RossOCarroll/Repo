const templater = {
  mainTemplate(todosData) {
    return `
      <input type="checkbox" id="sidebar_toggle" />
        <div id="sidebar">
          <section id="all">
            <div id="all_todos">
              ${this.allTodosTemplate(
                todosData.todos,
                todosData.active_date_all,
                todosData.selected === todosData.todos && !todosData.active_date_all
              )}
            </div>
            <article id="all_lists">
              ${this.allListTemplate(
                todosData.todos_by_date,
                todosData.active_date_all
              )}
            </article>
          </section>
          <section class="completed" id="completed_items">
            <div id="completed_todos">
              ${this.completedTodosTemplate(
                todosData.done,
                todosData.active_date_completed,
                todosData.selected === todosData.todos && !todosData.active_date_all
              )}
            </div>
            <article id="completed_lists">
              ${this.completedListTemplate(
                todosData.done_todos_by_date,
                todosData.active_date_completed
              )}
            </article>
          </section>
        </div>
      <div id="items">
        <header>
          ${this.titleTemplate(todosData.current_section)}
        </header>
        <main>
          <label id='new-todo' for="new_item">
            <img src="images/plus.png" alt="Add Todo Item" />
            <h2>Add new to do</h2>
          </label>
          <table id='todo-table' cellspacing="0">
            <tbody>
              ${this.listTemplate(todosData.selected)}
            </tbody>
          </table>
          <div class="modal" id="modal_layer"></div>
          <div class="modal" id="modal_div">
            <form id='modal_form' action="" method="post">
              <fieldset>
                <ul>
                  <li>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Item 1" />
                  </li>
                  <li>
                    <label for="due">Due Date</label>
                    <div class="date">
                      <select id="due_day" name="due_day">
                        <option>Day</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>  /
                      <select id="due_month" name="due_month">
                        <option>Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>  /
                      <select id="due_year" name="due_year" placeholder="year">
                        <option>Year</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <label for="description">Description</label>
                    <textarea id='description' cols="50" name="description" rows="7" placeholder="Description"></textarea>
                  </li>
                  <li>
                    <input id='save' type="submit" value="Save" />
                    <button id='completed' type="button">Mark As Complete</button>
                  </li>
                </ul>
              </fieldset>
            </form>
          </div>
      </main>
    </div>
    `;
  },

  listTemplate(selected) {
    let sortedTodos = [...selected].sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
    })

    let sections = sortedTodos.map(item => {
      return `
        <tr data-id="${item.id}">
          <td class="list_item">
            <input type="checkbox" class="todo-checkbox" name="item_${item.id}" id="item_${item.id}" ${item.completed ? 'checked' : ''} />
            <span class="check"></span>
            <span class="todo-text">${item.title} - ${item.due_date}</span>
          </td>
          <td class="delete"><img src="images/trash.png" alt="Delete"/></td>
        </tr>
      `;
    });

    return sections.join('');
  },

  allTodosTemplate(todos, activeDateAll, isAllSectionSelected) {
    return `
      <header data-title="All Todos" data-total="${todos.length}" id="all_header" class="${isAllSectionSelected ? 'active' : ''}">
        <dl>
          <dt>All Todos</dt><!--
       --><dd>${todos.length}</dd>
        </dl>
      </header>
    `;
  },
  
  completedTodosTemplate(done, activeDateCompleted, isCompletedSectionSelected) {
    return `
      <header data-title="Completed" data-total="${done.length}" id="all_done_header" class="${isCompletedSectionSelected ? 'active' : ''}">
        <dl>
          <dt>Completed</dt><!--
       --><dd>${done.length}</dd>
        </dl>
      </header>
    `;
  },

  allListTemplate(todosByDate, activeDateAll) {
    return Object.entries(todosByDate).map(([date, todosArr]) => `
      <dl data-title="${date}" data-total="${todosArr.length}" class="${date === activeDateAll ? 'active' : ''}">
        <dt><time>${date}</time></dt>
        <dd>${todosArr.length}</dd>
      </dl>
    `).join('');
  },

  completedListTemplate(doneTodosByDate, activeDateCompleted) {
    return Object.entries(doneTodosByDate).map(([date, todosArr]) => `
      <dl data-title="${date}" data-total="${todosArr.length}" class="${date === activeDateCompleted ? 'active' : ''}">
        <dt><time>${date}</time></dt>
        <dd>${todosArr.length}</dd>
      </dl>
    `).join('');
  },

  titleTemplate(currentSection) {
    return `
      <label for="sidebar_toggle">
        <img src="images/hamburger.png" alt="Toggle Sidebar" />
      </label>
      <dl>
        <dt><time>${currentSection.title}</time></dt><!--
     --><dd>${currentSection.data}</dd>
      </dl>
    `;
  },
}

export default templater;