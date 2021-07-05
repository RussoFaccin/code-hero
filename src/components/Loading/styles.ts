import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

const AnimSpin = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const Scrim = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  animation: 1.5s ${AnimSpin} linear infinite;
`;

export const Spinner = styled(FiLoader)`
  width: 100px;
  height: auto;
`;