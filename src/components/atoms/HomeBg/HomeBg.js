import styled from 'styled-components';
import image from 'assets/images/homeBg.jpg';
import edgeFinish from 'assets/svg/edgeFinish.svg';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -999;
  bottom: 0;
  left: 0;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  &::before {
    content: url(${edgeFinish});
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: auto;
    transform: rotate(180deg);
  }
`;

export default Background;
