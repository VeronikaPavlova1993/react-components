import React from 'react';
import './App.css';
import Posts from './components/posts';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
  
}

export default App;
