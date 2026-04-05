document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  addTask();
});

let tasks = [];

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
    form.reset();
  });
}

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
