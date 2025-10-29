import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite burger here!</h2>
        <p>
          Savor every bite of our juicy, freshly made burgers, crafted just the
          way you like them. From classic cheeseburgers to gourmet creations
          loaded with your favourite toppings, each burger is prepared with
          quality ingredients and a whole lot of love.
        </p>
        <a href="#explore-menu"> <button>View Menu</button></a>
      </div>
    </div>
  );
};

export default Header;
