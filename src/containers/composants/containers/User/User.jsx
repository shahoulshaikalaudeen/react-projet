import React from "react";
import Fullname from "./Fullname";
import Hobbies from "./Hobbies";

const User = ({ firstName, lastName, hobbies }) => {
  return (
    <div>
      <h2>Profil Utilisateur</h2>
      <h3>Nom Complet :</h3>
      <Fullname firstName={firstName} lastName={lastName} />
      <h3>Passions :</h3>
      <Hobbies hobbies={hobbies} />
    </div>
  );
};

export default User;
