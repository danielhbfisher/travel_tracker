// /workspaces/travel_tracker/src/AuthScreen.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('User signed up successfully!');
      navigate('/current-location-stay');
    } catch (error) {
      setMessage(`Error signing up: ${error.message}`);
    }
  };

  const handleSignIn = async () => {
    try {
      if (stayLoggedIn) {
        await setPersistence(auth, browserLocalPersistence);
      }
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('User signed in successfully!');
      navigate('/current-location-stay');
    } catch (error) {
      setMessage(`Error signing in: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <div style={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={stayLoggedIn}
          onChange={(e) => setStayLoggedIn(e.target.checked)}
        />
        <label>Stay Logged In</label>
      </div>
      <button onClick={handleSignUp} style={styles.button}>Sign Up</button>
      <button onClick={handleSignIn} style={styles.button}>Sign In</button>
      {message ? <p>{message}</p> : null}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '16px',
  },
  input: {
    height: '40px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginBottom: '12px',
    paddingLeft: '8px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  button: {
    height: '40px',
    width: '100px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '12px',
  },
};

export default AuthScreen;
