import React from 'react';
import './App.css';
import Posts from './components/posts';
import Search from './components/search';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Posts />
      </div>
    );
  }
}

export default App;
