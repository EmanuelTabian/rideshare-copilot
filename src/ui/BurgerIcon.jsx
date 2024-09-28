import React, { useState } from "react";

const BurgerIcon = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="burger-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>Dashboard</li>
            <li>Cars</li>
            <li>Calculator</li>
            <li>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerIcon;
