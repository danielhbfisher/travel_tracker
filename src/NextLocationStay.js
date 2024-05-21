// /workspaces/travel_tracker/src/NextLocationStay.js
import React, { useContext } from 'react';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { UserContext } from './UserContext';

const NextLocationStay = () => {
  const [nextLocation, setNextLocation] = useState('');
  const [nextStayDuration, setNextStayDuration] = useState('');
  const firestore = getFirestore();
  const user = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const fetchNextLocationData = async () => {
        const docRef = doc(firestore, 'nextLocations', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setNextLocation(data.nextLocation);
          setNextStayDuration(data.nextStayDuration);
        }
      };

      fetchNextLocationData();
    }
  }, [user, firestore]);

  const handleSave = async () => {
    if (user) {
      await setDoc(doc(firestore, 'nextLocations', user.uid), {
        nextLocation,
        nextStayDuration,
      });
    }
  };

  return (
    <div>
      <h2>Next Location Stay</h2>
      <input
        type="text"
        value={nextLocation}
        onChange={(e) => setNextLocation(e.target.value)}
        placeholder="Next Location"
      />
      <input
        type="text"
        value={nextStayDuration}
        onChange={(e) => setNextStayDuration(e.target.value)}
        placeholder="Next Stay Duration"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NextLocationStay;
