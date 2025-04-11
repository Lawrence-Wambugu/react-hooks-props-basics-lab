// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user"; // Assuming user data is in this file

function App() {
  return (
    <div>
      <NavBar />
      <Home
        name={user.name}
        city={user.city}
        color={user.color}
      />
      <About
        bio={user.bio}
        links={user.links}
      />
    </div>
  );
}

export default App;
