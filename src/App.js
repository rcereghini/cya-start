import React, { Component, Fragment } from 'react';
import GameScreen from './components/GameScreen/GameScreen'
import './App.css';

class App extends Component {
  componentDidMount(){
      console.log('Hello World!')
}

  render() {
    return (
      <Fragment>
        <GameScreen/>
      </Fragment>
      );
  }
}

export default App;
