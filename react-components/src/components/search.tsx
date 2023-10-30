import React from 'react';
import { IStateInput } from '../types/types';
import Planets from '../api-info/apiPlanet';

class Search extends React.Component {
  public state: IStateInput;
  constructor(props: string) {
    super(props);
    this.state = {
      inputValue: '',
      planets: [],
    };
  }

  updateInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: e.target.value,
    });
    const planet = Planets.getSearchPlanet(this.state.inputValue);
    planet.then((res) => {
      this.setState({
        planets: res,
      });
    });
  }

  render(): React.ReactNode {
    return (
      <div className="search">
        <form className="search__form">
          <input
            value={this.state.inputValue}
            onChange={(e) => this.updateInputValue(e)}
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <button type="submit" className="search__button" />
        </form>
      </div>
    );
  }
}

export default Search;
