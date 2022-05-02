import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0px;
  background: #14061f;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  color: #fff;
  z-index: 1;
`;

export const ContainerNameMusic = styled.div`
  max-width: 200px;

  .music {
    width: 500px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #f1f0f0;
  }

  .description {
    width: 500px;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-transform: uppercase;
    color: #c0c0c0;
    opacity: 0.6;
  }
`;

export const ContainerControls = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  .disabled {
    color: transparent;
    font-size: 26px;
  }

  .active {
    color: #4ac08f;
    font-size: 26px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }

  .control {
    font-size: 32px;
    color: #4ac08f;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  :hover {
    opacity: ${(props) => (props.disabled ? "" : 0.8)};
  }

  :active {
    opacity: ${(props) => (props.disabled ? "" : 0.6)};
  }
`;

export const ContainerMenu = styled.div`
  width: 200px;
  display: flex;

  align-items: center;
  justify-content: end;
  svg {
    color: #4ac08f;
    font-size: 32px;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }

    :active {
      opacity: 0.6;
    }
  }

  .progressBar {
    width: 100%;
    height: 8px;
    position: fixed;
    bottom: 65px;
    right: 0px;

    outline: none;
    appearance: none;
    background-color: #14061f;
    border-radius: 10px;
    transition: 0.2s;

    &::-moz-focus-outer {
      border: 0;
    }
    &::before {
      content: "";
      height: 8px;
      width: ${(props) =>
        props.widthProgressBar ? props.widthProgressBar : ""};
      background-color: #4ac08f;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 2;
      cursor: pointer;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: none;
      background: #2ef4cc;
      filter: blur(2px);
      cursor: pointer;
      position: relative;
      margin: -2px 0px 0px 0px;
      z-index: 3;
    }

    &:active::-webkit-slider-thumb {
      transform: scale(1.2);
    }
  }

  .progressTime {
    display: flex;
    position: fixed;
    color: #2ef4cc;
    right: 460px;
  }

  .index {
    color: #2ef4cc;
    position: absolute;
    bottom: 24px;
    right: 400px;
  }
`;
