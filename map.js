let map = L.map("map").setView([41.481415, -71.310387], 15);

// Code at lines 4-26 is used to implement custom map marker:
let polygon = L.polygon(
  [
    [41.482115, -71.309687],
    [41.482115, -71.311087],
    [41.481215, -71.311087],
    [41.481215, -71.310637],
    [41.480715, -71.310387],
    [41.481215, -71.310137],
    [41.481215, -71.309687],
  ],
  {
    color: "#151515",
    fillColor: "#151515",
    fillOpacity: 1,
  }
).addTo(map);

let circle = L.circle([41.481665, -71.310387], {
  color: "#d5966c",
  fillColor: "#d5966c",
  fillOpacity: 1,
  radius: 20,
}).addTo(map);

// But instead you can uncomment next line of code and use standard map marker:
// let marker = L.marker([41.481415, -71.310387]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);
