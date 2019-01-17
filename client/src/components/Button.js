import styled from "styled-components";

const Button = styled.button`
  border: 5px solid black;
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  ${props =>
    props.block &&
    `
    width: 100%;
    display: block;
  `}
`;

export default Button;
