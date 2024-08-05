const map = L.map('map').setView([51.505, -0.09], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Localização.')
    .openPopup();