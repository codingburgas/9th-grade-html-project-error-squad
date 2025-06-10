(function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  root.style.transition = "background-color 0.5s ease, color 0.5s ease";

  function updateButtonIcon() {
    themeToggleBtn.textContent = root.classList.contains("dark") ? "☀️" : "🌓";
  }

  updateButtonIcon();

  themeToggleBtn.addEventListener("click", () => {
    root.classList.toggle("dark");
    updateButtonIcon();
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  });
});
