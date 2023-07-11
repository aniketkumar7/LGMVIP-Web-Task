const form = document.querySelector("form");
const input = document.querySelector("form input");
const tasksContainer = document.querySelector(".tasks");

let todos = [];

form.addEventListener("submit", (e) => {
 /* `e.preventDefault();` is a method in JavaScript that prevents the default behavior of an event. In
 this case, it is preventing the default behavior of the form submission event. By calling
 `e.preventDefault();`, the form will not be submitted and the page will not be refreshed. This
 allows us to handle the form submission event manually and perform custom actions, such as adding a
 new todo item to a list, without navigating away from the current page. */
  e.preventDefault();

  /* The code is creating a new object called `todo` with three properties: `text`, `checked`, and
  `id`. */
  const todo = {
    text: input.value,
    checked: false,
    id: new Date().getTime(),
  };

  todos.push(todo);
  // Reset the form
  e.target.reset();

  displayTodos();
});

const displayTodos = () => {
  
  /* `tasksContainer.innerHTML = "";` is clearing the content of the `tasksContainer` element. By
  setting the `innerHTML` property to an empty string, all the existing HTML content inside the
  `tasksContainer` element will be removed. This is done before displaying the updated list of todos
  to ensure that the container is empty and ready to display the new todos. */

  tasksContainer.innerHTML = "";

  todos.forEach((todo) => {
    /* These lines of code are creating new HTML elements using JavaScript. */
    const taskEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const textEl = document.createElement("p");
    const delButton = document.createElement("button");

    /* The code `taskEl.classList.add("task"); inputEl.classList.add("checkbox");
    delButton.classList.add("delete"); textEl.classList.add("text");` is adding CSS classes to the
    respective elements. */
    taskEl.classList.add("task");
    inputEl.classList.add("checkbox");
    delButton.classList.add("delete");
    textEl.classList.add("text");

    inputEl.type = "checkbox";
    textEl.innerHTML = todo.text;
    delButton.innerHTML = "Delete";

    delButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      displayTodos();
    });

    /* The code `inputEl.addEventListener("change", (e) => { ... })` is adding an event listener to the
    `inputEl` element. This event listener listens for the "change" event, which is triggered when
    the user interacts with the checkbox input element. */
    inputEl.addEventListener("change", (e) => {
      todo.checked = e.target.checked;
      console.log(e.target);

      if (todo.checked) {
        taskEl.classList.add("done");
      } else {
        taskEl.classList.remove("done");
      }
    });

    /* The code `taskEl.appendChild(inputEl); taskEl.appendChild(textEl);
    taskEl.appendChild(delButton); tasksContainer.appendChild(taskEl);` is adding the input element,
    text element, and delete button element as child elements to the task element, and then adding
    the task element as a child element to the tasksContainer element. */
    taskEl.appendChild(inputEl);
    taskEl.appendChild(textEl);
    taskEl.appendChild(delButton);
    tasksContainer.appendChild(taskEl);
  });
};