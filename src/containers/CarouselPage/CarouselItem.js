import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Item = styled.div`
  background: ${props => props.theme.main};
  text-align: center;
  padding: 100px;
  color: black;
`

function CarouselItem(props) {
  return (
    <Item>{props.index}</Item>
  )
}

CarouselItem.propTypes = {
  index: PropTypes.number
}

export default CarouselItem
