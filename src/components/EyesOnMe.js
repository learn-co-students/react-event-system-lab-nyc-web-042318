// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  render() {
    return (
      <button onFocus={this.logGood}onBlur={this.logBlur}>Click</button>
    )
  }

  logGood() {
    console.log("Good!")
  }

  logBlur() {
    console.log("Hey! Eyes on me!")
  }
}

export default EyesOnMe
