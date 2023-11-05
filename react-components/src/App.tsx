import React, { useEffect, useState } from 'react';
import './App.css';
import SearchedPlanet from './components/search';
import Posts from './components/posts';
import axios from 'axios';
import { IPlanet } from './types/types';
import Pagination from './components/pagination';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [localStorage, setLocalStorage] = useState('');
  const [posts, setPosts] = useState<IPlanet[]>([]);
  const [pages, setPages] = useState(0);
  const [pageNumber, setPageNumber] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

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

  useEffect(
    function () {
      if (pageNumber) {
        showPage(+pageNumber);
      }
    },
    [pageNumber]
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
        console.log(total);
        if (response.data.next) {
          getData(response.data.next);
        }
        setPosts(planets);
        setPages(Math.ceil(response.data.count / 10));
        setTotal(response.data.count);
      });
    };

    getData(url);
  }

  async function request(param: string) {
    await setLocalStorage(param);
    setSearchParams({ posts: param });
  }

  async function showPage(pageNumber: number) {
    let pages: IPlanet[] = [];
    const url: string = `https://swapi.dev/api/species/${pageNumber}`;
    const request = async (url: string) => {
      await axios.get(url).then((response) => {
        pages = [...pages, ...response.data.results];
        setPosts(pages);
      });
    };
    request(url);
  }

  async function getPageNumber(value: string) {
    await setPageNumber(value);
    console.log(pageNumber);
  }

  return (
    <div className="main">
      <SearchedPlanet getInput={request} />
      <Posts posts={posts} />
      <Pagination
        number={pages}
        arrayPagination={[]}
        getPageNumber={getPageNumber}
      />
    </div>
  );
}

export default App;
