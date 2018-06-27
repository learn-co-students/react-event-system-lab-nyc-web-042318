import React from "react";

class EyesOnMe extends React.Component {
  eventHandlerFocus = () => {
    console.log("Good!");
  };
  eventHandlerBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  
  render() {
    return (
      <button onFocus={this.eventHandlerFocus} onBlur={this.eventHandlerBlur} />
    );
  }
}

export default EyesOnMe;