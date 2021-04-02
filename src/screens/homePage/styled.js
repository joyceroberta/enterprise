import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #ff1493;
  justify-content: space-between;
  margin-top: 15px;
`;

export const BigButton = styled.button`
  background-color: black;
  width: 400px;
  height: 200px;
  margin-top: 50px;
  color: white;
  border-radius: 20px;
  :hover {
    cursor: pointer;
  }
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

export const DivBigButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivContainer = styled.div`
  background-color: #ffb6c1;
  height: 630px;
  width: 100%;
  margin-top: -20px;
`;

export const DivH1Header = styled.div`
  display: flex;
  margin-left: 600px;
`;

export const H2Home = styled.h2`
  text-align: center;
  padding-top: 50px;
`;
