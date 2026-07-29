import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import ExploreCard from './ExploreCard';

import { FiSettings } from "react-icons/fi";
import { FaCoins, FaLink } from "react-icons/fa";
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
    title: "Software Architecture",
    desc: "Deepening my understanding of scalable backend architecture, system design and maintainable full-stack applications.",
  },
  {
    icon: GiArtificialIntelligence,
    title: "AI-Powered Apps",
    desc: "Integrating AI capabilities into practical software applications and exploring RAG based systems.",
  },
  {
    icon: FaCoins,
    title: "Web3",
    desc: "Building decentralized applications, exploring blockchain based solutionsand smart contract integration.",
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
