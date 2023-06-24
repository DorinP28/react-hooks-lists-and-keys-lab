import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key="h" href="#home">
        home
      </a>
      <a key="a" href="#about">
        about
      </a>
      <a key="p" href="#projects">
        projects
      </a>
    </nav>
  );
}

export default NavBar;
