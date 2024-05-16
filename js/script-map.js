let map = L.map('Map').setView([51.21394, 4.420069], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let Marker = L.marker([51.21394, 4.42006]).addTo(map);