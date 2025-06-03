let map = L.map('map').setView([42.6977, 23.3219], 13); // Център на София
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

function updateMap() {
    incidents.forEach(incident => {
        const [lat, lon] = incident.gps.split(",");
        L.marker([parseFloat(lat), parseFloat(lon)])
            .addTo(map)
            .bindPopup(`<b>${incident.type}</b><br>Адрес: ${incident.address}<br>Екип: ${teams.find(t => t.id === incident.teamId).name}`);
    });
}