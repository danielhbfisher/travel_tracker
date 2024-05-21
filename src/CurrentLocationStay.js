// /workspaces/travel_tracker/src/CurrentLocationStay.js
import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { UserContext } from './UserContext';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

const CurrentLocationStay = () => {
  const [location, setLocation] = useState('');
  const [stayDuration, setStayDuration] = useState('');
  const [message, setMessage] = useState('');
  const firestore = getFirestore();
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const fetchLocationData = async () => {
        const docRef = doc(firestore, 'locations', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setLocation(data.location);
          setStayDuration(data.stayDuration);
        }
      };

      fetchLocationData();
    }
  }, [user, firestore]);

  const handleSave = async () => {
    if (location.trim() === '' || stayDuration.trim() === '') {
      setMessage('Both fields are required.');
      return;
    }

    if (user) {
      await setDoc(doc(firestore, 'locations', user.uid), {
        location,
        stayDuration,
      });
      setMessage('Location and duration saved successfully!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Current Location Stay</h2>
      <GooglePlacesAutocomplete setLocation={setLocation} />
      <input
        style={styles.input}
        type="text"
        value={stayDuration}
        onChange={(e) => setStayDuration(e.target.value)}
        placeholder="e.g., 5 days, 2 weeks"
      />
      <button onClick={handleSave} style={styles.button}>Save</button>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
  },
  input: {
    height: '40px',
    width: '300px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginBottom: '12px',
    paddingLeft: '8px',
  },
  button: {
    height: '40px',
    width: '100px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CurrentLocationStay;
