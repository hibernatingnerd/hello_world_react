// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should happen when the component is first created
  constructor (props) {
    //make a call to parent
    super()
    //  define an initial state
    this.state = {
      moodPoints: 1 // initialize
    }
  }

  increaseMood(e) {
    if (this.state.moodPoints === 10){
      this.setState({
        moodPoints: 1
      })
    } else {
      this.setState({
        moodPoints: this.state.moodPoints +1
      })
    }
  }
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>You are {this.props.age} years old.</h3>
        <p>You love: {this.props.animals[0]}</p>
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
      </div>
    )
  }
}

export default Hello
