import React from "react";
import "./App.css";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Bomb />
      </div>
    );
  }
}

export default App;
