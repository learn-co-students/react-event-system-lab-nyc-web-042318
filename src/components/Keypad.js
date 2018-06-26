// Code Keypad Component Here
import React from "react";


class Keypad extends React.Component{

    print(){
        console.log("Entering password...");
    }


    render(){
        return(
            <div>
            <input onKeyUp={this.print} type="password"/>
            </div>
        )
    }

}

export default Keypad;