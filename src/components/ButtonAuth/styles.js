import styled from "styled-components";

export const Container = styled.button`
  width: 72px;
  height: 30px;
  outline: none;
  border: ${(props) =>
    props.name === "Google" ? "1px solid #b5b2b2" : "none"};
  background: ${(props) => (props.isBackground ? props.isBackground : "")};
  cursor: pointer;
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
    background: ${(props) => (props.name === "Google" ? "#ededed" : "")};
  }

  svg {
    color: ${(props) => (props.color ? props.color : "")};
    font-size: 20px;
  }
`;
