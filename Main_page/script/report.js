// Toggle between Fire and Incident forms with accessibility
function showForm(formName) {
  const fireSection = document.getElementById('Fire');
  const incidentSection = document.getElementById('Incident');

  const fireTab = document.getElementById('tab-fire');
  const incidentTab = document.getElementById('tab-incident');

  if (formName === 'Fire') {
    fireSection.classList.add('active');
    fireSection.removeAttribute('hidden');
    incidentSection.classList.remove('active');
    incidentSection.setAttribute('hidden', '');

    fireTab.classList.add('active');
    fireTab.setAttribute('aria-selected', 'true');
    incidentTab.classList.remove('active');
    incidentTab.setAttribute('aria-selected', 'false');
  } else {
    incidentSection.classList.add('active');
    incidentSection.removeAttribute('hidden');
    fireSection.classList.remove('active');
    fireSection.setAttribute('hidden', '');

    incidentTab.classList.add('active');
    incidentTab.setAttribute('aria-selected', 'true');
    fireTab.classList.remove('active');
    fireTab.setAttribute('aria-selected', 'false');
  }
}

// Theme toggle with yellow theme default
document.addEventListener('DOMContentLoaded', () => {
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

    function showForm(formId) {
      document.querySelectorAll('.form-section').forEach(section => {
        if(section.id === formId) {
          section.style.display = 'block';
          section.classList.add('active');
        } else {
          section.style.display = 'none';
          section.classList.remove('active');
        }
      });
    }