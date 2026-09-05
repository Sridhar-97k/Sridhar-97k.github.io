import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title:
        'Bounded Mission–Compute Contract for Safe Integration of Adaptive Mission Computation in Spacecraft',
      authors:
        "D. Ojika, N. Bakhati, P. D'Alessandro, A. Osuch, J. K. Teo, S. Goya Perloiro, J. Lee, M. Nolle, E. Lim, B. Cragin, I. Pier, L. Kwon, and S. Kumar",
      venue: 'IEEE Aerospace Conference',
      location: 'Big Sky, MT',
      year: '2027',
      status: 'Abstract accepted; full paper in preparation'
    },
    {
      title:
        'FLAP-0: Lessons from Designing a KiboCUBE-Class Mission Using a Modular, AI-Native CubeSat Architecture',
      authors:
        "D. Ojika, N. Bakhati, P. D'Alessandro, A. Osuch, J. K. Teo, S. Goya Perloiro, J. Lee, M. Nolle, E. Lim, B. Cragin, I. Pier, L. Kwon, and S. Kumar",
      venue: '39th Annual Small Satellite Conference',
      location: 'Salt Lake City, UT',
      year: '2026',
      status: 'Accepted'
    },
    {
      title: 'Pothole Detection and Maintenance System',
      authors: 'D. A. Kulkarni, A. Salunke, H. Dadhich, R. Kumar, and S. Kumar',
      venue:
        'International Journal of Engineering, Applied and Management Sciences Paradigms (IJEAM)',
      details: 'vol. 54, no. 3, pp. 257–261',
      year: '2019',
      status: 'Published'
    }
  ];

  const statusModifier = (status) => {
    if (status === 'Published') return 'published';
    if (status === 'Accepted') return 'accepted';
    return 'pending';
  };

  // Bold the author's own name within the citation author list.
  const renderAuthors = (authors) =>
    authors.split(/(S\. Kumar)/g).map((part, idx) =>
      part === 'S. Kumar' ? <strong key={idx}>{part}</strong> : part
    );

  return (
    <section className="publications">
      <h2>Publications</h2>
      <ol className="publication-list">
        {publications.map((pub, index) => (
          <li
            key={index}
            className="publication-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="publication-head">
              <h3>{pub.title}</h3>
              <span className="publication-year">{pub.year}</span>
            </div>
            <p className="publication-authors">{renderAuthors(pub.authors)}</p>
            <p className="publication-venue">
              <em>{pub.venue}</em>
              {pub.details && <span>, {pub.details}</span>}
              {pub.location && <span>, {pub.location}</span>}
            </p>
            <span className={`publication-status status-${statusModifier(pub.status)}`}>
              {pub.status}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Publications;
