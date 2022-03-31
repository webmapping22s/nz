/* Neuseelandreise Skript */
// einzeiliger Kommentar
var map = L.map('map').setView([-39.13, 175.65], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-39.13, 175.65]).addTo(map)
    .bindPopup('<h3>Tongariro Nationalpark</h3>')
    .openPopup();