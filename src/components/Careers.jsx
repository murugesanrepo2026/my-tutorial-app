// src/components/Careers.jsx
import React, { useState } from 'react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('experience', formData.experience);
    data.append('message', formData.message);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }

    try {
      const response = await fetch('http://localhost:3001/api/careers/apply', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          resume: null,
        });
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } else {
        alert(result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Network error. Please check your connection.');
    }
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Data Analytics and Data Science Trainer",
      description: "We are looking for an experienced trainer to conduct online/in-person training in Data Analytics and Data Science. Expertise in Python, Pandas, NumPy, Matplotlib, Seaborn, SQL, Tableau, Power BI, and ML fundamentals required.",
      type: "Full‑time / Part‑time",
      location: "Chennai (WFH option for freelance)",
      requirements: ["3+ years industry experience", "Prior teaching/training experience", "Strong communication skills"]
    },
    {
      id: 2,
      title: "AWS / Microsoft Azure Trainer",
      description: "Seeking certified trainers with hands‑on experience in AWS (EC2, S3, Lambda, RDS, etc.) or Microsoft Azure (VMs, Functions, Storage, etc.). Ability to deliver cloud certification training.",
      type: "Full‑time / Freelance",
      location: "Chennai or Remote",
      requirements: ["AWS/Azure Certification preferred", "2+ years cloud experience", "Training delivery experience"]
    },
    {
      id: 3,
      title: "Tally / Prime Trainer",
      description: "Experienced Tally Professional to teach Tally ERP 9, Tally Prime – accounting, inventory, GST, payroll. Should have practical industry knowledge.",
      type: "Full‑time / Part‑time",
      location: "Chennai (Work From Office)",
      requirements: ["Tally certification", "5+ years of Tally usage", "Good presentation skills"]
    },
    {
      id: 4,
      title: "SAP Trainer",
      description: "Trainer for SAP modules (FICO, MM, SD, HCM, or Basis). Responsible for delivering instructor‑led training, creating course materials, and hands‑on exercises.",
      type: "Full‑time / Freelance",
      location: "Chennai / Remote",
      requirements: ["SAP certification in any module", "4+ years of real‑world SAP experience", "Training experience preferred"]
    },
    {
      id: 5,
      title: "Digital Marketing Trainer",
      description: "Trainer for SEO, SEM, Social Media Marketing, Google Ads, Analytics, Email Marketing, Content Marketing. Practical, case‑study based training.",
      type: "Full‑time / Part‑time",
      location: "Chennai",
      requirements: ["3+ years digital marketing experience", "Industry certifications (Google, HubSpot, etc.)", "Ability to teach beginners"]
    },
    {
      id: 6,
      title: "Part Time Trainers (Multiple Technologies)",
      description: "Experienced online trainers for any of the following technologies:",
      technologies: [
        "Java Full Stack", "Python Full Stack", "Web Full Stack",
        "Data Science with Python", "Machine Learning", "Blockchain for Beginners",
        "DevOps for Beginners", "Data Structures", "AWS Certifications"
      ],
      type: "Freelance / Part‑time",
      location: "Remote (Work from Home) or Chennai (Full‑time)"
    },
    {
      id: 7,
      title: ".Net Content Engineers",
      description: "Talented technical content engineers to create tutorials using .Net technologies (VB.Net, C#, .Net, etc.). Share your profile with writing samples.",
      type: "Freelance or Full‑time",
      location: "Remote or Chennai"
    },
    {
      id: 8,
      title: "Technical Content Engineers",
      description: "Create technical content in C, C++, Python, Java, Android, Web Technologies. Share your published work.",
      type: "Freelance or Full‑time",
      location: "Remote or Chennai"
    }
  ];

  return (
    <div className="cr-wrapper">
      <div className="cr-container">
        {/* Main Heading */}
        <div className="cr-heading-wrapper">
          <h1 className="cr-main-heading">Careers</h1>
          <div className="cr-heading-underline"></div>
        </div>

        {/* Header section */}
        <div className="cr-card cr-header-card">
          <h2>Latest Job Openings</h2>
          <p>
            We have multiple positions open in our organization. If you have relevant experience and 
            are passionate about teaching, content creation, or IT solutions – send your profile immediately 
            and become a part of the <strong>Dreamz Touch</strong> family.
          </p>
          <div className="cr-highlight">
            📍 All full‑time positions are based in <strong>Ambattur, Chennai</strong>. Remote options available for selected freelance roles.
          </div>
        </div>

        {/* Job Listings */}
        <div className="cr-jobs-grid">
          {jobOpenings.map(job => (
            <div className="cr-job-card" key={job.id}>
              <h3>{job.title}</h3>
              <div className="cr-job-meta">
                <span className="cr-job-type">{job.type}</span>
                <span className="cr-job-location">📍 {job.location}</span>
              </div>
              <p>{job.description}</p>
              {job.technologies && (
                <div className="cr-job-tech">
                  <strong>Technologies:</strong>
                  <div className="cr-tech-tags">
                    {job.technologies.map((tech, idx) => (
                      <span key={idx} className="cr-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              {job.requirements && (
                <div className="cr-job-reqs">
                  <strong>Requirements:</strong>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Remuneration Note */}
        <div className="cr-card cr-remuneration">
          <h2>💼 Remuneration</h2>
          <p>Remuneration is not a constraint for the right resource – let's discuss and find a mutually rewarding fit.</p>
        </div>

        {/* Application Form */}
        <div className="cr-card cr-form-card" id="apply-form">
          <h2>📝 How to Apply?</h2>
          <p>Fill out the form below. Our HR team will get back to you within 5‑7 business days.</p>
          <form onSubmit={handleSubmit}>
            <div className="cr-form-row">
              <div className="cr-form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="cr-form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="cr-form-row">
              <div className="cr-form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="cr-form-group">
                <label>Position Applying For *</label>
                <select name="position" value={formData.position} onChange={handleChange} required>
                  <option value="">Select a position</option>
                  <option>Data Analytics and Data Science Trainer</option>
                  <option>AWS / Microsoft Azure Trainer</option>
                  <option>Tally / Prime Trainer</option>
                  <option>SAP Trainer</option>
                  <option>Digital Marketing Trainer</option>
                  <option>Part Time Trainers</option>
                  <option>.Net Content Engineers</option>
                  <option>Technical Content Engineers</option>
                  <option>Other (please specify in message)</option>
                </select>
              </div>
            </div>
            <div className="cr-form-row">
              <div className="cr-form-group">
                <label>Years of Experience *</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g., 3+ years" required />
              </div>
              <div className="cr-form-group">
                <label>Upload Resume (PDF/DOC) *</label>
                <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
              </div>
            </div>
            <div className="cr-form-group full-width">
              <label>Cover Letter / Additional Info</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us why you'd be a great fit..."></textarea>
            </div>
            <div className="cr-button-wrapper">
              <button type="submit" className="cr-submit-btn">Submit Application →</button>
            </div>
            {submitted && <div className="cr-success-msg">✓ Application received! We'll contact you soon.</div>}
          </form>
        </div>

        {/* Work Location */}
        <div className="cr-card cr-location-card">
          <h2>🏢 Work Location</h2>
          <p>
            <strong>Dreamz Touch Technologies</strong><br />
            3rd Floor, Singapore Complex,<br />
            Ambattur O.T, Chennai – 600053<br />
            Tamil Nadu, INDIA
          </p>
        </div>
      </div>

      <style>{`
        .cr-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .cr-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        /* Main heading */
        .cr-heading-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }
        .cr-main-heading {
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
        .cr-heading-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #c084fc, #fff);
          border-radius: 4px;
          margin: 0 auto;
        }
        /* Generic card */
        .cr-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 1.75rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .cr-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .cr-card h2 {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.75rem;
        }
        .cr-card p {
          color: #374151;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .cr-highlight {
          background: rgba(102,126,234,0.1);
          border-left: 4px solid #667eea;
          padding: 0.75rem;
          border-radius: 0.75rem;
          color: #1e1e2f;
        }
        /* Job grid */
        .cr-jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .cr-job-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: all 0.2s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .cr-job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .cr-job-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e1e2f;
          margin-bottom: 0.5rem;
        }
        .cr-job-meta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .cr-job-type {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .cr-job-location {
          color: #4b5563;
          font-size: 0.85rem;
        }
        .cr-job-tech {
          margin: 0.75rem 0;
        }
        .cr-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .cr-tech-tag {
          background: rgba(102,126,234,0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.8rem;
          color: #1e1e2f;
        }
        .cr-job-reqs ul {
          margin-top: 0.5rem;
          padding-left: 1.25rem;
          color: #374151;
        }
        .cr-job-reqs li {
          margin-bottom: 0.25rem;
        }
        /* Form styling */
        .cr-form-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .cr-form-group {
          flex: 1;
          min-width: 200px;
          margin-bottom: 1rem;
        }
        .full-width {
          flex: 1 1 100%;
        }
        .cr-form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
        }
        .cr-form-group input,
        .cr-form-group select,
        .cr-form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 1rem;
          transition: all 0.2s;
          background: white;
          font-family: inherit;
          box-sizing: border-box;
        }
        .cr-form-group input:focus,
        .cr-form-group select:focus,
        .cr-form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        .cr-form-group input[type="file"] {
          padding: 0.5rem;
          border: 2px dashed #e5e7eb;
          background: #f9fafb;
        }
        /* Button wrapper for centering */
        .cr-button-wrapper {
          text-align: center;
          margin-top: 0.5rem;
        }
        .cr-submit-btn {
          width: auto;                /* Remove full width */
          padding: 0.6rem 1.8rem;    /* Match subscribe button */
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 1rem;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-block;
        }
        .cr-submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .cr-success-msg {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #dcfce7;
          color: #15803d;
          border-radius: 1rem;
          text-align: center;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .cr-wrapper { padding: 1rem; }
          .cr-main-heading { font-size: 2.2rem; }
          .cr-card { padding: 1.25rem; }
          .cr-jobs-grid { grid-template-columns: 1fr; }
          /* On mobile, full width may be better, but optional */
          .cr-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;