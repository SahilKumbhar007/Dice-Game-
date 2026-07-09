import styled from "styled-components";

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
    border-color: black;
  }
`;

export default Button;


const OutlineButton = styled.button`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background: black;
    color: white;
    border: 1px solid transparent;
  }
`;