let map = L.map('Map').setView([37.23405, -115.812240], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let Marker = L.marker([37.23405, -115.812240]).addTo(map);

