// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    

    blurFunction = () =>{
        console.log('Hey! Eyes on me!');        
    }

    focusFunction = () =>{
        console.log('Good!');
    }

    render(){
        return (
         <div><button onFocus={this.focusFunction} onBlur={this.blurFunction} >I'm a Button</button></div>   
        )
    };
}

export default EyesOnMe
