import React from 'react';
import { useState } from 'react';
import { IResult } from '../types/types';

function SearchedPlanet(props: IResult): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  async function search() {
    await props.getInput(inputValue);
  }

  return (
    <div className="search">
      <form className="search__form">
        <input
          onChange={(e: { target: { value: string } }) =>
            setInputValue(e.target.value)
          }
          type="text"
          className="search__input"
          placeholder={inputValue}
        />
        <button className="search__button" type="button" onClick={search} />
      </form>
    </div>
  );
}

export default SearchedPlanet;
