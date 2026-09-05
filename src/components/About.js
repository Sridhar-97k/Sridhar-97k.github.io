import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi! I'm a Software Engineer pursuing my Master's in Computer Science at the University of Florida.
        I spent over five years at Cadence Design Systems building Xtensa Xplorer, a production-grade Eclipse RCP
        IDE for customizable embedded processors, working on memory architecture tooling, multi-core subsystems,
        and UI test automation. More recently I worked at Flapmax on FLAP-0, an open FPGA avionics platform for a
        3U CubeSat, spanning SystemVerilog RTL, a C++/DPI co-simulation bridge, and Python mission software.
        I'm drawn to systems programming, developer tooling, and distributed systems — and to the testing and
        CI/CD infrastructure that keeps them honest.
      </p>
    </section>
  );
};

export default About;
