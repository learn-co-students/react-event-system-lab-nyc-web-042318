// Code Keypad Component Here
import React from "react";


class Keypad extends React.Component {
    
    test = () => {
        console.log('Entering password...')
    }

    render(){
        return <input  onKeyUp={this.test} type="password"/>
    }
}

export default Keypad;