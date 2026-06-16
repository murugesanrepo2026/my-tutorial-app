// src/components/ContentArea.jsx
import React from 'react';

const ContentArea = ({ currentSub, onPrev, onNext, currentIndex, total }) => {
  if (!currentSub) return <div className="content-area">Select a topic to begin</div>;

  // Convert plain text with \n to HTML <br /> or split into paragraphs
  const renderDescription = () => {
    if (!currentSub.description) return null;

    // If description already contains HTML tags, render as-is (trusted content)
    if (currentSub.description.includes('<p>') || currentSub.description.includes('<br')) {
      return <div className="topic-description" dangerouslySetInnerHTML={{ __html: currentSub.description }} />;
    }

    // Split by double newlines -> separate paragraphs
    const paragraphs = currentSub.description.split(/\n\s*\n/);
    
    return paragraphs.map((para, idx) => {
      // For each paragraph, split by single newline and insert <br /> for line breaks
      const lines = para.split('\n');
      return (
        <p key={idx}>
          {lines.map((line, lineIdx) => (
            <React.Fragment key={lineIdx}>
              {line}
              {lineIdx < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    });
  };

  return (
    <div className="content-area">
      <div className="topic-header">
        <h1 className="topic-title">{currentSub.name}</h1>
        <span className="topic-badge">{currentSub.mainTopicName}</span>
      </div>
      <div className="topic-content">
        {renderDescription()}
        
        {currentSub.code && currentSub.code.trim() !== '' && (
          <>
            <h3>📌 Code Example</h3>
            <pre><code>{currentSub.code}</code></pre>
          </>
        )}
        
        <p className="more-info">Explore full {currentSub.name} tutorial with hands-on exercises at SampleTutorial.</p>
      </div>
      
      <div className="nav-buttons">
        <div className="left-actions">
          <button className="nav-btn print-btn" onClick={() => window.print()}>
            🖨 Print
          </button>
        </div>

        <div className="right-actions">
          <button
            className="nav-btn"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            ◀ Previous
          </button>

          <button
            className="nav-btn"
            onClick={onNext}
            disabled={currentIndex >= total - 1}
          >
            Next ▶
          </button>
        </div>
      </div>
      <div className="progress-info">Topic {currentIndex + 1} of {total}</div>
    </div>
  );
};

export default ContentArea;