import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import Carousel from '../../components/Carousel'
import CarouselItem from './CarouselItem'

const theme = {
  main: '#fc4e4e',
  blue: '#286edb',
  green: '#39c78d'
}

export default class CarouselPage extends Component {
  render() {
    return (
      <div>
        <Carousel title="Carousel">
          <ThemeProvider theme={theme} >
            <CarouselItem index={ 1 } />
          </ThemeProvider>
          <ThemeProvider theme={{main: theme.blue}} >
            <CarouselItem index={ 2 } />
          </ThemeProvider>
          <ThemeProvider theme={{main: theme.green}} >
            <CarouselItem index={ 3 } />
          </ThemeProvider>
        </Carousel>
      </div>
    );
  }
}
