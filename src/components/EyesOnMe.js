// Code EyesOnMe Component Here
import React, {Component} from 'react'

class EyesOnMe extends Component {
  render (){
    return(
      <button onFocus={this.focusprint} onBlur={this.blurprint}>Hit Me</button>
    )
  }

  focusprint = () => {
    console.log('Good!')
  }

  blurprint = () => {
    console.log('Hey! Eyes on me!')
  }

}

export default EyesOnMe;
