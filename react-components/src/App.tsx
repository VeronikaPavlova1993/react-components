import React, { useEffect, useState } from 'react';
import './App.css';
import SearchedPlanet from './components/search';
import Posts from './components/posts';
import axios from 'axios';
import { IPlanet } from './types/types';

function App() {
  const [localStorage, setLocalStorage] = useState('');
  const [posts, setPosts] = useState<IPlanet[]>([]);

  useEffect(
    function () {
      if (localStorage) {
        getSearchPlanet(localStorage);
      } else {
        getAll();
      }
    },
    [localStorage]
  );

  async function getSearchPlanet(endpoint: string) {
    try {
      const planet = await fetch(
        `https://swapi.dev/api/planets/?search=${endpoint}`
      );
      const planetData = await planet.json();
      setPosts(planetData.results);
    } catch (e) {
      console.log(e);
    }
  }

  async function getAll() {
    let planets: IPlanet[] = [];
    const url: string = 'https://swapi.dev/api/planets/';
    const getData = async (url: string) => {
      await axios.get(url).then((response) => {
        planets = [...planets, ...response.data.results];
        setPosts(planets);
      });
    };
    getData(url);
  }

  async function request(param: string) {
    await setLocalStorage(param);
  }

  return (
    <div className="main">
      <SearchedPlanet getInput={request} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
