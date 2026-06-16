// src/components/MegaMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import { tutorialData, getFlatSubtopicsForMain } from '../data/tutorialData';

import { tutorialData, getFlatSubtopicsForMain } from '../data';

// Helper to create URL-friendly slug
const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');

const MegaMenu = () => {
  return (
    <div className="mega-menu">
      <div className="mega-container">
        {tutorialData.map((topic) => {
          // Get first subtopic slug (optional – can also link to just main slug)
          const flatSubs = getFlatSubtopicsForMain(topic);
          const firstSubSlug = flatSubs.length > 0 ? slugify(flatSubs[0].name) : '';
          // Link to /main-topic/first-subtopic (HomePage will handle)
          const targetUrl = firstSubSlug ? `/${slugify(topic.name)}/${firstSubSlug}` : `/${slugify(topic.name)}`;

          return (
            <Link key={topic.id} to={targetUrl} className="menu-item">
              {topic.icon} {topic.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;