import styled from 'styled-components';
const CarouselSlide = styled.div`
  flex: 1 0 100%;
  order: ${(props) => props.order};
`
export default CarouselSlide;
