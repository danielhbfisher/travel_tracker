// /workspaces/travel_tracker/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthScreen from './AuthScreen';
import AddUserScreen from './AddUserScreen';
import UserListScreen from './UserListScreen';
import CurrentLocationStay from './CurrentLocationStay';
import NextLocationStay from './NextLocationStay';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
          <Route path="/add-user" element={<AddUserScreen />} />
          <Route path="/user-list" element={<UserListScreen />} />
          <Route path="/current-location-stay" element={<CurrentLocationStay />} />
          <Route path="/next-location-stay" element={<NextLocationStay />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
