import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Grid from './components/table/table';


class App extends Component {
  render() {
    return (
      <div>
      <Grid></Grid>
      </div>
    );
  }
}

export default App;
