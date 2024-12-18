import React, { useState } from "react";

const Hobbies = () => {
  // Liste des hobbies
  const [hobbies, setHobbies] = useState(["Lecture", "Voyage", "Musique"]);
  // Etat du champ pour ajouter un hobby
  const [newHobby, setNewHobby] = useState("");

  // Fonction pour ajouter un hobby
  const addHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby.trim()]);
      setNewHobby(""); // Réinitialiser le champ après ajout
    } else {
      alert("Veuillez entrer un hobby !");
    }
  };

  return (
    <div>
      <h3>Liste de passions</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
        placeholder="Ajouter un hobby"
      />
      <button onClick={addHobby}>Ajouter Hobby</button>
    </div>
  );
};

export default Hobbies;
