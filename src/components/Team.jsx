// src/components/Team.jsx
import React from 'react';

const Team = () => {
  // Team member data (customize with real names/roles if needed)
  const teamMembers = [
    { name: "Murugesan", role: "Founder & Lead Trainer", exp: "15+ years", icon: "👩‍🏫" },
    { name: "Arun Kumar", role: "Senior Software Architect", exp: "10+ years", icon: "💻" },
    { name: "Priya ", role: "Head of Online Training", exp: "11+ years", icon: "🎓" },
    { name: "Rajesh", role: "Full-Stack Developer", exp: "12+ years", icon: "⚙️" },
    { name: "Lakshmi Narayan", role: "Content Strategist", exp: "14+ years", icon: "📚" },
    { name: "Divya Mohan", role: "IT Solutions Consultant", exp: "10+ years", icon: "🚀" },
  ];

  return (
    <div className="team-wrapper">
      <div className="team-container">
        {/* Main Heading */}
        <div className="team-heading-wrapper">
          <h1 className="team-main-heading">Our Team</h1>
          <div className="team-heading-underline"></div>
        </div>

        {/* Hero Section */}
        <div className="team-card team-hero">
          <h2>Team @ Dreamz Touch</h2>
          <p>
            We are a bunch of professionals from almost each corner of India, educated from different institutes, 
            with technical and non-technical backgrounds, and with many other non‑commonalities – but we share 
            one thing: <strong>striving hard to bring the highest quality tutorials, training, and IT solutions</strong> 
            for our lovely learners and clients.
          </p>
          <p className="team-highlight">
            It took us over <strong>15+ years</strong> of collective experience in training, development, and 
            IT solutions to build this platform. Our expertise spans across industries, technologies, and 
            teaching methodologies.
          </p>
        </div>

        {/* Statistics / Key metrics */}
        <div className="team-stats">
          <div className="team-stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="team-stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Trainers</span>
          </div>
          <div className="team-stat-card">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="team-stat-card">
            <span className="stat-number">200+</span>
            <span className="stat-label">Corporate Clients</span>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team-grid-title-wrapper">
          <h2 className="team-grid-title">Meet Our Core Team</h2>
          <div className="team-title-underline"></div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-member-card" key={idx}>
              <div className="team-icon">{member.icon}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-exp">📅 {member.exp} experience</p>
            </div>
          ))}
        </div>

        {/* Our Philosophy */}
        <div className="team-card team-philosophy">
          <h2>Our Philosophy</h2>
          <p>
            We believe that great learning happens when passionate teachers meet curious students. 
            Our team includes former professors, industry veterans, startup founders, and coding enthusiasts – 
            all united by the goal to make education <strong>free, accessible, and practical</strong>.
          </p>
          <p>
            Whether it's a 15-year‑old student learning Python or a working professional upgrading to AI/ML, 
            we put the same dedication into every tutorial, every training session, and every IT solution we deliver.
          </p>
          <div className="philosophy-quote">
            “Learn from the experienced. Build with the experts.”
          </div>
        </div>
      </div>

      <style>{`
        .team-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .team-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        /* Main heading */
        .team-heading-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }
        .team-main-heading {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #f0e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .team-heading-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #c084fc, #fff);
          border-radius: 4px;
          margin: 0 auto;
        }
        /* Generic card style */
        .team-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 1.75rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .team-card h2 {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }
        .team-card p {
          color: #374151;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .team-highlight {
          font-size: 1.05rem;
          border-left: 4px solid #667eea;
          padding-left: 1rem;
        }
        /* Stats cards */
        .team-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .team-stat-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s;
        }
        .team-stat-card:hover {
          transform: translateY(-4px);
        }
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #4b5563;
          font-weight: 500;
        }
        /* Team grid section title */
        .team-grid-title-wrapper {
          text-align: center;
          margin: 1.5rem 0 1rem;
        }
        .team-grid-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #f0e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }
        .team-title-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #fff, #c084fc);
          border-radius: 3px;
          margin: 0 auto;
        }
        /* Team members grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .team-member-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.2s;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }
        .team-member-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .team-icon {
          font-size: 3rem;
          margin-bottom: 0.75rem;
        }
        .team-member-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e1e2f;
          margin-bottom: 0.25rem;
        }
        .team-role {
          font-weight: 600;
          color: #667eea;
          margin-bottom: 0.5rem;
        }
        .team-exp {
          font-size: 0.9rem;
          color: #6b7280;
        }
        /* Philosophy section */
        .team-philosophy {
          text-align: center;
        }
        .philosophy-quote {
          font-style: italic;
          font-size: 1.2rem;
          color: #4b5563;
          border-top: 2px dashed #cbd5e1;
          border-bottom: 2px dashed #cbd5e1;
          padding: 1rem;
          margin-top: 1rem;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .team-wrapper { padding: 1rem; }
          .team-main-heading { font-size: 2.2rem; }
          .team-card { padding: 1.25rem; }
          .team-grid-title { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
};

export default Team;