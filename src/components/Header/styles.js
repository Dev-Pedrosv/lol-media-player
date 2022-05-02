import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12vh;
  background: #14061f;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0px 40px;
  position: fixed;
  z-index: 1000;

  .logo {
    width: 300px;
  }

  .lib {
    width: 300px;
    display: flex;
    justify-content: center;
  }

  .info:after {
    content: "";
    width: 0;
    height: 2px;
    background: #2ef4cc;
    position: absolute;
    left: 0;
    bottom: -12px;
    transition: width 0.2s;
  }
  .info {
    position: relative;
    transition: color 0.2s;
    position: relative;
    color: #c0c0c0;
    font-weight: 400;
    font-size: 18px;
    padding-bottom: 3px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.1s;
  }
  .info:hover::after {
    width: 100%;
  }
`;

export const ContainerUser = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  justify-content: flex-end;
  p {
    border: none;
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }

  svg {
    color: #c0c0c0;
    font-size: 24px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }

  .borda {
    width: 70px;
    height: 70px;
    position: absolute;
    right: 45px;
  }
`;
