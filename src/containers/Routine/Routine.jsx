import React from "react";

const Routine = () => {
  // Handlers pour chaque bouton
  const handleEat = () => alert("Vous avez choisi : Manger !");
  const handleSleep = () => alert("Vous avez choisi : Dormir !");
  const handleStudy = () => alert("Vous avez choisi : Étudier !");

  return (
    <div>
      <h2>Routine quotidienne</h2>
      <button onClick={handleEat}>Manger</button>
      <button onClick={handleSleep}>Dormir</button>
      <button onClick={handleStudy}>Étudier</button>
    </div>
  );
};

export default Routine;
