import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import PopUp from './PopUp';

import * as turfCircle from '@turf/circle';

mapboxgl.accessToken = "pk.eyJ1Ijoib3R5a29yIiwiYSI6ImNrbXl5b2VyajA2emEycXQzMjNtYWV4d2QifQ.LqPvg8nU1Nh3IGb_Mzw_oA";

const Map = (props) => {

    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    const [zoom, setZoom] = useState(7);

    /* ################################################################

                            CREATE DATA

    ################################################################ */  

    let features = []

    const wideness = 4;

    for(let i = 0; i<10000; i++){
        
        let lng = (Math.random() * wideness) + 2.3451720005621364 - wideness/2;
        let lat = (Math.random() * wideness) + 48.86602542181713 - wideness/2;

        features.push(
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [lng, lat],
            },
            properties: {
            name: 'Point'
            },
        }
        )
    }

    /* ################################################################

                            FILTER DATA

    ################################################################ */  

    // distance in kilometers between two points (longitude, latitude)
    const distanceBetween = (a, b) => (
        Math.acos(Math.sin(Math.PI*[a[1]]/180)*Math.sin(Math.PI*[b[1]]/180.0)+Math.cos(Math.PI*[a[1]]/180.0)*Math.cos(Math.PI*[b[1]]/180.0)*Math.cos(Math.PI*[a[0]]/180.0-Math.PI*[b[0]]/180.0))*6378
    )

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        // See style options here: https://docs.mapbox.com/api/maps/#styles
        style: 'mapbox://styles/otykor/ckmyzj68x2axe17lqvk21r932',
        center: props.center,
        zoom: zoom,
        });

        map.on('load', async () => {

        /* ################################################################

                            SOURCES

        ################################################################ */  

        var radiusSmall = 40;
        var radiusBig = 100;
        var options = {steps: 128, units: 'kilometers', properties: {}};
        var circleLocationSmall = turfCircle.default(props.center, radiusSmall, options);
        var circleLocationBig = turfCircle.default(props.center, radiusBig, options);

        // circle of radius {radiusSmall}
        map.addSource("locationCircleSmall", {
            type: "geojson",
            data: circleLocationSmall,
        });
        
        // circle of radius {radiusBig}
        map.addSource("locationCircleBig", {
            type: "geojson",
            data: circleLocationBig,
        });

        const data = {
            type: 'FeatureCollection',
            features: features.filter(feature => distanceBetween(feature.geometry.coordinates, props.center)<props.visibility),
        }
        
        // car data
        map.addSource('car-data', {
            type: 'geojson',
            // data earthquakes: 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson',
            data: data,
            cluster: true,
            clusterMaxZoom: 14, // Max zoom to cluster points on
            clusterRadius: 50 
        });

        /* ################################################################

                            LAYERS

        ################################################################ */ 

        // layer for the circle of radius {radiusSmall}
        map.addLayer({
            id: "location-circle-small-layer",
            type: "fill",
            source: "locationCircleSmall",
            paint: {
            "fill-color": "#2975FE",
            "fill-opacity": 0.1,
            },
        });
        
        // layer for the circle of radius {radiusBig}
        map.addLayer({
            id: "location-circle-big-layer",
            type: "fill",
            source: "locationCircleBig",
            paint: {
            "fill-color": "#636E95",
            "fill-opacity": 0.1,
            },
        });

        // layer for the car data circles
        map.addLayer({
            id: 'car-data-layer',
            source: 'car-data',
            type: 'circle',
            'paint': {
            'circle-color': '#2975FE',
            'circle-stroke-width': 5,
            'circle-stroke-color': '#89adf6',
            "circle-opacity": 0.75,
            "circle-stroke-opacity": 0.5,
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                50,
                45,
                750,
                70
            ]
            }
        });

        // layer for the car data numbers on clusters
        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'car-data',
            filter: ['has', 'point_count'],
            layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['Poppins SemiBold', 'Poppins Medium'],
            'text-size': 16
            },
            paint: {
            "text-color": "#ffffff"
            }
        });

        // layer for the car data not on clusters
        map.addLayer({
            id: 'solo-cars',
            type: 'circle',
            source: 'car-data',
            filter: ['!', ['has', 'point_count']],
            paint: {
            'circle-color': 'red',
            'circle-radius': 10,
            'circle-opacity': 0
            }
        })
        });

        map.on('moveend', async () => {
            setZoom(map.getZoom())
        });

        map.on('mouseenter', 'solo-cars', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'solo-cars', function () {
            map.getCanvas().style.cursor = '';  
        });

        map.on('click', 'solo-cars', e => {
            if (e.features.length) {
                const feature = e.features[0];
                // create popup node
                const popupNode = document.createElement('div');
                ReactDOM.render(<PopUp feature={feature} />, popupNode);
                // set popup on map
                popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
            }
        });

        // clean up on unmount
        return () => map.remove();
    }, [props.visibility, props.center]);

    return <div className={"w-full h-full relative inset-0"} ref={mapContainerRef} />
}

Map.propTypes = {
    visibility: PropTypes.number,
    center: PropTypes.arrayOf(PropTypes.number).isRequired
};

Map.defaultProps = {
    visibility: 40,
};

export default Map;
