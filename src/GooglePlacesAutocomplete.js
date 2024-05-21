// /workspaces/travel_tracker/src/GooglePlacesAutocomplete.js
import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const GooglePlacesAutocomplete = ({ setLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAFvxf4s9g-wEHdzCRF1pliyUyCEsfBq5M', // Your Google API key
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return <PlacesAutocompleteInput setLocation={setLocation} />;
};

const PlacesAutocompleteInput = ({ setLocation }) => {
  const autocompleteRef = React.useRef(null);

  React.useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ['(cities)'], // Restrict to cities
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setLocation(place.formatted_address);
      });
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
