import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/boards/Board'

import './App.css'

class App extends React.Component {
  render() {
    return (
     
        <div>
          <h1> Hello world</h1>

          <Board />
        </div>
     
    );
  }
}

ReactDOM.render( <App />, document.getElementById('app'));