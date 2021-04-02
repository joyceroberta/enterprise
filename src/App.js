import React from 'react'
import Router from './router/Router'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: #ffb6c1;
  
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
