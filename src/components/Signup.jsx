// src/components/Signup.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData);
      setMessage(res.message || 'Registration successful! Please check your email to verify.');
      setError('');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setMessage('');
    }
  };

  if (message) {
    return (
      <div className="sc-container">
        <div className="sc-card sc-success-card">
          <div className="sc-icon sc-success-icon">📧</div>
          <h2>Check your email</h2>
          <p>{message}</p>
          <p className="sc-success-text">
            After verification, you can <Link to="/login">login here</Link>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="sc-container">
      <div className="sc-card">
        <div className="sc-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <h2>Create Your Account</h2>
        <p className="sc-subtitle">Join us today</p>

        {error && (
          <div className="sc-message error">
            <span className="sc-message-icon">⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="sc-row">
            <div className="sc-input-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sc-input-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="sc-input-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="sc-input-group">
            <label>Mobile number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="+1234567890"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="sc-input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="sc-submit-btn">Sign Up</button>
        </form>

        <p className="sc-footer-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <style>{`
        .sc-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .sc-card {
          max-width: 480px;
          width: 100%;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
        }
        .sc-card:hover {
          transform: translateY(-4px);
        }
        .sc-success-card {
          text-align: center;
        }
        .sc-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transform: rotate(3deg);
          transition: transform 0.3s;
        }
        .sc-icon svg {
          width: 32px;
          height: 32px;
          color: white;
        }
        .sc-success-icon {
          background: #10b981;
          font-size: 2rem;
          transform: none;
        }
        .sc-card h2 {
          text-align: center;
          font-size: 1.875rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.25rem;
        }
        .sc-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .sc-message {
          padding: 0.875rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 0.3s ease;
        }
        .sc-message.error {
          background: #fee2e2;
          color: #b91c1c;
          border-left: 4px solid #ef4444;
        }
        .sc-message-icon {
          font-size: 1.25rem;
        }
        .sc-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .sc-row .sc-input-group {
          flex: 1;
          margin-bottom: 0;
        }
        .sc-input-group {
          margin-bottom: 1.25rem;
        }
        .sc-input-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .sc-input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 1rem;
          transition: all 0.2s;
          background: white;
          box-sizing: border-box;
        }
        .sc-input-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        /* Scoped button style – only inside .sc-card */
        .sc-card .sc-submit-btn {
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 1rem;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }
        .sc-card .sc-submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .sc-footer-text {
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 1.5rem;
        }
        .sc-footer-text a, .sc-success-text a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }
        .sc-footer-text a:hover, .sc-success-text a:hover {
          text-decoration: underline;
        }
        .sc-success-text {
          margin-top: 1rem;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 560px) {
          .sc-card { padding: 1.5rem; }
          .sc-row { flex-direction: column; gap: 0; }
          .sc-row .sc-input-group { margin-bottom: 1.25rem; }
        }
      `}</style>
    </div>
  );
};

export default Signup;