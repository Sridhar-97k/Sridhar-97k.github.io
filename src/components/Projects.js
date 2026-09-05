import React from 'react';
import './Projects.css';

const linkIcons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  demo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
};

const linkLabels = {
  github: 'Source',
  demo: 'Live demo'
};

const Projects = () => {
  const projects = [
    {
      title: 'Emergency Resource Locator',
      context: 'SwampHacks, University of Florida',
      description:
        'Location-first crisis web app that surfaces nearby hospitals, pharmacies, police and fire stations, shelters, and supermarkets on an interactive map. Queries the OpenStreetMap Overpass API over a browser geolocation hook, parsing OSM opening_hours tags for live open/closed status and computing haversine distances for ranking. Hardened for degraded networks with round-robin failover across multiple Overpass endpoints and AbortController-based request timeouts. Adds community hazard reporting, emergency contacts, resource sharing, and an "I\'m Safe" status broadcast, with client-side persistence so state survives reloads.',
      tags: ['React 19', 'Vite', 'Leaflet', 'Overpass API', 'Geolocation', 'OpenStreetMap'],
      links: [
        { type: 'demo', url: 'https://emergency-resource-locator-two.vercel.app' },
        { type: 'github', url: 'https://github.com/Sridhar-97k/emergency-resource-locator' }
      ]
    },
    {
      title: 'Distributed Reddit Clone',
      context: 'Distributed Operating System Principles',
      description:
        'Reddit-style social platform built on the Erlang/BEAM VM using the Actor Model, with a central engine actor owning all state and independent client actors communicating solely through OTP message passing — no shared mutable state or locks. Implements subreddits, hierarchical comments, voting and karma, feed generation, and direct messaging across 20+ typed message handlers. Exposed through an 11-endpoint REST API with an interactive CLI client, plus a Zipf-distributed client simulator that sustained 2,700+ ops/sec at 1,000 simulated users (P95 latency ~216 µs). Adds RSA-2048/SHA-256 post signing with tamper and wrong-key detection; validated by a 10-test suite across ~6,500 lines and 19 modules.',
      tags: ['Gleam', 'Erlang/BEAM', 'Actor Model', 'OTP', 'REST API', 'RSA-2048']
    },
    {
      title: 'Pothole Detection and Maintenance System',
      description:
        'End-to-end prototype for detecting road surface conditions using camera images and a MobileNet-based classifier. Integrated GPS and Google Maps APIs for location tracking and AWS IoT for cloud-based notifications; explored edge-device integration using Arduino.',
      tags: ['MobileNet', 'Computer Vision', 'AWS IoT', 'GPS', 'Google Maps API', 'Arduino']
    }
  ];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3>{project.title}</h3>
            {project.context && <p className="project-context">{project.context}</p>}
            <p>{project.description}</p>
            <div className="project-footer">
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              {project.links && (
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {linkIcons[link.type]}
                      <span>{link.label || linkLabels[link.type]}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
