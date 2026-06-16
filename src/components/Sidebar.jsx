// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';

// Recursive component to render nested topics
const SidebarItem = ({ item, level = 0, currentSubId, onSelect, searchTerm, autoExpand = false }) => {
  const [isExpanded, setIsExpanded] = useState(autoExpand);
  const hasChildren = item.subtopics && item.subtopics.length > 0;
  
  // Auto-expand if search matches any child or itself
  useEffect(() => {
    if (searchTerm) {
      const matchSelf = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchChild = hasChildren && item.subtopics.some(child => 
        child.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchSelf || matchChild) {
        setIsExpanded(true);
      }
    }
  }, [searchTerm, item, hasChildren]);
  
  const handleToggle = () => {
    if (hasChildren) setIsExpanded(!isExpanded);
  };
  
  const handleSelect = () => {
    if (!hasChildren) onSelect(item.id);
  };
  
  return (
    <div style={{ marginLeft: level * 16 }}>
      <div
        className={`sidebar-item ${!hasChildren && currentSubId === item.id ? 'active-sub' : ''}`}
        onClick={hasChildren ? handleToggle : handleSelect}
        style={{ cursor: 'pointer', fontWeight: hasChildren ? 'bold' : 'normal' }}
      >
        <span>{item.name}</span>
        {hasChildren && <span className="toggle-icon">{isExpanded ? '▼' : '▶'}</span>}
      </div>
      {hasChildren && isExpanded && (
        <div className="sidebar-children">
          {item.subtopics.map(child => (
            <SidebarItem
              key={child.id}
              item={child}
              level={level + 1}
              currentSubId={currentSubId}
              onSelect={onSelect}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ mainTopic, currentSubId, onSelectSubTopic, searchTerm }) => {
  if (!mainTopic) return <div className="sidebar">Select a language</div>;
  
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        {mainTopic.icon} {mainTopic.name} Topics
      </div>
      {mainTopic.subtopics.map(item => (
        <SidebarItem
          key={item.id}
          item={item}
          level={0}
          currentSubId={currentSubId}
          onSelect={onSelectSubTopic}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
};

export default Sidebar;