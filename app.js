const map = L.map('map').setView([52.08, 4.30], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const districtLayer = L.layerGroup().addTo(map);
const treesLayer = L.layerGroup().addTo(map);
const benchesLayer = L.layerGroup().addTo(map);
const bikeParkingLayer = L.layerGroup().addTo(map);

const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});

map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
    // test
    console.log("Feature created!");
    const layer = event.layer;

    if (event.layerType === "marker") {
        layer.bindPopup("New inventory object");
    } else {
        layer.setStyle({
            color: "red",
            weight: 3,
            fillOpacity: 0.3
        });
    }

    drawnItems.addLayer(layer);
});


let bikeTotal = 0;

fetch('data/processed/wijkgrens_processed.geojson')
    .then(response => response.json())
    .then(data => {
        const districtGeoJSON = L.geoJSON(data, {

            style: {
                color: 'black',
                weight: 2,
                fillOpacity: 0
            },

            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>District border</strong><br>
                    ${feature.properties.name}
                `);
            }

        }).addTo(districtLayer);

        map.fitBounds(districtGeoJSON.getBounds());
    });
    
fetch('data/processed/bomen_processed.geojson')
    .then(response => response.json())
    .then(data => {

        document.getElementById("tree-count").textContent =
            data.features.length;

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
        }).addTo(treesLayer);
    });

fetch('data/processed/banken_processed.geojson')
    .then(response => response.json())
    .then(data => {

        document.getElementById("bench-count").textContent =
            data.features.length;

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
        }).addTo(benchesLayer);
    });

fetch('data/processed/fietsenrekken_processed.geojson')
    .then(response => response.json())
    .then(data => {

        bikeTotal += data.features.length;
        document.getElementById("bike-count").textContent = bikeTotal;

        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "navyblue",
                    color: "navy",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Bike rack</strong> ${feature.properties.imgeo_lokaalid}<br>
                    `);
            }
        }).addTo(bikeParkingLayer);
    });


fetch('data/processed/fietsenstallingen_processed.geojson')
    .then(response => response.json())
    .then(data => {

        bikeTotal += data.features.length;
        document.getElementById("bike-count").textContent = bikeTotal;

        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "navyblue",
                    color: "navy",
                    weight: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`
                    <strong>Bike parking facility</strong> ${feature.properties.imgeo_lokaalid}<br>
                    `);
            }
        }).addTo(bikeParkingLayer);
    });

const overlays = {
    "Trees": treesLayer,
    "Benches": benchesLayer,
    "Bike parking": bikeParkingLayer,
    "District Boundary": districtLayer
};

L.control.layers(null, overlays).addTo(map);