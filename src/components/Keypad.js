import React from 'react';

class Keypad extends React.Component {
  printText = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.printText} />
    )
  }

}

export default Keypad;
