import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #ff1493;
  justify-content: space-between;
  margin-top: 15px;
`;


export const ButtonHeader = styled.button`
  background-color: black;
  width: 100px;
  height: 50px;
  margin-top: 25px;
  color: white;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;