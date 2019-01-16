import styled from "styled-components";

const Button = styled.button`
  border: 5px solid black;
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  ${props =>
    props.block &&
    `
    width: 100%;
    display: block;
  `}
`;

export default Button;
