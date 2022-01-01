import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import "./App.css";
import Courses from "./courses.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = Courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div>
      <div className="HeaderContainer">
        <h1>Platzi Calendar</h1>
      </div>
      <div className="SearchContainer">
        <div className="SearchBox">
          <input
            type="search"
            placeholder="Busca tu próximo curso"
            value={searchTerm}
            onChange={handleChange}
            className="SearchInput"
          />
          <button className="SearchButton">Buscar</button>
        </div>
        <div className="LegendCategories">
          <div className="CourseCard__Category Category__Launching">
            Lanzamiento del curso
          </div>
          <div className="CourseCard__Category Category__LiveSessions">
            Sesiones en vivo
          </div>
          <div className="CourseCard__Category Category__Live">
            PlatziLive
          </div>
          <div className="CourseCard__Category Category__Conf">
            PlatziConf
          </div>
          <div className="CourseCard__Category Category__Talk">
            PlatziTalk
          </div>
        </div>
      </div>
      <div className="CalendarContainer">
        {searchResults.map((course, index) => (
          <CourseCard
            title={course.title}
            icon={course.icon}
            description="Lorem ipsum"
            category={course.category}
            link="#"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
