import React from "react";
import Footer from "./containers/composants/containers/Footer/Footer";
import User from "./containers/composants/containers/Footer/Footer";

const App = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    hobbies: ["Lecture", "Voyage", "Musique"]
  };
  return (
    <div>
      <h1>Bienvenue sur mon application React</h1>
      <Footer />
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        hobbies={user.hobbies}
      />
    </div>
  );
};

export default App;
