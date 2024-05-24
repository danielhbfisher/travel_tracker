// /workspaces/travel_tracker/src/CurrentLocationStay.js
import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { UserContext } from './UserContext';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';
import DateRangePickerComponent from './DateRangePickerComponent';
import MapComponent from './MapComponent';

const CurrentLocationStay = () => {
  const [stays, setStays] = useState([]);
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
          setStays(data.stays || []);
        }
      };

      fetchLocationData();
    }
  }, [user]);

  const handleSave = async () => {
    if (stays.some(stay => stay.location.trim() === '' || stay.stayDuration.startDate.trim() === '' || stay.stayDuration.endDate.trim() === '')) {
      setMessage('All fields are required.');
      return;
    }

    if (user) {
      await setDoc(doc(firestore, 'locations', user.uid), {
        stays,
      });
      setMessage('Location and duration saved successfully!');
    }
  };

  const handleAddStay = () => {
    setStays([...stays, { location: '', stayDuration: { startDate: '', endDate: '' } }]);
  };

  const handleStayChange = (index, field, value) => {
    const newStays = [...stays];
    if (field === 'location') {
      newStays[index].location = value;
    } else {
      newStays[index].stayDuration = value;
    }
    setStays(newStays);
  };

  return (
    <div style={styles.container}>
      <h2>Current Location Stay</h2>
      {stays.map((stay, index) => (
        <div key={index} style={styles.stayContainer}>
          <GooglePlacesAutocomplete setLocation={(location) => handleStayChange(index, 'location', location)} />
          <DateRangePickerComponent setStayDuration={(stayDuration) => handleStayChange(index, 'stayDuration', stayDuration)} />
        </div>
      ))}
      <button onClick={handleAddStay} style={styles.addButton}>Add Next Stay</button>
      <button onClick={handleSave} style={styles.button}>Save</button>
      {message && <p>{message}</p>}
      <MapComponent stays={stays} />
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
  stayContainer: {
    marginBottom: '20px',
  },
  addButton: {
    height: '40px',
    width: '150px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
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
