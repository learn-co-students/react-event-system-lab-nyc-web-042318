// Code EyesOnMe Component Here
import React from 'react';


class EyesOnMe extends React.Component {
  onFocus = () => {
    return console.log('Good!')
  }

  onBlur = () => {
    return console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
    )
  }
}

export default EyesOnMe;
