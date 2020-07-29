import React from "react";
import "./App.css";
import Display from "./component/Display";

class App extends React.Component {
  state = { lat: null, messages: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ messages: err.message })
    );
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state.lat} />
      </div>
    );
  }
}

export default App;
