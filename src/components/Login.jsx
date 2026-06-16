// src/components/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </div>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to your account</p>

        {error && (
          <div className="login-message error">
            <span className="login-message-icon">⚠️</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">Sign In</button>
        </form>

        <div className="login-links">
          <Link to="/forgot-password" className="login-forgot">Forgot password?</Link>
          <p className="login-signup">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .login-card {
          max-width: 440px;
          width: 100%;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease;
        }
        .login-card:hover {
          transform: translateY(-4px);
        }
        .login-icon {
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
        .login-icon svg {
          width: 32px;
          height: 32px;
          color: white;
        }
        .login-card h2 {
          text-align: center;
          font-size: 1.875rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.25rem;
        }
        .login-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        .login-message {
          padding: 0.875rem;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: fadeIn 0.3s ease;
        }
        .login-message.error {
          background: #fee2e2;
          color: #b91c1c;
          border-left: 4px solid #ef4444;
        }
        .login-message-icon {
          font-size: 1.25rem;
        }
        .login-input-group {
          margin-bottom: 1.5rem;
        }
        .login-input-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .login-input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 1rem;
          transition: all 0.2s;
          background: white;
          box-sizing: border-box;
        }
        .login-input-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        /* Scoped button style – only inside .login-card */
        .login-card .login-submit-btn {
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
        .login-card .login-submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .login-links {
          text-align: center;
          margin-top: 1.5rem;
        }
        .login-forgot {
          display: inline-block;
          font-size: 0.875rem;
          color: #667eea;
          text-decoration: none;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        .login-forgot:hover {
          text-decoration: underline;
        }
        .login-signup {
          font-size: 0.875rem;
          color: #6b7280;
        }
        .login-signup a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }
        .login-signup a:hover {
          text-decoration: underline;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .login-card { padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Login;