import React, { useState } from 'react';
import './App.css';
import SearchedPlanet from './components/search';

function App() {
  const [localStorage, setLocalStorage] = useState('');

  async function request(param: string) {
    await setLocalStorage(param);
  }

  return (
    <div className="main">
      <SearchedPlanet getInput={request} />
    </div>
  );
}

export default App;
