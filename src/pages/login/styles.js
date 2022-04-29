import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f9f9f9;
`;

export const Background = styled.img`
  flex: 3;
`;

export const ContainerLogin = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 0px;
  img {
    width: 100px;
  }

  input:checked {
    background: red;
  }

  h1 {
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .checkbox {
    width: 100%;
    margin-left: 85px;
    display: flex;
    align-items: center;
    gap: 12px;

    label {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export const ContainerInput = styled.div`
  position: relative;

  .name,
  .password {
    font-size: ${(props) => (props.isFocus ? "7px" : "9px")};
    font-weight: bold;
    position: absolute;
    transition: 0.1s;
    top: ${(props) => (props.isFocus ? "5px" : "14px")};
    left: ${(props) => (props.isFocus ? "5px" : "15px")};
    color: #777272;
  }

  svg {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  display: block;
  background: #ededed;
  width: 250px;
  height: 40px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  padding: 5px;
  font-weight: bold;
  transition: 0.1s;

  &:focus {
    background: #f9f9f9;
    border: 2px solid #000;
  }

  &::placeholder {
    position: absolut;
    top: 0;
  }
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  background: red;
`;

export const ContainerAuth = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  display: flex;
  margin-top: 130px;
  margin-bottom: 60px;
  width: 50px;
  height: 50px;
  align-items: center;
  background: ${(props) => (props.isActive ? "#cd4440" : "#f9f9f9")};
  justify-content: center;
  outline: none;
  border: ${(props) => (props.isActive ? "none" : "1px solid #b5b2b2")};
  border-radius: 12px;
  cursor: ${(props) => (props.isActive ? "pointer" : "")};
  transition: 0.2;

  :hover {
    background: ${(props) => (props.isActive ? "#ac2622" : "")};
  }

  :active {
    opacity: 0.7;
  }

  svg {
    font-size: 22px;
    color: ${(props) => (props.isActive ? "#fff" : "#b5b2b2")};
  }
`;

export const Info = styled.p`
  font-size: 10px;
  color: #b5b2b1;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: #000;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: end;

  .version {
    margin-left: 85px;
    transition: 0.3s;

    :hover {
      color: #636160;
      cursor: pointer;
    }
  }
`;
