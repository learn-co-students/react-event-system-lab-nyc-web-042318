// Code Keypad Component Here
import React from 'react';


class Keypad extends React.Component {
  handpass() {
    console.log('Entering password...')
  }
  render() {
    return (
      <input type="password" onKeyUp={this.handpass}/>
    )
  }
}

export default Keypad;
