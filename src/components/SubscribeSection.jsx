// src/components/SubscribeSection.jsx
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log('Clicked, email:', email);

    if (!email || !email.includes('@')) {
      setMsg('❌ Valid email required');
      setTimeout(() => setMsg(''), 2500);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setMsg(`✅ ${data.message}`);
        setEmail('');
      } else {
        setMsg(`❌ ${data.error}`);
      }
    } catch (error) {
      setMsg('❌ Cannot connect to server');
    }
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <div className="subs-wrapper">
      <div className="subs-card">
        <div className="subs-icon">📧</div>
        <h3>Subscribe to Dreamz Touch Tutorial</h3>
        <p>We request you to subscribe to our newsletter for upcoming updates.</p>
        <form onSubmit={handleSubscribe} className="subs-form">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {msg && <div className="subs-message">{msg}</div>}
      </div>

      <style>{`
        .subs-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;           /* reduced outer padding */
          background: transparent;
        }
        .subs-card {
          max-width: 1900px;
          width: 90%;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 1.5rem 2rem;    /* reduced vertical padding → smaller height */
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .subs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .subs-icon {
          font-size: 2.5rem;       /* slightly smaller icon */
          margin-bottom: 0.25rem;
        }
        .subs-card h3 {
          font-size: 1.6rem;       /* slightly smaller heading */
          font-weight: 800;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.25rem;
        }
        .subs-card p {
          color: #4b5563;
          margin-bottom: 1rem;     /* less space */
          font-size: 0.9rem;
        }
        .subs-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;  /* center items horizontally */
          align-items: center;
          gap: 0.75rem;             /* smaller gap */
          margin-bottom: 0.5rem;
        }
        .subs-form input {
          width: 280px;             /* fixed narrower width */
          max-width: 100%;
          padding: 0.6rem 1rem;     /* slightly smaller padding */
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          font-size: 0.95rem;
          transition: all 0.2s;
          background: white;
          box-sizing: border-box;
        }
        .subs-form input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.2);
        }
        .subs-form button {
          padding: 0.6rem 1.5rem;   /* balanced padding */
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 1rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .subs-form button:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 20px -5px rgba(102,126,234,0.4);
        }
        .subs-message {
          margin-top: 0.75rem;
          padding: 0.5rem;
          border-radius: 1rem;
          background: #dcfce7;
          color: #15803d;
          font-weight: 500;
          font-size: 0.9rem;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 560px) {
          .subs-card { padding: 1rem 1.5rem; }
          .subs-card h3 { font-size: 1.3rem; }
          .subs-form { flex-direction: column; gap: 0.5rem; }
          .subs-form input { width: 100%; }
          .subs-form button { width: 100%; white-space: normal; }
        }
      `}</style>
    </div>
  );
};

export default SubscribeSection;