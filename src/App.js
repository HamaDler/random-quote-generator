import React from "react";
import LoginPage from "components/templates/LoginPage";
import BurgerPage from "components/templates/BurgerPage";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d4136d"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <LoginPage />
        <BurgerPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
