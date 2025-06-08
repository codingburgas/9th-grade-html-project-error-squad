// ====== Theme Toggle ======
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

// Load saved theme
document.body.dataset.theme = localStorage.getItem('theme') || 'light';

// ====== Fire Incident Map ======
const fireIncidents = [
  { lat: 42.7, lng: 23.3, risk: 'high', name: 'Sofia Forest' },
  { lat: 42.1, lng: 24.8, risk: 'medium', name: 'Plovdiv Hills' },
  { lat: 41.9, lng: 25.3, risk: 'low', name: 'Haskovo Area' }
];

const map = L.map('map').setView([42.7, 23.3], 6);

// Tile layer (simple and free)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Risk color mapping
const riskColors = {
  high: 'red',
  medium: 'orange',
  low: 'green'
};

// Display markers
let highCount = 0;
fireIncidents.forEach(fire => {
  if (fire.risk === 'high') highCount++;

  L.circleMarker([fire.lat, fire.lng], {
    radius: 10,
    fillColor: riskColors[fire.risk],
    color: '#000',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }).addTo(map)
    .bindPopup(`<strong>${fire.name}</strong><br>Risk: ${fire.risk}`);
});

// Update sidebar
document.getElementById('activeCount').textContent = fireIncidents.length;
document.getElementById('highCount').textContent = highCount;

// Time now
const now = new Date();
document.getElementById('updatedTime').textContent =
  now.getHours().toString().padStart(2, '0') + ':' +
  now.getMinutes().toString().padStart(2, '0');
