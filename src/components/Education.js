import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University of Florida',
      location: 'Gainesville, FL',
      period: 'Aug 2025 – May 2027',
      coursework: [
        'Computer Architecture',
        'Distributed Operating System Principles',
        'Principles of Programming Languages',
        'Machine Learning Engineering'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      school: 'Vishwakarma Institute of Technology',
      location: 'Pune, India',
      period: '2015 – 2019'
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div
            key={index}
            className="education-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="education-head">
              <div>
                <h3>{item.degree}</h3>
                <div className="school-info">
                  <span className="school">{item.school}</span>
                  <span className="separator">•</span>
                  <span className="school-location">{item.location}</span>
                </div>
              </div>
              <span className="period">{item.period}</span>
            </div>
            {item.coursework && (
              <div className="coursework">
                <span className="coursework-label">Relevant coursework</span>
                <div className="coursework-tags">
                  {item.coursework.map((course, courseIndex) => (
                    <span key={courseIndex} className="coursework-tag">{course}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
