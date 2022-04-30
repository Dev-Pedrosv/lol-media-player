import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  position: absolute;
  top: 75px;
  right: 0px;

  background: #14061f;
  border-radius: 12px;
  padding: 10px;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 0px 9px 2px #ededed;
  box-shadow: 0px 0px 9px 2px #ededed;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #14061f;
    border-radius: 20px;
    border: 3px solid #ededed;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    opacity: 0.7;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  color: #ededed;
  font-size: 14px;
`;
