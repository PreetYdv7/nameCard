import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
};

const Skill = (props) => {
  const emoji =
    props.level === "advanced"
      ? "💪"
      : props.level === "intermediate"
      ? "👍"
      : "👶";
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{emoji}</span>
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
