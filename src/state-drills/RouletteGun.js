import React from "react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  };

  render() {
    return (
      <div>
        <p />
        <button name="trigger">Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
