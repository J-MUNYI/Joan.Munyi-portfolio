import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import ExploreCard from './ExploreCard';

import { FiSettings } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsDiagram3 } from "react-icons/bs";

const skillsByCategory = {
  "Frontend development": [
    "JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS"
  ],
  "Backend development": [
    "Node.js", "Express.js", "REST APIs", "JWT Auth"
  ],
  "Database": [
    "MongoDB", "Mongoose ODM"
  ],
  "Tools": [
    "Git & GitHub", "Postman"
  ]
};

const exploring = [
  {
    icon: BsDiagram3,
    title: "Full-Stack Engineering",
    desc: "Deepening my understanding of scalable application architecture, clean code, and production-ready development practices..",
  },
  {
    icon: FiSettings,
    title: "Software Architecture",
    desc:"Learning scalable backend patterns, system design, database optimization, and distributed application concepts.",
  },
  {
    icon: GiArtificialIntelligence,
    title: "AI-Powered Apps",
    desc: "Integrating AI capabilities into practical software applications and exploring RAG based systems.",
  },
  {
    icon: FaCoins,
    title: "Web3",
    desc: "Building decentralized applications, exploring blockchain based solutions and smart contract integration.",
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
          title="Skills & Technical Expertise"
          description="My core development toolkit and the areas I'm currently deepening my expertise in."
        />

        {Object.entries(skillsByCategory).map(([category, skills]) => (
      <div key={category} style={{ marginBottom: "3rem" }}>
        
        {/* Category Header */}
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--accent2)",
            marginBottom: "1.5rem",
            paddingBottom: "0.5rem",
            borderBottom: "1px solid var(--border2)",
          }}
        >
          {category}
        </h3>

        {/* Skills Grid for this category */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>
    ))}

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
