import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'ML System Engineer Intern',
      company: 'Flapmax',
      location: 'Gainesville, FL',
      period: 'May 2026 – Aug 2026',
      subtitle: 'FLAP-0: open FPGA avionics platform for a 3U CubeSat (UNOOSA–JAXA KiboCUBE / Ghana CubeSat Mission)',
      highlights: [
        'Engineered a simulation-first, three-board CubeSat avionics stack (FPGA + Linux OBC + AI accelerator) spanning SystemVerilog RTL, a C++ SystemVerilog-DPI/ModelSim co-simulation bridge, and Python mission software',
        'Re-architected a monorepo into an 8-repository platform with dependency-ordered packaging and a one-command bootstrap (clone → build DLL → install → run 269 tests)',
        'Built a three-tier Azure DevOps CI/CD pipeline (269 unit tests) and a reproducible Docker test image; the containerized flow surfaced a cross-repo regression missed by ad-hoc installs',
        'Integrated a QEMU virtual OBC with NASA JPL F Prime flight software end-to-end for pre-hardware validation',
        'Implemented a swappable OpenVINO inference backend on the accelerator FPGA over an Open FPGA Stack (OFS) PCIe/MMIO transport; validated with real on-device inference',
        'Shipped a pre-hardware smoke test (18 checks) and 12 out-of-the-box demo applications doubling as regression tests; authored technical documentation and contributed to an FPT 2026 paper and poster'
      ]
    },
    {
      title: 'Software Engineer 2',
      company: 'Cadence Design Systems Inc',
      location: 'Pune, India',
      period: 'Oct 2019 – Jun 2025',
      subtitle: 'Xtensa Xplorer IDE — memory architecture tooling, multi-core subsystems, and UI test automation',
      highlights: [
        'Worked on Xtensa Xplorer, a production-grade Eclipse RCP IDE used to develop and debug software for customizable Xtensa processors, including single-core and multi-core embedded systems',
        'Maintained and enhanced Xtensa multi-core subsystem tooling (2+ core configurations), supporting development and debugging of concurrent, multi-core applications across customer and internal projects',
        'Designed and implemented a Linker Map Parser and visual editor from scratch to analyze GNU ld map files; used daily by application engineering teams to debug and validate application executables',
        'Contributed research, implementation, and product integration for Memory Protection Unit (MPU) features, supporting correctness- and safety-critical memory workflows within the IDE',
        'Enhanced the Memory Map Editor to support user-defined memory regions, configurable attributes, and flexible placement of sections and segments, enabling precise modeling of complex embedded memory architectures',
        'Maintained and extended 20–30 SWTBot-based UI tests and JUnit regressions, supporting daily test runs and helping ensure stability across IDE releases'
      ]
    },
    {
      title: 'R&D Intern',
      company: 'VMware Inc',
      location: 'Pune, India',
      period: 'Jun 2018 – Dec 2018',
      highlights: [
        "Designed and implemented a unit testing framework for the Internet Key Exchange (IKE) daemon within VMware's Network Security Business Unit, supporting end-to-end VPN connections across multiple NSX-Edge devices",
        'Built a flexible, dependency-light test harness configurable on a single Linux development machine, improving test isolation, repeatability, and developer productivity'
      ]
    }
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="experience-header">
              <div>
                <h3>{exp.title}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="separator">•</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            {exp.subtitle && <p className="experience-subtitle">{exp.subtitle}</p>}
            <ul className="highlights">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
