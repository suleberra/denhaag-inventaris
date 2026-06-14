const map = L.map('map').setView([52.08, 4.30], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('data/processed/bomen_processed.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "green",
                    color: "darkgreen",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Tree</strong> ${feature.properties.id}<br>
                    `);
            }
        }).addTo(map);
    });

fetch('data/processed/banken_processed.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "orange",
                    color: "brown",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Bench</strong> ${feature.properties.imgeo_lokaalid}<br>
                    `);
            }
        }).addTo(map);
    });

fetch('data/processed/fietsenrekken_processed.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "blue",
                    color: "darkblue",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Bike rack</strong> ${feature.properties.imgeo_lokaalid}<br>
                    `);
            }
        }).addTo(map);
    });


fetch('data/processed/fietsenstallingen_processed.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "lightblue",
                    color: "darkblue",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Bike shed</strong> ${feature.properties.imgeo_lokaalid}<br>
                    `);
            }
        }).addTo(map);
    });

    
// fetch('data/processed/wijkgrens_processed.geojson')
//     .then(response => response.json())
//     .then(data => {
//         L.geoJSON(data, {
//             pointToLayer: function(feature, latlng) {
//                 return L.circleMarker(latlng, {
//                     radius: 6,
//                     fillColor: "orange",
//                     color: "brown",
//                     weight: 1,
//                     fillOpacity: 0.8
//                 });
//             },
//             onEachFeature: function (feature, layer) {
//                 layer.bindPopup(`
//                     <strong>District border</strong> ${feature.properties.name}<br>
//                     `);
//             }
//         }).addTo(map);
//     });