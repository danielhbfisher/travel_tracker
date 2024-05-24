// /workspaces/travel_tracker/src/App.js
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import AuthScreen from './AuthScreen';
import AddUserScreen from './AddUserScreen';
import UserListScreen from './UserListScreen';
import CurrentLocationStay from './CurrentLocationStay';
import { UserProvider, UserContext } from './UserContext';

function App() {
  const [stays, setStays] = useState([]);
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
  }, [user, firestore]);

  const handleSaveStays = async (newStays) => {
    if (user) {
      await setDoc(doc(firestore, 'locations', user.uid), {
        stays: newStays,
      });
      setStays(newStays);
    }
  };

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path="/add-user" element={<AddUserScreen />} />
          <Route path="/user-list" element={<UserListScreen />} />
          <Route
            path="/current-location-stay"
            element={<CurrentLocationStay stays={stays} setStays={handleSaveStays} />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
