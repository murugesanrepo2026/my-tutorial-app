// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import InterviewsMenu from './InterviewsMenu';
import { useAuth } from '../context/AuthContext';
import CompilersMenu from './CompilersMenu';  

const Header = ({ searchTerm, setSearchTerm }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInterviewsMenu, setShowInterviewsMenu] = useState(false);
  const [showCompilersMenu, setShowCompilersMenu] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="header-dark">
      <div className="header-container">
        {/* Logo */}
        {/* <div className="logo-area">
          <img src="/dreamz.jpeg" alt="Dreamz Touch" className="logo-icon" />
          <span className="logo-text">Dreamz Touch</span>
        </div> */}

        <a href="/home" className="logo-area" style={{ textDecoration: 'none' }}>
          <img src="/dreamz.jpeg" alt="Dreamz Touch" className="logo-icon" />
          <span className="logo-text">Dreamz Touch Tutorial</span>
        </a>

        {/* Search */}
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search tutorials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          {/* Tutorials with MegaMenu */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <span className="nav-link">📘 Tutorials</span>
            {showMenu && <div className="dropdown-wrapper"><MegaMenu /></div>}
          </div>

          <div
              className="nav-item"
              onMouseEnter={() => setShowInterviewsMenu(true)}
              onMouseLeave={() => setShowInterviewsMenu(false)}
              >
              <span className="nav-link">🎤 Interviews</span>
              {showInterviewsMenu && (
                <div className="dropdown-wrapper">
                  <InterviewsMenu />
                </div>
              )}
          </div>
          {/* Compilers */}
          {/* <a href="/compilers" className="nav-link" target="_blank" rel="noopener noreferrer">
            ⚙️ Compilers
          </a> */}

           {/* Compilers with dropdown – matches Tutorials/Interviews */}
          <div
            className="nav-item"
            onMouseEnter={() => setShowCompilersMenu(true)}
            onMouseLeave={() => setShowCompilersMenu(false)}
          >
            <span className="nav-link">⚙️ Compilers</span>
            {showCompilersMenu && (
              <div className="dropdown-wrapper">
                <CompilersMenu />
              </div>
            )}
          </div>


          {/* User / Login */}
          {user ? (
            <div className="user-area">
              <span className="user-greeting">👋 {user.firstName}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="nav-link">🔐 Login</Link>
          )}
        </nav>
      </div>

      {/* Styles – matches footer’s dark gradient & glass elements */}
      <style>{`
        .header-dark {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        /* Logo */
        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-icon {
          height: 42px;
          width: auto;
          border-radius: 12px;
          transition: transform 0.2s;
        }
        .logo-icon:hover {
          transform: scale(1.02);
        }
        .logo-text {
          font-size: 1.6rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #c084fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
        }
        /* Search */
        .search-wrapper {
          flex: 1;
          max-width: 380px;
          min-width: 200px;
        }
        .search-input {
          width: 100%;
          padding: 0.6rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2rem;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          backdrop-filter: blur(4px);
          transition: all 0.2s;
        }
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        .search-input:focus {
          outline: none;
          border-color: #c084fc;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.2);
        }
        /* Navigation */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          flex-wrap: wrap;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #e0e0e0;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.5rem 0;
          transition: color 0.2s, transform 0.2s;
        }
        .nav-link:hover {
          color: #c084fc;
          transform: translateY(-1px);
        }
        /* Dropdown wrapper – glass, dark theme */
        .dropdown-wrapper {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.75rem;
          background: rgba(26, 26, 46, 0.98);
          backdrop-filter: blur(12px);
          border-radius: 1.25rem;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(192, 132, 252, 0.3);
          z-index: 1050;
        

          width: max-content;
          max-width: 90vw;
        }
        /* User menu */
        .user-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-greeting {
          font-weight: 500;
          color: #e0e0e0;
        }
        .logout-btn {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          border: none;
          padding: 0.3rem 0.9rem;
          border-radius: 2rem;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .logout-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
        }
        /* Responsive */
        @media (max-width: 900px) {
          .header-container {
            flex-direction: column;
            align-items: stretch;
            padding: 1rem;
          }
          .search-wrapper {
            max-width: none;
          }
          .nav-links {
            justify-content: center;
            gap: 1.2rem;
          }
          .dropdown-wrapper {
            position: static;
            margin-top: 0.5rem;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;