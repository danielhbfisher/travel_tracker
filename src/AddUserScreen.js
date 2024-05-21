// /workspaces/travel_tracker/src/AddUserScreen.js
import React, { useState } from 'react';
import { firestore } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddUserScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = async () => {
    try {
      const userData = { name, email };
      const docRef = await addDoc(collection(firestore, 'users'), userData);
      setMessage(`User added with ID: ${docRef.id}`);
    } catch (error) {
      setMessage(`Error adding user: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
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
};

export default AddUserScreen;
