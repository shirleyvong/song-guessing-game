import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <div>
    <Text>Loading...</Text>
  </div>
);


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1
  }

  100% {
    opacity: 0;
  }
`;

const Text = styled.h1`
  animation-duration: 4s;
  animation-name: ${fadeIn};
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
`;

export default Loading;
