import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: "world" };
    console.log("constructor");
  }
  handleWorldButton = () => {
    const worldWho = "World!";
    this.setState({
      who: worldWho
    });
  };
  handleFriendButton = () => {
    const friendWho = "Friend!";
    this.setState({
      who: friendWho
    });
  };
  handleReactButton = () => {
    const reactWho = "React!";
    this.setState({
      who: reactWho
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who.toLocaleString()}</p>
        <button onClick={this.handleWorldButton}>World</button>
        <button onClick={this.handleFriendButton}>Friend</button>
        <button onClick={this.handleReactButton}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
