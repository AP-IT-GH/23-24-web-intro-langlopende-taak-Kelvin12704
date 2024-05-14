let map_topic = L.map('Map_topic').setView([51.20702, 4.41738], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map_topic);


let Marker = L.marker([51.20702, 4.41738]).addTo(map_topic);