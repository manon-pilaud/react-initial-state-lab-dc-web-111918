import React from 'react'

export default class Bomb extends React.Component{
  constructor(props){
    super()
    this.state={
      secondsLeft: props.initialCount
    }
  }

  render(){
    let response = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : `Boom!`
    return(
      <div>{response}</div>
    )
  }
}
