import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img className="avatar" src="IMG_4212.JPG" alt="Preet Yadav" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Preet Yadav</h1>
      <p>
        Aspiring Fullstack Dev and an Engineering student at Maharaja Agrasen
        Institute of Technology
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
