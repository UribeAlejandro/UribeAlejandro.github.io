import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={18} md={4}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 3))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={18} md={4}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 3), skills.length - Math.floor(skills.length / 3))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={18} md={4}>
        <SkillsSection
          skills={skills.slice(skills.length - Math.floor(skills.length / 3), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
