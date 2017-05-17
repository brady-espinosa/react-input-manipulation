import React, { Component } from 'react'

class BlahBot extends Component {
   changeMessage(str){
    // how many times does str.lenght divide by 3
    let times = str.length / 3
    let output = ""
    // write bla to the output that many times

    for(var i=0; i < times; i++){
      output = output + "bla"
    }

    // add the "bla"[0..%(length, 3)] to the end
    let remainder = str.length % 3
    output = output + "bla".slice(0, remainder - 1)
    return output
    }
  render(){
    return (
      <h3>Bad Robot: I hear you saying {this.changeMessage(this.props.message)}, is that correct? </h3>
    )
  }
}

export default BlahBot
