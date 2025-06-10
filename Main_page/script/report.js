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
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;

  themeBtn.addEventListener('click', () => {
    if (body.classList.contains('yellow-theme')) {
      body.classList.remove('yellow-theme');
      body.classList.add('dark-theme');
      themeBtn.textContent = '☀️'; // sun icon
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('yellow-theme');
      themeBtn.textContent = '🌓'; // moon icon
    }
  });
});
