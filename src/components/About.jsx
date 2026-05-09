import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import ExploreCard from './ExploreCard';

import { FiSettings } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsDiagram3 } from "react-icons/bs";

const skills = [
  "JavaScript", "React.js", "Node.js", "Express.js",
  "MongoDB", "HTML5 / CSS3", "Tailwind CSS", "REST APIs",
  "Git & GitHub", "JWT Auth", "Mongoose ODM", "Postman",
];

const exploring = [
  {
    icon: FiSettings,
    title: "MERN Stack Depth",
    desc: "Going deeper into full stack patterns, middleware, and scalable app architecture.",
  },
  {
    icon: FaLink,
    title: "API Development",
    desc: "Building and consuming RESTful APIs, authentication flows, and async patterns.",
  },
  {
    icon: GiArtificialIntelligence,
    title: "AI & RAG Systems",
    desc: "Exploring retrieval augmented generation and practical AI integrations in web apps.",
  },
  {
    icon: BsDiagram3,
    title: "Backend Architecture",
    desc: "Studying scalable design patterns, database optimisation, and microservice concepts.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="fade-up"
      style={{ background: "var(--bg2)", padding: "6rem 2.5rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          label="About"
          title="Skills & What I'm Learning"
          description="My current technical toolkit, and the rabbit holes I'm currently going down."
        />

        {/* Skills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>

        <SectionHeader label="Currently Exploring" />

        {/* Exploring */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {exploring.map((item) => (
            <ExploreCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
