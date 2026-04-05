document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  addTask();
  loadTasks();
});

let tasks = [];

function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.remove("dark");
    themeToggle.checked = false;
  } else {
    body.classList.add("dark");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

function loadTasks() {
  const listContainer = document.getElementById("task-list-container");

  listContainer.innerHTML = `
    <div class="loading-msg">
      <i class="fa-solid fa-circle-notch"></i>
      <span>Loading tasks...</span>
    </div>
  `;

  setTimeout(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      const html = tasks
        .map(
          (task) => `
        <li class="task-item">
          <div class="task-info">
            <h4>${task.title}</h4>
            <div class="task-meta-group">
              <span class="badge status-badge ${task.completed ? "completed" : "pending"}">
                ${task.completed ? "Completed" : "Pending"}
              </span>
              <span class="badge badge-cat">${task.taskType}</span>
              <span class="badge badge-priority ${task.priority}">${task.priority}</span>
              <span class="badge time-badge">
                <i class="fa-regular fa-clock"></i> ${task.time}h
              </span>
            </div>
          </div>
          <div class="task-actions">
            <button class="btn-action btn-complete" onclick="changeTaskStatus(${task.id})" title="Mark Complete">
              <i class="fa-solid fa-check"></i>
            </button>
            <button class="btn-action btn-delete" onclick="deleteTask(${task.id})" title="Delete Task">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      `,
        )
        .join("");

      listContainer.innerHTML = html;
    } else {
      listContainer.innerHTML = `
        <div class="empty-msg">
          <span>No task has been added</span>
        </div>
      `;
    }
  }, 1000);
}

function addTask() {
  const form = document.getElementById("task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("task-title").value;
    const priority = document.getElementById("task-priority").value;
    const time = parseFloat(document.getElementById("task-time").value);

    let taskType;
    if (time < 2) taskType = "Quick Tasks";
    else taskType = "Long Tasks";

    const newTask = {
      id: Date.now(),
      title,
      priority,
      time,
      completed: false,
      taskType,
    };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    form.reset();
  });
}
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  if (tasks.length === 0) {
    localStorage.removeItem("tasks");
  } else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  loadTasks();
}

function changeTaskStatus(id) {
  const task = tasks.find((t) => t.id === id);

  if (task.completed === true) return;

  if (task) {
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
}
