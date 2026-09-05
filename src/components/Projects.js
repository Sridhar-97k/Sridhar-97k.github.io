import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Emergency Resource Locator',
      context: 'SwampHacks, University of Florida',
      description:
        'Location-first crisis web app that surfaces nearby hospitals, pharmacies, police and fire stations, shelters, and supermarkets on an interactive map. Queries the OpenStreetMap Overpass API over a browser geolocation hook, parsing OSM opening_hours tags for live open/closed status and computing haversine distances for ranking. Hardened for degraded networks with round-robin failover across multiple Overpass endpoints and AbortController-based request timeouts. Adds community hazard reporting, emergency contacts, resource sharing, and an "I\'m Safe" status broadcast, with client-side persistence so state survives reloads.',
      tags: ['React 19', 'Vite', 'Leaflet', 'Overpass API', 'Geolocation', 'OpenStreetMap']
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
            <div className="tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
