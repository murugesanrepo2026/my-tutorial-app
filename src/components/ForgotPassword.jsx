// src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await forgotPassword(email);
      setMessage('Check your email for a password reset link');
    } catch (err) {
      setError('Failed to send reset email. ' + (err.response?.data?.message || err.message));
    }
    setLoading(false);
  };

  return (
    <div className="fp-container">
      <div className="fp-card">
        <div className="fp-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <h2>Forgot password?</h2>
        <p className="fp-subtitle">No worries, we'll send you reset instructions</p>

        {error && (
          <div className="fp-message error">
            <span className="fp-message-icon">⚠️</span>
            {error}
          </div>
        )}
        {message && (
          <div className="fp-message success">
            <span className="fp-message-icon">✓</span>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="fp-input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="fp-submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="fp-spinner"></span>
                Sending...
              </>
            ) : (
              'Send reset link'
            )}
          </button>
        </form>

        <Link to="/login" className="fp-back-link">
          ← Back to login
        </Link>
      </div>

      <style>{`
        .fp-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .fp-card {
          max-width: 440px;
          width: 100%;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
        }
        .fp-card:hover {
          transform: translateY(-4px);
        }
        .fp-icon {
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
        .fp-icon svg {
          width: 32px;
          height: 32px;
          color: white;
        }
        .fp-card h2 {
          text-align: center;
          font-size: 1.875rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.5rem;
        }
        .fp-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }
        .fp-message {
          padding: 0.875rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 0.3s ease;
        }
        .fp-message.error {
          background: #fee2e2;
          color: #b91c1c;
          border-left: 4px solid #ef4444;
        }
        .fp-message.success {
          background: #dcfce7;
          color: #15803d;
          border-left: 4px solid #22c55e;
        }
        .fp-message-icon {
          font-size: 1.25rem;
        }
        .fp-input-group {
          margin-bottom: 1.5rem;
        }
        .fp-input-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .fp-input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 1rem;
          transition: all 0.2s;
          background: white;
        }
        .fp-input-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        /* Scoped button style – only inside .fp-card */
        .fp-card .fp-submit-btn {
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .fp-card .fp-submit-btn:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .fp-card .fp-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .fp-spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        .fp-back-link {
          display: inline-block;
          margin-top: 1.5rem;
          text-align: center;
          width: 100%;
          color: #6b7280;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .fp-back-link:hover {
          color: #667eea;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .fp-card { padding: 1.5rem; }
          .fp-card h2 { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}