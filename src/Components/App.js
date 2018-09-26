import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='content'>
          <p className='intro'>
            This is where we will be creating an intro.
          </p>
        </div>
      </div>
    );
  }
}
