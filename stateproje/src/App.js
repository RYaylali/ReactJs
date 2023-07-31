import Course from "./Course";
import { useState } from "react";
import "./App.css";

function getRandomTeam() {
  const teamArray = [
    "bir",
    "iki",
    "uc",
    "dort",
    "bes",
    "alti",
    "yedi",
    "sekiz",
    "dokuz",
  ];
  return teamArray[Math.floor(Math.random() * teamArray.length)];
}

function App() {
  const [teams, setTeams] = useState([]);
  const handleClick = () => {
    setTeams([...teams, getRandomTeam()]);
  };
  const teamList = teams.map((team, index) => {
    return <Course key={index} teamName={team} />;
  });
  return (
    <div className="App">
      <button onClick={handleClick} className="appButton">
        Takım sec
      </button>
      <div className="teamList">{teamList}</div>
    </div>
  );
}

export default App;
