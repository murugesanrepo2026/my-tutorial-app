// src/components/ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="cu-wrapper">
      <div className="cu-container">
        {/* Main Heading */}
        <div className="cu-heading-wrapper">
          <h1 className="cu-main-heading">Contact Us</h1>
          <div className="cu-heading-underline"></div>
        </div>

        {/* Header section - existing */}
        <div className="cu-header">
          <h2>Let's Talk</h2>
          <p>Have a project in mind or just want to say hello? We'd love to hear from you.</p>
        </div>

        <div className="cu-grid">
          {/* Contact Info Cards */}
          <div className="cu-info-side">
            <div className="cu-info-card">
              <div className="cu-info-icon">📧</div>
              <h3>Email Us</h3>
              <p>support@dreamztouch.in</p>
              <p>careers@dreamztouch.in</p>
            </div>
            <div className="cu-info-card">
              <div className="cu-info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Ambattur, Chennai – 600053</p>
              <p>India</p>
            </div>
            <div className="cu-info-card">
              <div className="cu-info-icon">⏰</div>
              <h3>Business Hours</h3>
              <p>Mon – Fri: 9:00 AM – 9:00 PM IST</p>
            </div>
            <div className="cu-info-card">
              <div className="cu-info-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 9342138238</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cu-form-side">
            <form onSubmit={handleSubmit}>
              <div className="cu-form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="cu-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                />
              </div>
              <div className="cu-form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="cu-button-wrapper">
                <button type="submit" className="cu-submit-btn">
                  Send Message →
                </button>
              </div>
              {submitted && <div className="cu-success-msg">✓ Thanks! We'll get back to you soon.</div>}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .cu-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .cu-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        /* Main heading styles (matching About Us) */
        .cu-heading-wrapper {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .cu-main-heading {
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
        .cu-heading-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #c084fc, #fff);
          border-radius: 4px;
          margin: 0 auto;
        }
        /* Header / subheading */
        .cu-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .cu-header h2 {
          font-size: 2rem;
          font-weight: 700;
          background: rgba(255,255,255,0.95);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }
        .cu-header p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
        }
        .cu-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
        }
        .cu-info-side {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cu-info-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: all 0.2s ease;
        }
        .cu-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .cu-info-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .cu-info-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin: 0 0 0.5rem 0;
        }
        .cu-info-card p {
          margin: 0.3rem 0;
          color: #374151;
          line-height: 1.4;
        }
        .cu-form-side {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        }
        .cu-form-group {
          margin-bottom: 1.5rem;
        }
        .cu-form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
        }
        .cu-form-group input,
        .cu-form-group textarea {
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
        .cu-form-group input:focus,
        .cu-form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        /* Button wrapper for centering */
        .cu-button-wrapper {
          text-align: center;
          margin-top: 0.5rem;
        }
        .cu-submit-btn {
          width: auto;              /* Remove full width */
          padding: 0.6rem 1.8rem;  /* Similar to subscribe button */
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
        .cu-submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .cu-success-msg {
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
          .cu-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .cu-main-heading { font-size: 2.5rem; }
          .cu-header h2 { font-size: 1.75rem; }
          .cu-form-side { padding: 1.5rem; }
          .cu-submit-btn {
            width: 100%;   /* On mobile, full width might be better for touch */
          }
          .cu-button-wrapper {
            text-align: stretch;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;