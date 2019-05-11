import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  handleClick = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      const randomNumGen = Math.ceil(Math.random() * 8);

      console.log(randomNumGen);
      this.setState({
        chamber: randomNumGen,
        spinningTheChamber: false
      });
    }, 2000);
  };

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;

    if (spinningTheChamber === true) {
      return "spinning the chamber and pulling the trigger! ...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!";
    } else {
      return "You're safe!";
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="RouletteGun">
        <p>{this.renderDisplay()}</p>
        <button name="trigger" onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}

export default RouletteGun;
