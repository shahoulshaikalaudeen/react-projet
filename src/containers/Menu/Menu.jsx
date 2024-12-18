import React, { useState } from "react";

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isMenuVisible ? "Masquer le menu" : "Afficher le menu"}
      </button>
      {isMenuVisible && (
        <ul style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px", width: "150px" }}>
          <li>Accueil</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
