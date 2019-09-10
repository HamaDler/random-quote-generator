import React from "react";
import LoginPage from "components/templates/LoginPage";
import BurgerPage from "components/templates/BurgerPage";
import HomepageLayout from "components/pages/Home";

// const theme = {
//   colors: {
//     primary: "#d4136d"
//   }
// };

function App() {
  return (
    <div style={{ padding: 0 }}>
      <HomepageLayout />
      <LoginPage />
      <BurgerPage />
    </div>
  );
}

export default App;
