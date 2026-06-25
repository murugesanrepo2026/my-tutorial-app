// // src/components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="footer-wrapper">
//       <div className="footer-container">
//         <div className="footer-top">
//           {/* Contact Info */}
//           <div className="footer-section">
//             <h4>Contact Info</h4>
//             <p className="contact-detail">✉️ support@dreamztouch.in</p>
//             <p className="contact-detail">📍 Ambattur, Chennai</p>
//           </div>

//           {/* Follow Us */}
//           <div className="footer-section">
//             <h4>Follow Us</h4>
//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <div className="footer-links">
//               <Link to="/careers">Careers</Link>
//               <Link to="/team">Team</Link>
//               <Link to="/privacy-policy">Privacy Policy</Link>
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="copyright-text">© Copyright www.dreamztouch.in. All Rights Reserved.</p>
//         </div>
//       </div>

//       <style>{`
//         .footer-wrapper {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
//           color: #e0e0e0;
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
//           padding: 2rem 1rem 1rem;
//           margin-top: auto;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .footer-top {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 2rem;
//           padding-bottom: 2rem;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-section {
//           flex: 1;
//           min-width: 180px;
//         }
//         .footer-section h4 {
//           font-size: 1.25rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ffffff, #c084fc);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           margin-bottom: 1rem;
//           letter-spacing: -0.3px;
//         }
//         /* Contact details - white and bold */
//         .contact-detail {
//           margin: 0.5rem 0;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-size: 0.9rem;
//           color: white !important;
//           font-weight: 700 !important;
//         }
//         .social-icons {
//           display: flex;
//           gap: 1rem;
//           margin-top: 0.5rem;
//         }
//         .social-icons a {
//           color: #e0e0e0;
//           font-size: 1.5rem;
//           transition: all 0.2s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50%;
//           text-decoration: none;
//         }
//         .social-icons a:hover {
//           color: white;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           transform: translateY(-3px);
//         }
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }
//         .footer-links a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.9rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .footer-links a:hover {
//           color: #c084fc;
//           transform: translateX(4px);
//         }
//         .footer-bottom {
//           text-align: center;
//           padding-top: 1.5rem;
//         }
//         /* Copyright text - white and bold */
//         .copyright-text {
//           font-size: 0.85rem;
//           color: white !important;
//           font-weight: 700 !important;
//           margin: 0;
//         }
//         @media (max-width: 768px) {
//           .footer-top {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 1.5rem;
//           }
//           .footer-section {
//             text-align: center;
//           }
//           .contact-detail {
//             justify-content: center;
//           }
//           .social-icons {
//             justify-content: center;
//           }
//           .footer-links {
//             align-items: center;
//           }
//           .footer-links a:hover {
//             transform: translateX(0) scale(1.05);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;






// // src/components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// // ---------- DATA with unique icons ----------
// const tutorialItems = [
//   { name: 'C', path: '/tutorial/c', icon: '⚙️' },
//   { name: 'C++', path: '/tutorial/cpp', icon: '⚡' },
//   { name: 'Java', path: '/tutorial/java', icon: '☕' },
//   { name: 'Python', path: '/tutorial/python', icon: '🐍' },
//   { name: 'JavaScript', path: '/tutorial/javascript', icon: '🟨' },
//   { name: 'React Js', path: '/tutorial/react', icon: '⚛️' },
//   { name: 'Angular Js', path: '/tutorial/angular', icon: '🅰️' },
//   { name: 'MySQL', path: '/tutorial/mysql', icon: '🗄️' }
// ];

// const interviewItems = [
//   { name: 'C', path: '/interview/c', icon: '⚙️' },
//   { name: 'C++', path: '/interview/cpp', icon: '⚡' },
//   { name: 'Java', path: '/interview/java', icon: '☕' },
//   { name: 'Python', path: '/interview/python', icon: '🐍' },
//   { name: 'JavaScript', path: '/interview/javascript', icon: '🟨' },
//   { name: 'React Js', path: '/interview/react', icon: '⚛️' },
//   { name: 'Angular Js', path: '/interview/angular', icon: '🅰️' },
//   { name: 'MySQL', path: '/interview/mysql', icon: '🗄️' }
// ];

// const compilerList = [
//   { name: 'C', path: '/compiler/c', icon: '⚙️' },
//   { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
//   { name: 'Python', path: '/compiler/python', icon: '🐍' },
//   { name: 'Java', path: '/compiler/java', icon: '☕' },
//   { name: 'PHP', path: '/compiler/php', icon: '🐘' },
//   { name: 'C#', path: '/compiler/csharp', icon: '🎯' },
// ];

// // ----------------------------------------------------------------

// const Footer = () => {
//   const renderIcon = (item) => item.icon ? `${item.icon} ` : '';

//   return (
//     <footer className="footer-wrapper">
//       <div className="footer-container">
//         <div className="footer-top">
//           {/* Left side: Contact Info + Follow Us */}
//           <div className="footer-left-group">
//             <div className="footer-section contact-section">
//               <h4>Contact Info</h4>
//               <p className="contact-detail">✉️ support@dreamztouch.in</p>
//               <p className="contact-detail">📍 Ambattur, Chennai</p>
//             </div>

//             <div className="footer-section follow-section">
//               <h4>Follow Us</h4>
//               <div className="social-icons">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                   <i className="fab fa-facebook"></i>
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Top Tutorials - vertical list */}
//           <div className="footer-section">
//             <h4>Top Tutorials</h4>
//             <div className="footer-links">
//               {tutorialItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>
//                   {renderIcon(item)}{item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Interview Questions - vertical list */}
//           <div className="footer-section">
//             <h4>Interview Questions</h4>
//             <div className="footer-links">
//               {interviewItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>
//                   {renderIcon(item)}{item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Compilers - vertical list (same as others) */}
//           <div className="footer-section">
//             <h4>Compilers</h4>
//             <div className="footer-links">
//               {compilerList.map((comp, idx) => (
//                 <Link key={idx} to={comp.path}>
//                   {comp.icon} {comp.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links - vertical list */}
//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <div className="footer-links">
//               <Link to="/careers">Careers</Link>
//               <Link to="/team">Team</Link>
//               <Link to="/privacy-policy">Privacy Policy</Link>
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="copyright-text">© Copyright www.dreamztouch.in. All Rights Reserved.</p>
//         </div>
//       </div>

//       <style>{`
//         .footer-wrapper {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
//           color: #e0e0e0;
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
//           padding: 2rem 1rem 1rem;
//           margin-top: auto;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .footer-top {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 2rem;
//           padding-bottom: 2rem;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-left-group {
//           display: flex;
//           gap: 2rem;
//           flex-wrap: wrap;
//         }
//         .footer-section {
//           min-width: 150px;
//           text-align: left;   /* ensure left alignment */
//         }
//         .contact-section, .follow-section {
//           min-width: 160px;
//         }
//         .footer-section h4 {
//           font-size: 1.25rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ffffff, #c084fc);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           margin-bottom: 1rem;
//           letter-spacing: -0.3px;
//           text-align: left;
//         }
//         .contact-detail {
//           margin: 0.5rem 0;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-size: 0.9rem;
//           color: white !important;
//           font-weight: 700 !important;
//           justify-content: flex-start;
//         }
//         .social-icons {
//           display: flex;
//           gap: 1rem;
//           margin-top: 0.5rem;
//           justify-content: flex-start;
//         }
//         .social-icons a {
//           color: #e0e0e0;
//           font-size: 1.5rem;
//           transition: all 0.2s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50%;
//           text-decoration: none;
//         }
//         .social-icons a:hover {
//           color: white;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           transform: translateY(-3px);
//         }
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.4rem;
//           align-items: flex-start;
//         }
//         .footer-links a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.85rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .footer-links a:hover {
//           color: #c084fc;
//           transform: translateX(4px);
//         }
//         .footer-bottom {
//           text-align: center;
//           padding-top: 1.5rem;
//         }
//         .copyright-text {
//           font-size: 0.85rem;
//           color: white !important;
//           font-weight: 700 !important;
//           margin: 0;
//         }
//         /* Mobile: center everything */
//         @media (max-width: 900px) {
//           .footer-top {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }
//           .footer-section, .contact-section, .follow-section {
//             text-align: center;
//           }
//           .footer-section h4 {
//             text-align: center;
//           }
//           .contact-detail {
//             justify-content: center;
//           }
//           .social-icons {
//             justify-content: center;
//           }
//           .footer-links {
//             align-items: center;
//           }
//           .footer-links a:hover {
//             transform: translateX(0) scale(1.05);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;



// // src/components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// // ---------- DATA (same as before) ----------
// const tutorialItems = [
//   { name: 'C', path: '/tutorial/c', icon: '⚙️' },
//   { name: 'C++', path: '/tutorial/cpp', icon: '⚡' },
//   { name: 'Java', path: '/tutorial/java', icon: '☕' },
//   { name: 'Python', path: '/tutorial/python', icon: '🐍' },
//   { name: 'JavaScript', path: '/tutorial/javascript', icon: '🟨' },
//   { name: 'React Js', path: '/tutorial/react', icon: '⚛️' },
//   { name: 'Angular Js', path: '/tutorial/angular', icon: '🅰️' },
//   { name: 'MySQL', path: '/tutorial/mysql', icon: '🗄️' }
// ];

// const interviewItems = [
//   { name: 'C', path: '/interview/c', icon: '⚙️' },
//   { name: 'C++', path: '/interview/cpp', icon: '⚡' },
//   { name: 'Java', path: '/interview/java', icon: '☕' },
//   { name: 'Python', path: '/interview/python', icon: '🐍' },
//   { name: 'JavaScript', path: '/interview/javascript', icon: '🟨' },
//   { name: 'React Js', path: '/interview/react', icon: '⚛️' },
//   { name: 'Angular Js', path: '/interview/angular', icon: '🅰️' },
//   { name: 'MySQL', path: '/interview/mysql', icon: '🗄️' }
// ];

// const compilerList = [
//   { name: 'C', path: '/compiler/c', icon: '⚙️' },
//   { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
//   { name: 'Python', path: '/compiler/python', icon: '🐍' },
//   { name: 'Java', path: '/compiler/java', icon: '☕' },
//   { name: 'PHP', path: '/compiler/php', icon: '🐘' },
//   { name: 'C#', path: '/compiler/csharp', icon: '🎯' },
// ];


// // ----------------------------------------------------------------

// const Footer = () => {
//   const renderIcon = (item) => item.icon ? `${item.icon} ` : '';

//   return (
//     <footer className="footer-wrapper">
//       <div className="footer-container">
//         <div className="footer-top">
//           {/* Left group: Contact Info + Follow Us */}
//           <div className="footer-left-group">
//             <div className="footer-section contact-section">
//               <h4>Contact Info</h4>
//               <p className="contact-detail">✉️ support@dreamztouch.in</p>
//               <p className="contact-detail">📍 Ambattur, Chennai</p>
//             </div>
//             <div className="footer-section follow-section">
//               <h4>Follow Us</h4>
//               <div className="social-icons">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                   <i className="fab fa-facebook"></i>
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Top Tutorials */}
//           <div className="footer-section">
//             <h4>Top Tutorials</h4>
//             <div className="footer-links">
//               {tutorialItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>
//                   {renderIcon(item)}{item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Interview Questions */}
//           <div className="footer-section">
//             <h4>Interview Questions</h4>
//             <div className="footer-links">
//               {interviewItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>
//                   {renderIcon(item)}{item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Compilers */}
//           <div className="footer-section">
//             <h4>Compilers</h4>
//             <div className="footer-links">
//               {compilerList.map((comp, idx) => (
//                 <Link key={idx} to={comp.path}>
//                   {comp.icon} {comp.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links (horizontal row) */}
//           <div className="footer-section quicklinks-section">
//             <h4>Quick Links</h4>
//             <div className="quick-links-row">
//               <Link to="/careers">Careers</Link>
//               <Link to="/team">Team</Link>
//               <Link to="/privacy-policy">Privacy Policy</Link>
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="copyright-text">© Copyright www.dreamztouch.in. All Rights Reserved.</p>
//         </div>
//       </div>

//       <style>{`
//         .footer-wrapper {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
//           color: #e0e0e0;
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
//           padding: 2rem 1rem 1rem;
//           margin-top: auto;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .footer-top {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 1.5rem;
//           padding-bottom: 2rem;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-left-group {
//           display: flex;
//           gap: 1.5rem;
//           flex-wrap: wrap;
//         }
//         .footer-section {
//           flex: 1 1 auto;
//           min-width: 130px;
//           text-align: left;
//         }
//         .contact-section, .follow-section {
//           min-width: 140px;
//         }
//         .quicklinks-section {
//           min-width: auto;
//         }
//         .footer-section h4 {
//           font-size: 1.25rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ffffff, #c084fc);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           margin-bottom: 1rem;
//           letter-spacing: -0.3px;
//           text-align: left;
//         }
//         .contact-detail {
//           margin: 0.5rem 0;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-size: 0.9rem;
//           color: white !important;
//           font-weight: 700 !important;
//           justify-content: flex-start;
//         }
//         .social-icons {
//           display: flex;
//           gap: 1rem;
//           margin-top: 0.5rem;
//           justify-content: flex-start;
//         }
//         .social-icons a {
//           color: #e0e0e0;
//           font-size: 1.5rem;
//           transition: all 0.2s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50%;
//           text-decoration: none;
//         }
//         .social-icons a:hover {
//           color: white;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           transform: translateY(-3px);
//         }
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.4rem;
//           align-items: flex-start;
//         }
//         .footer-links a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.85rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .footer-links a:hover {
//           color: #c084fc;
//           transform: translateX(4px);
//         }
//         .quick-links-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//           align-items: center;
//         }
//         .quick-links-row a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.85rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .quick-links-row a:hover {
//           color: #c084fc;
//           transform: translateY(-2px);
//         }
//         .footer-bottom {
//           text-align: center;
//           padding-top: 1.5rem;
//         }
//         .copyright-text {
//           font-size: 0.85rem;
//           color: white !important;
//           font-weight: 700 !important;
//           margin: 0;
//         }
//         /* Prevent wrapping on large screens */
//         @media (min-width: 1200px) {
//           .footer-top {
//             flex-wrap: nowrap;
//           }
//         }
//         /* Mobile */
//         @media (max-width: 900px) {
//           .footer-top {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }
//           .footer-section, .contact-section, .follow-section {
//             text-align: center;
//           }
//           .footer-section h4 {
//             text-align: center;
//           }
//           .contact-detail {
//             justify-content: center;
//           }
//           .social-icons {
//             justify-content: center;
//           }
//           .footer-links {
//             align-items: center;
//           }
//           .footer-links a:hover {
//             transform: translateX(0) scale(1.05);
//           }
//           .quick-links-row {
//             flex-direction: column;
//             gap: 0.5rem;
//             align-items: center;
//           }
//           .quick-links-row a:hover {
//             transform: scale(1.05);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;






// // src/components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// // ---------- TUTORIALS (14 links) ----------
// const tutorialItems = [
//   { name: 'C', path: '/c-programming/c-tutorial', icon: '⚙️' },
//   { name: 'C++', path: '/c++-tutorial/c++-tutorial-basics', icon: '⚡' },
//   { name: 'Java', path: '/java/java-tutorial', icon: '☕' },
//   { name: 'Python', path: '/python/python-tutorial-[intro]', icon: '🐍' },
//   { name: 'HTML', path: '/html-tutorial/html-home', icon: '🌐' },
//   { name: 'CSS', path: '/css/css-tutorial', icon: '🎨' },
//   { name: 'JavaScript', path: '/javascript/javascript-tutorial', icon: '🟨' },
//   { name: 'SQL', path: '/sql/sql-home', icon: '🗄️' },
//   { name: 'React JS', path: '/reactjs/react-home', icon: '⚛️' },
//   { name: 'Node.js', path: '/node-js/node.js-home', icon: '🟢' },
//   { name: 'Spring Boot', path: '/springboot/spring-boot-tutorial', icon: '🍃' },
//   { name: 'C#', path: '/c#/.net-framework', icon: '🎯' },
//   { name: 'PHP', path: '/php/php-tutorial', icon: '🐘' },
//   { name: 'MySQL', path: '/mysql/mysql-home', icon: '🐬' }
// ];

// // ---------- INTERVIEW TOPICS (full array, we'll display first 10) ----------
// const allInterviewTopics = [
//   { name: "C Interview Questions", slug: "c-interview-questions", category: "Technical Interview" },
//   { name: "C++ Interview Questions", slug: "cpp-interview-questions", category: "Technical Interview" },
//   { name: "Java Interview Questions", slug: "java-interview-questions", category: "Technical Interview" },
//   { name: "Python Interview Questions", slug: "python-interview-questions", category: "Technical Interview" },
//   { name: ".NET Interview Questions", slug: "dotnet-interview-questions", category: "Technical Interview" },
//   { name: "C# Interview Questions", slug: "csharp-interview-questions", category: "Technical Interview" },
//   { name: "HR Interview Questions", slug: "hr-interview-questions", category: "Technical Interview" },
//   { name: "JDBC Interview Questions", slug: "jdbc-interview-questions", category: "Java & Backend" },
//   { name: "Spring Interview Questions", slug: "spring-interview-questions", category: "Java & Backend" },
//   { name: "Spring Boot Interview Questions", slug: "spring-boot-interview-questions", category: "Java & Backend" },
//   { name: "Servlet Interview Questions", slug: "servlet-interview-questions", category: "Java & Backend" },
//   { name: "Hibernate Interview Questions", slug: "hibernate-interview-questions", category: "Java & Backend" },
//   { name: "Maven Interview Questions", slug: "maven-interview-questions", category: "Java & Backend" },
//   { name: "Jenkins Interview Questions", slug: "jenkins-interview-questions", category: "Java & Backend" },
//   { name: "Microservices Interview Questions", slug: "microservices-interview-questions", category: "Java & Backend" },
//   { name: "Python Coding Interview Questions", slug: "python-coding-interview-questions", category: "Python Frameworks" },
//   { name: "Python Interview Questions for Experienced", slug: "python-interview-questions-experienced", category: "Python Frameworks" },
//   { name: "Django Interview Questions", slug: "django-interview-questions", category: "Python Frameworks" },
//   { name: "Pandas Interview Questions", slug: "pandas-interview-questions", category: "Python Frameworks" },
//   { name: "HTML Interview Questions", slug: "html-interview-questions", category: "Web Development" },
//   { name: "CSS Interview Questions", slug: "css-interview-questions", category: "Web Development" },
//   { name: "JavaScript Interview Questions", slug: "javascript-interview-questions", category: "Web Development" },
//   { name: "Angular Interview Questions", slug: "angular-interview-questions", category: "Web Development" },
//   { name: "React Interview Questions", slug: "react-interview-questions", category: "Web Development" },
//   { name: "Node.js Interview Questions", slug: "nodejs-interview-questions", category: "Web Development" },
//   { name: "DBMS Interview Questions", slug: "dbms-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "SQL Interview Questions", slug: "sql-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "PL/SQL Interview Questions", slug: "plsql-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "MySQL Interview Questions", slug: "mysql-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "MongoDB Interview Questions", slug: "mongodb-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Oracle Interview Questions", slug: "oracle-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Operating System Interview Questions", slug: "os-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "OOPs Interview Questions", slug: "oops-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "DSA Interview Questions", slug: "dsa-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Computer Networks Interview Questions", slug: "cn-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Power BI Interview Questions", slug: "powerbi-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Excel Interview Questions", slug: "excel-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Machine Learning Interview Questions", slug: "ml-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "AWS Interview Questions", slug: "aws-interview-questions", category: "Data, Cloud & Tools" },
//   { name: "Manual Testing Interview Questions", slug: "manual-testing-interview-questions", category: "Software Testing" },
//   { name: "Selenium Interview Questions", slug: "selenium-interview-questions", category: "Software Testing" },
//   { name: "API Testing Interview Questions", slug: "api-testing-interview-questions", category: "Software Testing" }
// ];

// // Display only first 10 (or change to a specific category like 'Technical Interview')
// const interviewItems = allInterviewTopics.slice(0, 10).map(topic => ({
//   name: topic.name,
//   path: `/interview/${topic.slug}`,
//   icon: getIconForInterview(topic.name) // assign icon based on name
// }));

// // Helper to assign icons (you can customize)
// function getIconForInterview(name) {
//   if (name.includes('C++')) return '⚡';
//   if (name.includes('C#')) return '🎯';
//   if (name.includes('Java')) return '☕';
//   if (name.includes('Python')) return '🐍';
//   if (name.includes('JavaScript')) return '🟨';
//   if (name.includes('React')) return '⚛️';
//   if (name.includes('Angular')) return '🅰️';
//   if (name.includes('SQL')) return '🗄️';
//   if (name.includes('Spring')) return '🍃';
//   if (name.includes('Django')) return '🎸';
//   return '💬'; // default
// }

// // ---------- COMPILERS (6 items) ----------
// // const compilerList = [
// //   { name: 'C', path: '/compiler/c', icon: '⚙️' },
// //   { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
// //   { name: 'Python', path: '/compiler/python', icon: '🐍' },
// //   { name: 'Java', path: '/compiler/java', icon: '☕' },
// //   { name: 'PHP', path: '/compiler/php', icon: '🐘' },
// //   { name: 'C#', path: '/compiler/csharp', icon: '🎯' }
// // ];

// const compilerList = [
//   { name: 'Python', path: '/compiler/python', icon: '🐍' },
//   { name: 'Java', path: '/compiler/java', icon: '☕' },
//   { name: 'PHP', path: '/compiler/php', icon: '🐘' },
//   { name: 'C', path: '/compiler/c', icon: '⚙️' },
//   { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
//   { name: 'JavaScript', path: '/compiler/javascript', icon: '🟨' },
//   { name: 'TypeScript', path: '/compiler/typescript', icon: '🔷' },
//   { name: 'R', path: '/compiler/r', icon: '📊' },
//   { name: 'Swift', path: '/compiler/swift', icon: '🦅' },
//   { name: 'Kotlin', path: '/compiler/kotlin', icon: '📱' },
//   { name: 'Go', path: '/compiler/go', icon: '🐹' },
//   { name: 'C#', path: '/compiler/csharp', icon: '🎯' },
//   { name: 'Perl', path: '/compiler/perl', icon: '🐪' },
//   { name: 'Groovy', path: '/compiler/groovy', icon: '🎷' }
// ];

// // ----------------------------------------------------------------

// const Footer = () => {
//   const renderIcon = (item) => item.icon ? `${item.icon} ` : '';

//   return (
//     <footer className="footer-wrapper">
//       <div className="footer-container">
//         <div className="footer-top">
//           {/* Contact Info + Follow Us (same as before) */}
//           <div className="footer-left-group">
//             <div className="footer-section contact-section">
//               <h4>Contact Info</h4>
//               <p className="contact-detail">✉️ support@dreamztouch.in</p>
//               <p className="contact-detail">📍 Ambattur, Chennai</p>
//             </div>
//             <div className="footer-section follow-section">
//               <h4>Follow Us</h4>
//               <div className="social-icons">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
//               </div>
//             </div>
//           </div>

//           {/* Top Tutorials */}
//           <div className="footer-section">
//             <h4>Top Tutorials</h4>
//             <div className="footer-links">
//               {tutorialItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>{renderIcon(item)}{item.name}</Link>
//               ))}
//             </div>
//           </div>

//           {/* Interview Questions (dynamic from array) */}
//           <div className="footer-section">
//             <h4>Interview Questions</h4>
//             <div className="footer-links">
//               {interviewItems.map((item, idx) => (
//                 <Link key={idx} to={item.path}>{renderIcon(item)}{item.name}</Link>
//               ))}
//             </div>
//           </div>

//           {/* Compilers */}
//           <div className="footer-section">
//             <h4>Compilers</h4>
//             <div className="footer-links">
//               {compilerList.map((comp, idx) => (
//                 <Link key={idx} to={comp.path}>{comp.icon} {comp.name}</Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links (horizontal row) */}
//           <div className="footer-section quicklinks-section">
//             <h4>Quick Links</h4>
//             <div className="footer-links">
//               <Link to="/careers">Careers</Link>
//               <Link to="/team">Team</Link>
//               <Link to="/privacy-policy">Privacy Policy</Link>
//               <Link to="/about">About Us</Link>
//               <Link to="/contact">Contact Us</Link>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p className="copyright-text">© Copyright www.dreamztouch.in. All Rights Reserved.</p>
//         </div>
//       </div>

//       <style>{`
//         /* Same CSS as before – unchanged */
//         .footer-wrapper {
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
//           color: #e0e0e0;
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
//           padding: 2rem 1rem 1rem;
//           margin-top: auto;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .footer-top {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 1.5rem;
//           padding-bottom: 2rem;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//         }
//         .footer-left-group {
//           display: flex;
//           gap: 1.5rem;
//           flex-wrap: wrap;
//         }
//         .footer-section {
//           flex: 1 1 auto;
//           min-width: 130px;
//           text-align: left;
//         }
//         .contact-section, .follow-section {
//           min-width: 140px;
//         }
//         .quicklinks-section {
//           min-width: auto;
//         }
//         .footer-section h4 {
//           font-size: 1.25rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ffffff, #c084fc);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           margin-bottom: 1rem;
//           letter-spacing: -0.3px;
//           text-align: left;
//         }
//         .contact-detail {
//           margin: 0.5rem 0;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-size: 0.9rem;
//           color: white !important;
//           font-weight: 700 !important;
//           justify-content: flex-start;
//         }
//         .social-icons {
//           display: flex;
//           gap: 1rem;
//           margin-top: 0.5rem;
//           justify-content: flex-start;
//         }
//         .social-icons a {
//           color: #e0e0e0;
//           font-size: 1.5rem;
//           transition: all 0.2s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: rgba(255,255,255,0.1);
//           border-radius: 50%;
//           text-decoration: none;
//         }
//         .social-icons a:hover {
//           color: white;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           transform: translateY(-3px);
//         }
//         .footer-links {
//           display: flex;
//           flex-direction: column;
//           gap: 0.4rem;
//           align-items: flex-start;
//         }
//         .footer-links a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.85rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .footer-links a:hover {
//           color: #c084fc;
//           transform: translateX(4px);
//         }
//         .quick-links-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//           align-items: center;
//         }
//         .quick-links-row a {
//           color: #e0e0e0;
//           text-decoration: none;
//           font-size: 0.85rem;
//           transition: color 0.2s, transform 0.2s;
//           display: inline-block;
//         }
//         .quick-links-row a:hover {
//           color: #c084fc;
//           transform: translateY(-2px);
//         }
//         .footer-bottom {
//           text-align: center;
//           padding-top: 1.5rem;
//         }
//         .copyright-text {
//           font-size: 0.85rem;
//           color: white !important;
//           font-weight: 700 !important;
//           margin: 0;
//         }
//         @media (min-width: 1200px) {
//           .footer-top {
//             flex-wrap: nowrap;
//           }
//         }
//         @media (max-width: 900px) {
//           .footer-top {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }
//           .footer-section, .contact-section, .follow-section {
//             text-align: center;
//           }
//           .footer-section h4 {
//             text-align: center;
//           }
//           .contact-detail {
//             justify-content: center;
//           }
//           .social-icons {
//             justify-content: center;
//           }
//           .footer-links {
//             align-items: center;
//           }
//           .footer-links a:hover {
//             transform: translateX(0) scale(1.05);
//           }
//           .quick-links-row {
//             flex-direction: column;
//             gap: 0.5rem;
//             align-items: center;
//           }
//           .quick-links-row a:hover {
//             transform: scale(1.05);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;



// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import { cData } from '../data/cData';
import { cppData } from '../data/cppData';
import { javaData } from '../data/javaData';
import { pythonData } from '../data/pythonData';
import { htmlData } from '../data/htmlData';
import { cssData } from '../data/cssData';
import { javascriptData } from '../data/javascriptData';
import { springbootData } from '../data/springbootData';
import { csharpData } from '../data/csharpData';
import { mysqlData } from '../data/mysqlData';

// ---------- TUTORIALS (14 links) ----------
const tutorialItems = [
  { name: 'C', path: '/c-programming/c-tutorial', icon: '⚙️' , data: cData },
  { name: 'C++', path: '/c++-tutorial/c++-tutorial-basics', icon: '⚡' ,data: cppData},
  { name: 'Java', path: '/java/java-tutorial', icon: '☕' ,data: javaData},
  { name: 'Python', path: '/python/python-tutorial-[intro]', icon: '🐍' ,data: pythonData},
  { name: 'HTML', path: '/html-tutorial/html-home', icon: '🌐' ,data: htmlData},
  { name: 'CSS', path: '/css/css-tutorial', icon: '🎨',data: cssData },
  { name: 'JavaScript', path: '/javascript/javascript-tutorial', icon: '🟨' ,data: javascriptData},
  { name: 'SQL', path: '/sql/sql-home', icon: '🗄️' },
  { name: 'React JS', path: '/reactjs/react-home', icon: '⚛️' },
  { name: 'Node.js', path: '/node-js/node.js-home', icon: '🟢' },
  { name: 'Spring Boot', path: '/springboot/spring-boot-tutorial', icon: '🍃' ,data: springbootData},
  { name: 'C#', path: '/csharp/Dotnet-framework', icon: '🎯' ,data:csharpData},
  { name: 'PHP', path: '/php/php-tutorial', icon: '🐘' },
  { name: 'MySQL', path: '/mysql/mysql-home', icon: '🐬', data:mysqlData }
];


// ---------- INTERVIEW TOPICS (full array, we'll display first 10) ----------
const allInterviewTopics = [
  { name: "C Interview Questions", slug: "c-interview-questions", category: "Technical Interview" },
  { name: "C++ Interview Questions", slug: "cpp-interview-questions", category: "Technical Interview" },
  { name: "Java Interview Questions", slug: "java-interview-questions", category: "Technical Interview" },
  { name: "Python Interview Questions", slug: "python-interview-questions", category: "Technical Interview" },
  { name: ".NET Interview Questions", slug: "dotnet-interview-questions", category: "Technical Interview" },
  { name: "C# Interview Questions", slug: "csharp-interview-questions", category: "Technical Interview" },
  { name: "HR Interview Questions", slug: "hr-interview-questions", category: "Technical Interview" },
  { name: "JDBC Interview Questions", slug: "jdbc-interview-questions", category: "Java & Backend" },
  { name: "Spring Interview Questions", slug: "spring-interview-questions", category: "Java & Backend" },
  { name: "Spring Boot Interview Questions", slug: "spring-boot-interview-questions", category: "Java & Backend" },
  { name: "Servlet Interview Questions", slug: "servlet-interview-questions", category: "Java & Backend" },
  { name: "Hibernate Interview Questions", slug: "hibernate-interview-questions", category: "Java & Backend" },
  { name: "Maven Interview Questions", slug: "maven-interview-questions", category: "Java & Backend" },
  { name: "Jenkins Interview Questions", slug: "jenkins-interview-questions", category: "Java & Backend" },
  { name: "Microservices Interview Questions", slug: "microservices-interview-questions", category: "Java & Backend" },
  { name: "Python Coding Interview Questions", slug: "python-coding-interview-questions", category: "Python Frameworks" },
  { name: "Python Interview Questions for Experienced", slug: "python-interview-questions-experienced", category: "Python Frameworks" },
  { name: "Django Interview Questions", slug: "django-interview-questions", category: "Python Frameworks" },
  { name: "Pandas Interview Questions", slug: "pandas-interview-questions", category: "Python Frameworks" },
  { name: "HTML Interview Questions", slug: "html-interview-questions", category: "Web Development" },
  { name: "CSS Interview Questions", slug: "css-interview-questions", category: "Web Development" },
  { name: "JavaScript Interview Questions", slug: "javascript-interview-questions", category: "Web Development" },
  { name: "Angular Interview Questions", slug: "angular-interview-questions", category: "Web Development" },
  { name: "React Interview Questions", slug: "react-interview-questions", category: "Web Development" },
  { name: "Node.js Interview Questions", slug: "nodejs-interview-questions", category: "Web Development" },
  { name: "DBMS Interview Questions", slug: "dbms-interview-questions", category: "Data, Cloud & Tools" },
  { name: "SQL Interview Questions", slug: "sql-interview-questions", category: "Data, Cloud & Tools" },
  { name: "PL/SQL Interview Questions", slug: "plsql-interview-questions", category: "Data, Cloud & Tools" },
  { name: "MySQL Interview Questions", slug: "mysql-interview-questions", category: "Data, Cloud & Tools" },
  { name: "MongoDB Interview Questions", slug: "mongodb-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Oracle Interview Questions", slug: "oracle-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Operating System Interview Questions", slug: "os-interview-questions", category: "Data, Cloud & Tools" },
  { name: "OOPs Interview Questions", slug: "oops-interview-questions", category: "Data, Cloud & Tools" },
  { name: "DSA Interview Questions", slug: "dsa-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Computer Networks Interview Questions", slug: "cn-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Power BI Interview Questions", slug: "powerbi-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Excel Interview Questions", slug: "excel-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Machine Learning Interview Questions", slug: "ml-interview-questions", category: "Data, Cloud & Tools" },
  { name: "AWS Interview Questions", slug: "aws-interview-questions", category: "Data, Cloud & Tools" },
  { name: "Manual Testing Interview Questions", slug: "manual-testing-interview-questions", category: "Software Testing" },
  { name: "Selenium Interview Questions", slug: "selenium-interview-questions", category: "Software Testing" },
  { name: "API Testing Interview Questions", slug: "api-testing-interview-questions", category: "Software Testing" }
];


const interviewItems = allInterviewTopics.slice(0, 10).map(topic => ({
  name: topic.name,
  path: `/interview/${topic.slug}`,
  icon: getIconForInterview(topic.name)
}));

function getIconForInterview(name) {
  if (name.includes('C++')) return '⚡';
  if (name.includes('C#')) return '🎯';
  if (name.includes('Java')) return '☕';
  if (name.includes('Python')) return '🐍';
  if (name.includes('JavaScript')) return '🟨';
  if (name.includes('React')) return '⚛️';
  if (name.includes('Angular')) return '🅰️';
  if (name.includes('SQL')) return '🗄️';
  if (name.includes('Spring')) return '🍃';
  return '💬';
}

// ---------- COMPILERS (14 items, now full list) ----------
const compilerList = [
  { name: 'Python', path: '/compiler/python', icon: '🐍' },
  { name: 'Java', path: '/compiler/java', icon: '☕' },
  { name: 'PHP', path: '/compiler/php', icon: '🐘' },
  { name: 'C', path: '/compiler/c', icon: '⚙️' },
  { name: 'C++', path: '/compiler/cpp', icon: '⚡' },
  { name: 'JavaScript', path: '/compiler/javascript', icon: '🟨' },
  { name: 'TypeScript', path: '/compiler/typescript', icon: '🔷' },
  { name: 'R', path: '/compiler/r', icon: '📊' },
  { name: 'Swift', path: '/compiler/swift', icon: '🦅' },
  { name: 'Kotlin', path: '/compiler/kotlin', icon: '📱' },
  { name: 'Go', path: '/compiler/go', icon: '🐹' },
  { name: 'C#', path: '/compiler/csharp', icon: '🎯' },
  { name: 'Perl', path: '/compiler/perl', icon: '🐪' },
  { name: 'Groovy', path: '/compiler/groovy', icon: '🎷' }
];

// ---------- Quick Links ----------
const quickLinksItems = [
  { name: 'Careers', path: '/careers' },
  { name: 'Team', path: '/team' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' }
];

// ----------------------------------------------------------------

const Footer = () => {
  const renderIcon = (item) => item.icon ? `${item.icon} ` : '';

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          {/* Contact Info + Follow Us */}
          <div className="footer-left-group">
            {/* <div className="footer-section contact-section">
              <h4>Contact Info</h4>
              <p className="contact-detail">✉️ support@dreamztouch.in</p>
              <p className="contact-detail">📍 Ambattur, Chennai</p>
            </div> */}
            <div className="footer-section contact-section">
              <h4>Contact Info</h4>
              <p className="contact-detail">
                📞 <a href="tel:+919342138238" style={{ color: 'white', textDecoration: 'none' }}>9342138238</a>
              </p>
              <p className="contact-detail">
                ✉️ <a href="mailto:dreamztouchhr@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>dreamztouchhr@gmail.com</a>
              </p>
              <p className="contact-detail">📍 Ambattur, Chennai</p>
            </div>
            <div className="footer-section follow-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://facebook.com/DreamzTouchTech" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/DreamzTouchTech" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com/company/dreamztouch-technologies" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/dreamztouchtech" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Top Tutorials - 2‑column grid */}
          <div className="footer-section">
            <h4>Top Tutorials</h4>
            <div className="footer-grid">
              {tutorialItems.map((item, idx) => (
                <Link key={idx} to={item.path} className="grid-link">
                  {renderIcon(item)}{item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Interview Questions - single column (vertical) */}
          <div className="footer-section">
            <h4>Interview Questions</h4>
            <div className="footer-links">
              {interviewItems.map((item, idx) => (
                <Link key={idx} to={item.path}>{renderIcon(item)}{item.name}</Link>
              ))}
            </div>
          </div>

          {/* Compilers - 2‑column grid */}
          <div className="footer-section">
            <h4>Compilers</h4>
            <div className="footer-grid">
              {compilerList.map((comp, idx) => (
                <Link key={idx} to={comp.path} className="grid-link">
                  {comp.icon} {comp.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links - single column (vertical) */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinksItems.map((item, idx) => (
                <Link key={idx} to={item.path}>{item.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">© Copyright www.dreamztouch.in. All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #e0e0e0;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          padding: 2rem 1rem 1rem;
          margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-left-group {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-section {
          flex: 1 1 auto;
          min-width: 130px;
          text-align: left;
        }
        .contact-section, .follow-section {
          min-width: 140px;
        }
        .footer-section h4 {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #c084fc);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
          text-align: left;
        }
        .contact-detail {
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: white !important;
          font-weight: 700 !important;
          justify-content: flex-start;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          justify-content: flex-start;
        }
        .social-icons a {
          color: #e0e0e0;
          font-size: 1.5rem;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          text-decoration: none;
        }
        .social-icons a:hover {
          color: white;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: translateY(-3px);
        }
        /* Vertical list (Interview Questions & Quick Links) */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          align-items: flex-start;
        }
        .footer-links a {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .footer-links a:hover {
          color: #c084fc;
          transform: translateX(4px);
        }
        /* 2‑column grid for Tutorials & Compilers */
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.4rem 0.8rem;
        }
        .grid-link {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .grid-link:hover {
          color: #c084fc;
          transform: translateX(2px);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 1.5rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: white !important;
          font-weight: 700 !important;
          margin: 0;
        }
        /* Prevent wrapping on large screens */
        @media (min-width: 1200px) {
          .footer-top {
            flex-wrap: nowrap;
          }
        }
        /* Mobile: centre everything, stack columns */
        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-section, .contact-section, .follow-section {
            text-align: center;
          }
          .footer-section h4 {
            text-align: center;
          }
          .contact-detail {
            justify-content: center;
          }
          .social-icons {
            justify-content: center;
          }
          .footer-links {
            align-items: center;
          }
          .footer-links a:hover {
            transform: translateX(0) scale(1.05);
          }
          .footer-grid {
            grid-template-columns: 1fr;  /* single column on mobile */
            text-align: center;
          }
          .grid-link:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;