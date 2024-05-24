// /workspaces/travel_tracker/src/GooglePlacesAutocomplete.js
import React, { useEffect, useRef } from 'react';

const GooglePlacesAutocomplete = ({ setLocation }) => {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ['(cities)'],
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setLocation(place.formatted_address);
      });
    } else {
      console.error('Google Maps JavaScript API not loaded');
    }
  }, []);

  return <input ref={autocompleteRef} type="text" placeholder="e.g., Berlin, Germany" style={styles.input} />;
};

const styles = {
  input: {
    height: '40px',
    width: '300px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginBottom: '12px',
    paddingLeft: '8px',
  },
};

export default GooglePlacesAutocomplete;
