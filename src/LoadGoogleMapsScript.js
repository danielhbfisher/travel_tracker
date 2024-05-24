// /workspaces/travel_tracker/src/LoadGoogleMapsScript.js
import React, { useEffect } from 'react';

const LoadGoogleMapsScript = ({ apiKey, onLoad }) => {
  useEffect(() => {
    if (window.google && window.google.maps) {
      onLoad();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = onLoad;
    script.onerror = () => {
      console.error('Failed to load Google Maps script');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey, onLoad]);

  return null;
};

export default LoadGoogleMapsScript;
