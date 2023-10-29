import React from 'react';

class Search extends React.Component {
  constructor(props: string) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="search">
        <form className="search__form">
          <input type="text" className="search__input" placeholder="Search" />
          <button type="submit" className="search__button" />
        </form>
      </div>
    );
  }
}

export default Search;