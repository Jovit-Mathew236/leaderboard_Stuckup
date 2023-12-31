import './App.css'
import firebase from './firebase/config';
import { useEffect, useState } from 'react';

function App() {
  const [collageCounts, setCollageCounts] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('teams').get().then((snapshot) => {
      const collageCountsMap = snapshot.docs.reduce((map, doc) => {
        const data = doc.data();
        const collageName = data?.lead?.collage?.name || 'Unknown';
        map[collageName] = (map[collageName] || 0) + 1;
        return map;
      }, {});
      const collageCountsArray = Object.entries(collageCountsMap)
        .map(([collageName, count]) => ({ collageName, count }))
        .sort((a, b) => b.count - a.count);
      setCollageCounts(collageCountsArray);
    }).catch(error => {
      console.error('Error getting documents:', error);
    });
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Campus</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {collageCounts.map(({ collageName, count }) => (
            <tr key={collageName}>
              <td>{collageName}</td>
              <td className='count'><span>{count}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
