import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

  render() {
    return (
      <div align="center">
        <h1>
          Happy Learning-React
        </h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
