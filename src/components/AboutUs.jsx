// // src/components/AboutUs.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AboutUs = () => {
//   return (
//     <div className="au-container">
//       {/* Main Heading */}
//       <div className="au-heading-wrapper">
//         <h1 className="au-main-heading">About Us</h1>
//         <div className="au-heading-underline"></div>
//       </div>

//       {/* Intro */}
//       <div className="au-card">
//         <p className="intro-text">
//           <strong>Dreamz Touch Technologies</strong> is a dual‑purpose platform: a <strong>free tutorial website</strong> 
//                   offering clear, to‑the‑point content on technical and non‑technical subjects, and an <strong>IT solutions provider</strong> 
//           that builds, scales, and optimizes digital products for businesses. We also provide <strong>online IT training</strong> 
//           for learners at every stage.
//         </p>
//       </div>

//       {/* Who We Are */}
//       <div className="au-card">
//         <h2>Who We Are</h2>
//         <p>We are a team of engineers, designers, educators, and strategists who believe technology should feel effortless. 
//         We deliver production‑ready systems, free tutorials, and job‑ready training.</p>
//         <div className="feature-grid">
//           <div className="feature-item">✅ Practical over theoretical</div>
//           <div className="feature-item">✅ End‑to‑end ownership</div>
//           <div className="feature-item">✅ Transparent collaboration</div>
//           <div className="feature-item">✅ Free & accessible learning</div>
//         </div>
//       </div>

//       {/* Our Approach */}
//       <div className="au-card">
//         <h2>Our Approach</h2>
//         <p>Every project starts with listening, then prototyping, then delivering in agile sprints. 
//         Every tutorial is crafted with clarity, examples, and no hidden paywalls.</p>
//         <div className="approach-quote">“Dream it, then add our tech touch – learn it, then build it.”</div>
//       </div>

//       {/* Mission & Vision - Two columns */}
//       <div className="au-two-col">
//         <div className="au-card">
//           <h2>🎯 Our Mission</h2>
//           <p>To deliver <strong>Simply Easy Learning</strong> with clear, crisp, and to‑the‑point content on a wide range 
//           of technical and non‑technical subjects – without any preconditions or impediments. 
//           We also empower businesses with future‑ready IT solutions.</p>
//         </div>
//         <div className="au-card">
//           <h2>👁️ Our Vision</h2>
//           <p>To become the most trusted, inclusive ecosystem where anyone can <strong>learn for free</strong>, 
//           gain industry‑relevant skills through online training, and access cutting‑edge IT solutions – 
//           all under one roof. “Learn, Build, Scale.”</p>
//         </div>
//       </div>

//       {/* Our History & Goal */}
//       <div className="au-two-col">
//         <div className="au-card">
//           <h2>Our History</h2>
//           <p>Founded by <strong>Murugesan </strong>, Dreamz Touch began as a small tutorial blog and quickly evolved 
//           into a full‑service IT solutions company with a global learner base.</p>
//         </div>
//         <div className="au-card">
//           <h2>Our Goal</h2>
//           <p>To bridge the gap between ambition and expertise – by offering free tutorials, paid online training, 
//           and high‑performance digital products that transform ideas into reality.</p>
//         </div>
//       </div>

//       {/* Why Dreamz Touch */}
//       <div className="au-card brand-card">
//         <h2>Why “Dreamz Touch”?</h2>
//         <p>We bring creativity, empathy, and precision to every digital dream – whether it's learning to code 
//         or building a scalable product for millions.</p>
//       </div>

//       {/* Call to Action */}
//       <div className="au-cta-card">
//         <h2>Let’s Build Something – or Learn Something</h2>
//         <p>Ready to upskill or launch your next project? Reach out to us.</p>
//         <Link to="/contact">
//           <button className="au-cta-button">Get in Touch →</button>
//         </Link>
//       </div>

//       <style>{`
//         .au-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           padding: 2rem 1rem;
//           font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
//         }
//         /* New heading styles */
//         .au-heading-wrapper {
//           text-align: center;
//           margin-bottom: 2rem;
//         }
//         .au-main-heading {
//           font-size: 3rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ffffff, #f0e6ff);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           text-shadow: 0 2px 4px rgba(0,0,0,0.1);
//           margin-bottom: 0.5rem;
//           letter-spacing: -0.02em;
//         }
//         .au-heading-underline {
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #fff, #c084fc, #fff);
//           border-radius: 4px;
//           margin: 0 auto;
//         }
//         .au-card, .au-cta-card {
//           max-width: 900px;
//           margin: 0 auto 1.5rem auto;
//           background: rgba(255,255,255,0.95);
//           backdrop-filter: blur(10px);
//           border-radius: 2rem;
//           padding: 1.75rem;
//           box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
//           transition: transform 0.2s ease, box-shadow 0.2s;
//         }
//         .au-card:hover, .au-cta-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
//         }
//         .intro-text {
//           font-size: 1.1rem;
//           line-height: 1.6;
//           color: #1f2937;
//         }
//         h2 {
//           font-size: 1.75rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #1e1e2f, #2d2d44);
//           background-clip: text;
//           -webkit-background-clip: text;
//           color: transparent;
//           margin-bottom: 0.75rem;
//         }
//         p {
//           color: #374151;
//           line-height: 1.5;
//           margin-bottom: 1rem;
//         }
//         .feature-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 0.75rem;
//           margin-top: 1rem;
//         }
//         .feature-item {
//           background: rgba(102,126,234,0.1);
//           padding: 0.5rem 0.75rem;
//           border-radius: 2rem;
//           font-size: 0.95rem;
//           color: #1e1e2f;
//           font-weight: 500;
//         }
//         .approach-quote {
//           font-style: italic;
//           font-size: 1.2rem;
//           text-align: center;
//           color: #4b5563;
//           border-top: 2px dashed #cbd5e1;
//           border-bottom: 2px dashed #cbd5e1;
//           padding: 1rem;
//           margin: 1rem 0;
//         }
//         .au-two-col {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 1.5rem;
//           max-width: 900px;
//           margin: 0 auto 1.5rem auto;
//         }
//         .au-two-col .au-card {
//           margin: 0;
//         }
//         .brand-card {
//           text-align: center;
//         }
//         .au-cta-card {
//           text-align: center;
//           background: linear-gradient(135deg, #fff, #f8fafc);
//         }
//         .au-cta-button {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border: none;
//           padding: 0.75rem 2rem;
//           border-radius: 3rem;
//           font-size: 1rem;
//           font-weight: 600;
//           color: white;
//           cursor: pointer;
//           transition: all 0.2s;
//           margin-top: 0.5rem;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//         }
//         .au-cta-button:hover {
//           transform: scale(1.02);
//           box-shadow: 0 8px 20px rgba(102,126,234,0.4);
//         }
//         @media (max-width: 640px) {
//           .au-container { padding: 1.5rem 0.75rem; }
//           .au-card, .au-cta-card { padding: 1.25rem; }
//           h2 { font-size: 1.5rem; }
//           .intro-text { font-size: 1rem; }
//           .au-two-col { gap: 1rem; }
//           .au-main-heading { font-size: 2.5rem; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AboutUs;







// src/components/AboutUs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="au-container">
      {/* Main Heading */}
      <div className="au-heading-wrapper">
        <h1 className="au-main-heading">About Us</h1>
        <div className="au-heading-underline"></div>
      </div>

      {/* Intro with 13 years + Chennai HQ */}
      <div className="au-card">
        <p className="intro-text">
          <strong>Dreamz Touch Technologies</strong> is a <strong>13‑year‑old IT training institution</strong> headquartered in 
          <strong> Chennai, India</strong>. We are a dual‑purpose platform: a <strong>free tutorial website</strong> offering clear, 
          to‑the‑point content on technical and non‑technical subjects, and an <strong>IT solutions provider</strong> that builds, 
          scales, and optimizes digital products for businesses. We also provide <strong>online IT training</strong> for learners 
          at every stage – from absolute beginners to seasoned professionals.
        </p>
      </div>

      {/* Who We Are */}
      <div className="au-card">
        <h2>Who We Are</h2>
        <p>We are a team of engineers, designers, educators, and strategists who believe technology should feel effortless. 
        With over a decade of experience, we deliver production‑ready systems, free tutorials, job‑ready training, and 
        a rich collection of <strong>interview questions</strong> to help you succeed.</p>
        <div className="feature-grid">
          <div className="feature-item">✅ 13+ Years of Excellence</div>
          <div className="feature-item">✅ Chennai Headquarters</div>
          <div className="feature-item">✅ Practical over theoretical</div>
          <div className="feature-item">✅ End‑to‑end ownership</div>
          <div className="feature-item">✅ Free & accessible learning</div>
          <div className="feature-item">✅ Interview Q&A for all levels</div>
        </div>
      </div>

      {/* What We Offer – NEW Section */}
      <div className="au-card">
        <h2>📚 What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-item">🎓 Online IT Training (Beginner → Advanced)</div>
          <div className="offer-item">📖 Free Tutorials – Tech & Non‑Tech</div>
          <div className="offer-item">💼 IT Solutions & Digital Products</div>
          <div className="offer-item">❓ Interview Questions & Preparation</div>
          <div className="offer-item">📝 Crisp, to‑the‑point study materials</div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="au-card">
        <h2>Our Approach</h2>
        <p>Every project starts with listening, then prototyping, then delivering in agile sprints. 
        Every tutorial is crafted with clarity, examples, and no hidden paywalls. Our training is 
        live, interactive, and tailored to your learning pace.</p>
        <div className="approach-quote">“Dream it, then add our tech touch – learn it, then build it.”</div>
      </div>

      {/* Mission & Vision - Two columns */}
      <div className="au-two-col">
        <div className="au-card">
          <h2>🎯 Our Mission</h2>
          <p>To deliver <strong>Simply Easy Learning</strong> with clear, crisp, and to‑the‑point content on a wide range 
          of technical and non‑technical subjects – without any preconditions or impediments. 
          We also empower businesses with future‑ready IT solutions and prepare learners for 
          real‑world interviews.</p>
        </div>
        <div className="au-card">
          <h2>👁️ Our Vision</h2>
          <p>To become the most trusted, inclusive ecosystem where anyone can <strong>learn for free</strong>, 
          gain industry‑relevant skills through online training, access cutting‑edge IT solutions, 
          and master interview strategies – all under one roof. <strong>“Learn, Build, Scale.”</strong></p>
        </div>
      </div>

      {/* Our History (13 years) & Goal */}
      <div className="au-two-col">
        <div className="au-card">
          <h2>📅 Our History</h2>
          <p>Founded by <strong>Murugesan</strong> in Chennai <strong>13 years ago</strong>, Dreamz Touch began as a small tutorial blog 
          and quickly evolved into a full‑service IT solutions company with a global learner base. 
          Today, we are a recognised online training institution with thousands of successful alumni.</p>
        </div>
        <div className="au-card">
          <h2>🎯 Our Goal</h2>
          <p>To bridge the gap between ambition and expertise – by offering free tutorials, paid online training, 
          interview question banks, and high‑performance digital products that transform ideas into reality.</p>
        </div>
      </div>

      {/* Why Dreamz Touch */}
      <div className="au-card brand-card">
        <h2>Why “Dreamz Touch”?</h2>
        <p>We bring creativity, empathy, and precision to every digital dream – whether it's learning to code, 
        cracking an interview, or building a scalable product for millions.</p>
        <p className="chennai-badge">🏢 Headquartered in Chennai | Serving learners worldwide for 13+ years</p>
      </div>

      {/* Call to Action */}
      <div className="au-cta-card">
        <h2>Let’s Build Something – or Learn Something</h2>
        <p>Ready to upskill, prepare for interviews, or launch your next project? Reach out to us.</p>
        <Link to="/contact">
          <button className="au-cta-button">Get in Touch →</button>
        </Link>
      </div>

      <style>{`
        .au-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .au-heading-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }
        .au-main-heading {
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
        .au-heading-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #c084fc, #fff);
          border-radius: 4px;
          margin: 0 auto;
        }
        .au-card, .au-cta-card {
          max-width: 900px;
          margin: 0 auto 1.5rem auto;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 1.75rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .au-card:hover, .au-cta-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .intro-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #1f2937;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.75rem;
        }
        p {
          color: #374151;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .feature-grid, .offer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .feature-item, .offer-item {
          background: rgba(102,126,234,0.1);
          padding: 0.5rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.95rem;
          color: #1e1e2f;
          font-weight: 500;
        }
        .approach-quote {
          font-style: italic;
          font-size: 1.2rem;
          text-align: center;
          color: #4b5563;
          border-top: 2px dashed #cbd5e1;
          border-bottom: 2px dashed #cbd5e1;
          padding: 1rem;
          margin: 1rem 0;
        }
        .au-two-col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto 1.5rem auto;
        }
        .au-two-col .au-card {
          margin: 0;
        }
        .brand-card {
          text-align: center;
        }
        .chennai-badge {
          background: #e0e7ff;
          display: inline-block;
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #4338ca;
          margin-top: 0.5rem;
        }
        .au-cta-card {
          text-align: center;
          background: linear-gradient(135deg, #fff, #f8fafc);
        }
        .au-cta-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 3rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .au-cta-button:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(102,126,234,0.4);
        }
        @media (max-width: 640px) {
          .au-container { padding: 1.5rem 0.75rem; }
          .au-card, .au-cta-card { padding: 1.25rem; }
          h2 { font-size: 1.5rem; }
          .intro-text { font-size: 1rem; }
          .au-two-col { gap: 1rem; }
          .au-main-heading { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;