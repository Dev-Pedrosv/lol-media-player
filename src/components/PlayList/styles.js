import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  padding: 14vh 5vw;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #000;
  overflow-y: scroll;
  top: 0;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #14061f;
    border-radius: 20px;
    border: 3px solid #ededed;
  }
  .container {
    border-radius: 12px;
    background-color: #14061f;
    display: flex;
    width: 48%;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 9px 2px #ededed;
    box-shadow: 0px 0px 9px 2px #ededed;
    transition: 0.2s;
    transform: scale(0.9);
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      transform: scale(1);
      opacity: 1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 10px;

      .music {
        color: #bbb7bb;
        font-size: 24px;
      }

      .description {
        font-size: 18px;
        color: #bbb7bb;
      }
    }

    img {
      width: 250px;
      border-radius: 12px;
    }
  }
`;
