import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'C++', 'C', 'SystemVerilog', 'JavaScript', 'C#']
    },
    {
      category: 'Systems & Platforms',
      skills: ['Linux', 'Docker', 'QEMU', 'Kubernetes', 'AWS (EC2, S3, RDS)', 'CloudFront', 'Route 53']
    },
    {
      category: 'Frameworks & Tools',
      skills: ['Eclipse RCP', 'NASA F Prime', 'ModelSim', 'JUnit', 'SWTBot', 'JavaCC', 'MySQL']
    },
    {
      category: 'Software Engineering',
      skills: [
        'Object-Oriented Design',
        'Multithreading',
        'Design Patterns',
        'Memory Management',
        'CI/CD (Azure DevOps)',
        'Git'
      ]
    }
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="skill-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="skill-tag"
                  style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
