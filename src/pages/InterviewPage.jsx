// src/pages/InterviewPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { interviewTopics } from '../data/interviewTopics';
import { qaDatabase } from '../data/qaData';
import InterviewSidebar from '../components/InterviewSidebar';
import './InterviewPage.css';

const InterviewPage = () => {
  const { slug } = useParams();
  const topic = interviewTopics.find(t => t.slug === slug);
  const questions = qaDatabase[slug] || [];

  // Keep your existing renderFormattedAnswer function (unchanged)
  const renderFormattedAnswer = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    let inOutput = false;
    let outputBuffer = [];
    const elements = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      if (line.trim() === 'Output:' || line.trim().startsWith('Output:')) {
        inOutput = true;
        elements.push(<div key={`out-label-${i}`} className="output-label">📤 Output:</div>);
        continue;
      }
      if (inOutput) {
        if (line.trim() === '' || line.trim().startsWith('Explanation:')) {
          if (outputBuffer.length > 0) {
            elements.push(<pre key={`output-${i}`} className="output-block">{outputBuffer.join('\n')}</pre>);
            outputBuffer = [];
          }
          inOutput = false;
        } else {
          outputBuffer.push(line);
          continue;
        }
      }
      if (line.trim().match(/^[A-Z][a-z]+ [A-Z][a-z]+:$/) || 
          line.trim().match(/^[A-Z][a-z]+ Literals:$/) ||
          line.trim().match(/^Special literals:$/)) {
        elements.push(<h4 key={`heading-${i}`} className="subheading">{line.trim()}</h4>);
        continue;
      }
      if (line.match(/^\s+/) || 
          line.trim().startsWith('#') || 
          line.trim().startsWith('print') ||
          line.trim().includes('=') ||
          line.trim().startsWith('single =') ||
          line.trim().startsWith('double =') ||
          line.trim().startsWith('multi =') ||
          line.trim().startsWith('a =') ||
          line.trim().startsWith('b =') ||
          line.trim().startsWith('x =') ||
          line.trim().startsWith('p =') ||
          line.trim().startsWith('q =') ||
          line.trim().startsWith('r =') ||
          line.trim().startsWith('s =') ||
          line.trim().startsWith('word =')) {
        elements.push(<code key={`code-${i}`} className="code-line">{line}</code>);
        continue;
      }
      if (line.trim() !== '') {
        const cleanLine = line.trim().replace(/^[-*]\s*/, '');
        elements.push(<div key={`text-${i}`} className="answer-line"><span className="answer-icon">→</span> {cleanLine}</div>);
      } else {
        elements.push(<br key={`br-${i}`} />);
      }
    }
    if (outputBuffer.length > 0) {
      elements.push(<pre key="output-end" className="output-block">{outputBuffer.join('\n')}</pre>);
    }
    return elements;
  };

  if (!topic) {
    return <div className="error-message">❌ Interview topic not found.</div>;
  }

  return (
    <div className="interview-layout">
      <InterviewSidebar currentSlug={slug} />
      <div className="interview-content">
        <div className="container">
          <h1 className="page-title">{topic.name}</h1>
          {questions.length === 0 ? (
            <p className="no-qa">⚠️ No Q&A available for this topic yet. Please check back later.</p>
          ) : (
            <div className="qa-list">
              {questions.map((item, idx) => (
                <div key={idx} className="qa-card">
                  <div className="qa-question">
                    <span className="qa-number">Q{idx + 1}</span>
                    <h3>{item.question}</h3>
                  </div>
                  <div className="qa-answer">
                    <span className="qa-answer-label">A:</span>
                    <div className="qa-answer-text">
                      {item.image && (
                        <div className="answer-image">
                          <img src={item.image} alt="Illustration" />
                        </div>
                      )}
                      {renderFormattedAnswer(item.answer)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;