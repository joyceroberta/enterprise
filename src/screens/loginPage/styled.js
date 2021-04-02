import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #ff1493;
  justify-content: space-between;
  margin-top: 15px;
`;

export const DivH1Header = styled.div`
  display: flex;
  margin-left: 600px;
`;

export const H2Home = styled.h2`
  text-align: center;
  padding-top: 50px;
`;

export const DivContainer = styled.div`
  background-color: #ffb6c1;
  height: 630px;
  width: 100%;
  margin-top: -20px;
`;

export const CreateButton = styled.button`
  margin-left: 400px;
  background-color: black;
  width: 100px;
  height: 50px;
  color: white;
  border-radius: 5px;
  margin-top: 5px;
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

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 550px;
  width: 300px;
`;

export const LoginButton = styled.button`
  margin-left: 200px;
  background-color: black;
  width: 100px;
  height: 50px;
  color: white;
  border-radius: 5px;
  margin-top: 5px;
  :hover {
    cursor: pointer;
  }
`;
