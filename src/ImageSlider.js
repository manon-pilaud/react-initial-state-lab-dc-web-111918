import React from 'react'

export default class ImageSlider extends React.Component{
  constructor(){
    super()
    this.state =({
      currentSlideIndex: 0
    })
  }
  currentSlide = ()=> {
    let currentCount = this.state.count + 1
    this.setState=({
      currentSlideIndex: currentCount
    })
  }
  render(){
    return(
      <div currentSlide={this.currentSlide}>
      I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }
}
