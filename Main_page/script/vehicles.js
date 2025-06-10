document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️"; 
  } else {
    themeToggleBtn.textContent = "🌓"; 
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌓";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
