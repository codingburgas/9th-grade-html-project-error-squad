function showForm(formId) {
  const forms = document.querySelectorAll('.form-section');
  const tabs = {
    fireForm: document.getElementById('tab-fire'),
    incidentForm: document.getElementById('tab-incident')
  };

  forms.forEach(section => {
    const isTarget = section.id === formId;
    section.style.display = isTarget ? 'block' : 'none';
    section.classList.toggle('active', isTarget);
    section.toggleAttribute('hidden', !isTarget);
  });

  for (const [key, tab] of Object.entries(tabs)) {
    const isActive = key === formId;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive.toString());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    themeToggleBtn.textContent = isDark ? "☀️" : "🌓";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
