import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Result } from "./Result";
import Projects from "./data/Projects.json";

function App() {
  return (
    <div>
      <div className="Header">
        <img src={logo} alt="Platzi Connect" className="Header__Image" />
        <label for="search" className="Header__Form">
          <input type="search" />
          <select>
            <option selected>Proyectos</option>
            <option>Empresas</option>
            <option>Talento</option>
          </select>
          <button className="Header__SearchButton">Buscar</button>
        </label>
      </div>
      <div className="Content">
        {Projects.map((project, index) => (
          <Result
            key={index}
            title={project.name}
            description={project.description}
            image={project.image}
            courses={project.courses}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
