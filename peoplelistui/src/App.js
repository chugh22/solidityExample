import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3' 
var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))  
class App extends Component {
  componentWillMount(){
    console.log(ETHEREUM_CLIENT.eth.accounts) 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to cool dApp</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
