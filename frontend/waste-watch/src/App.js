import React, { useState } from 'react';

function App() {
  const [address, setAddress] = useState('');
  const [trashDay, setTrashDay] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrashDay(null);
    setError(null);

    try {
      //call backend with user input
      const res = await fetch(`http://localhost:5000/api/fetchTrashDay?address=${encodeURIComponent(address)}`);
      if (!res.ok) throw new Error('Failed to fetch'); //on error 
      const data = await res.json(); //set const data to the response from the backend 
      console.log("FROM frontend");
      setTrashDay(data.trashDay); //set the frontend useState of trashDay to data.trashDay
    } catch (err) {
      setError('Could not retrieve trash day info.'); //set error to frontend useState of error
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Philly Trash Day Finder</h1>
      {/* form for user input + simple styling for now */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Check
        </button>
      </form>

      {trashDay && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Trash Day Info</h2>
          <pre>{JSON.stringify(trashDay, null, 2)}</pre>
        </div>
      )}

      {error && <p style={{ color: 'red', marginTop: '2rem' }}>{error}</p>}
    </div>
  );
}

export default App;
