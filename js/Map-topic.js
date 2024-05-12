let map_topic = L.map('Map_topic').setView([51.221311, 4.399174], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map_topic);


let Marker = L.marker([51.221311, 4.399174]).addTo(map_topic);