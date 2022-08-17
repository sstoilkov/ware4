import React, { useState } from 'react'
import Axious from 'axios'

import './App.css'

function App() {

  const [reference, setReference] = useState('');
  const [name, setName] = useState('');
  const [qty, setQty] = useState(0);

  const addToList = () => {
    Axious.post('http://localhost:3001/insert', {
      reference,
      name,
      qty
    })
  }

  return (
    <div className="App">
      <h1>WareHouse</h1>

      <label>Reference: </label>
      <input type="text"
        onChange={(event) => {
          setReference(event.target.value)
        }} />
      <label>Name: </label>
      <input type="text"
        onChange={(event) => {
          setName(event.target.value)
        }} />
      <label>Quantity: </label>
      <input type="number"
        onChange={(event) => {
          setQty(event.target.value)
        }} />
      <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default App;
