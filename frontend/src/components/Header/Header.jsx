import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Hungry? Grab your favorite burger here!</h2>
        <p>
          Choose from a mouthwatering selection of burgers, crafted with the
          finest ingredients and culinary expertise. Our mission is to satisfy
          your cravings and elevate your burger experience, one delicious bite
          at a time.
        </p>
        <button>
          <a href="#menu">View Menu</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
