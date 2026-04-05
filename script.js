document.addEventListener("DOMContentLoaded", () => {
  initTheme();
});

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
