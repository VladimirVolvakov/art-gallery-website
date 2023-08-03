let map = L.map('map').setView([41.481415, -71.310387], 15);
let marker = L.marker([41.481415, -71.310387]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);