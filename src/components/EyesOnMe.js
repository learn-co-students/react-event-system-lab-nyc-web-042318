import React from "react";

class EyesOnMe extends React.Component {

  focusing(){
    console.log("Good!")
  }

  blurring() {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button value="button" onFocus={this.focusing} onBlur={this.blurring}/>
    )
  }
}

export default EyesOnMe;
