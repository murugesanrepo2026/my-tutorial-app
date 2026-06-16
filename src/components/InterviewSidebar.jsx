// src/components/InterviewSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { interviewTopics } from '../data/interviewTopics';

const InterviewSidebar = ({ currentSlug }) => {
  // Group topics by category in a specific order
  const categoryOrder = [
    "Technical Interview",
    "Java & Backend",
    "Python Frameworks",
    "Web Development",
    "Data, Cloud & Tools",
    "Software Testing"
  ];

  const grouped = {};
  interviewTopics.forEach(topic => {
    if (!grouped[topic.category]) grouped[topic.category] = [];
    grouped[topic.category].push(topic);
  });

  return (
    <aside className="interview-sidebar">
      <div className="sidebar-header">
        <h3>🎤 Interview Topics</h3>
      </div>
      <div className="sidebar-categories">
        {categoryOrder.map(category => (
          grouped[category] && grouped[category].length > 0 && (
            <div key={category} className="sidebar-category">
              <h4>{category}</h4>
              <ul>
                {grouped[category].map(topic => (
                  <li key={topic.slug}>
                    <Link
                      to={`/interview/${topic.slug}`}
                      className={`sidebar-link ${currentSlug === topic.slug ? 'active' : ''}`}
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </aside>
  );
};

export default InterviewSidebar;