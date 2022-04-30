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
`;

export const ContainerNameMusic = styled.div`
  max-width: 200px;

  .music {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #f1f0f0;
  }

  .description {
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
  svg {
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
`;
