/* Neuseelandreise Skript */
// einzeiliger Kommentar
let lat = -39.13;
let lng = 175.65;
let zoom = 11;

let coords = [-39.13, 175.65];
console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

console.log("text");
console.log('text');
console.log('id="map"');
console.log(`latitude = ${lat}`);
console.log(ETAPPEN);

let popup = `
    <h3>Tongariro Nationalpark</h3>
    <ul>
        <li>geogr. Länge: ${lng}</li>
        <li>geogr. Breite: ${lat}</li>
    </ul>
`;

let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();

    