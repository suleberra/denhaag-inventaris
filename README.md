# Den Haag Centrum Public Space Inventory Viewer

## Screenshots

### Main Viewer
![Main Viewer](screenshots/main-page.png)

### Inventory Workflow
![Inventory Workflow](screenshots/drawing_an_object.png)
![Inventory Workflow](screenshots/adding_attributes_to_object.png)

### GeoJSON Export
![Export](screenshots/export_geojson.png)

## Overview

This project is a prototype geo-information product for inventorying and visualizing public-space assets in Den Haag Centrum. It was developed to demonstrate a typical municipal GIS workflow, from data acquisition and preprocessing to web-based visualization and field inventory collection.

The application uses municipal open data as a reference layer and allows users to create new inventory features, add attributes, and export the collected information as GeoJSON for further use in GIS software such as QGIS.

## Motivation

The project was inspired by the type of geo-information products commonly used by municipalities to support asset management and field inventories. In particular, it reflects workflows where public-space objects can be visualized, inventoried, and digitized through interactive map-based tools.

## Data Sources

The application uses open data published by the Municipality of The Hague, including:

* Trees
* Benches
* Bicycle Parking Facilities
* Bicycle Racks
* District Boundary (Centrum)

The datasets were clipped to the Centrum district and processed in QGIS before being exported as GeoJSON for use in the web application.

## Workflow

### Data Preparation

1. Download municipal open datasets.
2. Clip datasets to the Centrum district.
3. Clean and export datasets as GeoJSON.
4. Prepare data for web visualization.

### Web Application

1. Load datasets into a Leaflet-based web map.
2. Display assets as interactive layers.
3. Provide layer controls, statistics, and legends.
4. Allow users to create new inventory features.
5. Attach attributes such as object type, condition, and notes.
6. Export newly collected data as GeoJSON.

## Features

* Interactive web map using Leaflet
* Layer control for municipal datasets
* Public-space asset visualization
* Sidebar with statistics and legend
* Drawing and editing tools
* Attribute collection for new inventory objects
* GeoJSON export functionality
* Compatibility with QGIS workflows

## Technologies

* JavaScript
* HTML
* CSS
* Leaflet
* Leaflet Draw
* QGIS
* GeoJSON
* Git & GitHub

## Current Scope

Municipal datasets are used as reference layers and cannot be modified through the application. Newly created inventory objects are stored separately and can be exported as GeoJSON. This approach reflects a common workflow where official datasets are preserved while field observations are collected independently.

## Future Improvements

* Attribute forms instead of browser prompts
* Search and filtering functionality
* Import previously exported inventory datasets
* Integration with a spatial database such as PostGIS
* Multi-user editing workflows
* Mobile-first field data collection interface
