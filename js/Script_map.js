let map = L.map('Map').setView([51.221311, 4.399174], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let apMarker = L.marker([51.221311, 4.399174]).addTo(map);