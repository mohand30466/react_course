import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component{
  state ={lat:null, messages: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
     position => this.setState({lat: position.coords.latitude}),
     err => this.setState({messages:err.message})
  );
    }

  render(){
  

  return (
    <div className="App">
      <h1>{`hello world here is my latitude ${this.state}`}</h1>
    </div>
  );
}
}
export default App;
