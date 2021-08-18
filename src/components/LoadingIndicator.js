import styled, { keyframes } from "styled-components";

const loading = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoadingIndicator = styled.div`
  margin: auto;
  display: inline-block;
  width: 5rem;
  height: 5rem;

  &:after {
    content: "";
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.5rem solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${loading} 1.5s linear infinite;
  }
`;

const LoadingIndicator = () => {
  return (
    <StyledLoadingIndicator className="LoadingIndicator"></StyledLoadingIndicator>
  );
};

export default LoadingIndicator;
