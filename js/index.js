var coords = [25.03,121.52]

var map = L.map('map').setView(coords, 12);

L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var negativeCircle = L.circle([25.024943, 121.543451], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var positiveCircle = L.circle([25.041, 121.571116], {
    color: 'lime',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

positiveCircle.bindPopup("Urban growth improved the economy in Taipei");