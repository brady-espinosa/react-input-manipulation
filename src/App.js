import React, { Component } from 'react';
import './App.css';
import GoodRobot from './GoodRobot'
import MessageInput from './MessageInput'
import KanyeBot from './KanyeBot'
import BlahBot from './BlahBot'


class App extends Component {
  constructor(props){
    super()
    this.state = {
      message: 'Robots'
    }
  }
  updateMessage(message){
    this.setState({message: message})
  }
  
  render() {
    return (
      <div>
        <h1>Active Listening Robots</h1>
        <MessageInput message={this.state.message} updateMessage={this.updateMessage.bind(this)}/>
        <GoodRobot message = {this.state.message} />
        <BlahBot message = {this.state.message} />
        <KanyeBot message = {this.state.message} />
      </div>
    );
  }
}

export default App;
