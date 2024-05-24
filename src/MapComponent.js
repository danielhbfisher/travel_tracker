// /workspaces/travel_tracker/src/MapComponent.js
import React, { useEffect, useRef } from 'react';
import LoadGoogleMapsScript from './LoadGoogleMapsScript';

const MapComponent = ({ stays }) => {
  const mapRef = useRef(null);

  const initializeMap = () => {
    if (!window.google) {
      console.error('Google Maps JavaScript API not loaded');
      return;
    }

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    const addMarker = (location, color, opacity) => {
      if (location) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK') {
            new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: color,
                fillOpacity: opacity,
                strokeWeight: 1,
              },
            });
          } else {
            console.error('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    };

    stays.forEach((stay, index) => {
      const opacity = index === 0 ? 1 : 0.5;
      const color = index === 0 ? 'red' : 'blue';
      addMarker(stay.location, color, opacity);
    });
  };

  useEffect(() => {
    if (window.google && window.google.maps) {
      initializeMap();
    }
  }, [stays]);

  return (
    <div>
      <LoadGoogleMapsScript apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} onLoad={initializeMap} />
      <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;
