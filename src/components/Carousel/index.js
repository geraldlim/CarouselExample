import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable'
import { throttle } from 'lodash'
import Wrapper from './Wrapper'
import CarouselContainer from './CarouselContainer'
import CarouselSlide from './CarouselSlide'

class Carousel extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      position: 2,
      direction: 'next',
      sliding: false
    }
  }

  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  handleSwipe = throttle((isNext) => {
    if (isNext) {
      this.nextSlide()
    } else {
      this.prevSlide()
    }
  }, 500, { trailing: false })

  render() {
    const { title, children } = this.props
    const { sliding, direction } = this.state
  
    return (
      <div>
        <h2>{ title }</h2>
        <Swipeable trackMouse delta= { 100 } onSwipingLeft={ () => this.handleSwipe(true) } onSwipingRight={ () => this.handleSwipe() }>
          <Wrapper>
            <CarouselContainer sliding={ sliding } direction={ direction }>
              { children.map((child, index) => (
                  <CarouselSlide key={ index } order={ this.getOrder(index) }>
                    {child}
                  </CarouselSlide>
              ))}
            </CarouselContainer>
          </Wrapper>
        </Swipeable>
      </div>
    )
  }
  
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
