import React from "react";
import React from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./assets/logo.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
function AppLayout() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
