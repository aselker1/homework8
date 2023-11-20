import React, { useState, useEffect } from 'react';

function App() {
 const [names, setNames] = useState(JSON.parse(localStorage.getItem('names')) || []);
 const [newName, setNewName] = useState('');

 useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
 }, [names]);


 const handleSubmit = (e) => {
    e.preventDefault();
    setNames((prevNames) => [...prevNames, { id: Date.now(), name: newName }]);
    setNewName('');
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
 );
};

export default App;
