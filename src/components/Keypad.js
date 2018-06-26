import React from "react";

class Keypad extends React.Component {

  passwordLog () {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.passwordLog}></input>
    )
  }
}

export default Keypad;
