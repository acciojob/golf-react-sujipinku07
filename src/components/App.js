import React, { Component, useState } from "react";
import '../styles/App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // To determine whether to show the ball or the button
      ballPosition: { left: "0px" }, // CSS for the ball's position
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.moveBall = this.moveBall.bind(this);
  }

  // Handler for Start button
  buttonClickHandler() {
    this.setState({ renderBall: true }); // Show the ball
  }

  // Method to move the ball when ArrowRight is pressed
  moveBall(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => {
        const currentLeft = parseInt(prevState.ballPosition.left, 10); // Extract current left value
        const newLeft = currentLeft + 5; // Move 5px to the right
        return { ballPosition: { left: `${newLeft}px` } };
      });
    }
  }

  // Add event listener when component mounts
  componentDidMount() {
    window.addEventListener("keydown", this.moveBall);
  }

  // Remove event listener when component unmounts
  componentWillUnmount() {
    window.removeEventListener("keydown", this.moveBall);
  }

  // Conditionally render the Start button or the ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;