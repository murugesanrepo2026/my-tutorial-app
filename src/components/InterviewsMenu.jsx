// // src/components/InterviewsMenu.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { interviewTopics } from '../data/interviewTopics';

// const InterviewsMenu = () => {
//   const categoryOrder = [
//     "Technical Interview",
//     "Java & Backend",
//     "Python Frameworks",
//     "Web Development",
//     "Data, Cloud & Tools",
//     "Software Testing"
//   ];

//   // Group topics by category
//   const grouped = {};
//   interviewTopics.forEach(topic => {
//     if (!grouped[topic.category]) grouped[topic.category] = [];
//     grouped[topic.category].push(topic);
//   });

//   return (
//     <div className="interviews-menu-content">
//       <div className="mega-grid">
//         {categoryOrder.map(category => (
//           <div key={category} className="menu-column">
//             <h4>{category}</h4>
//             <ul>
//               {grouped[category]?.map(topic => (
//                 <li key={topic.slug}>
//                   <Link to={`/interview/${topic.slug}`} className="menu-item">
//                     {topic.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InterviewsMenu;



// src/components/InterviewsMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { interviewTopics } from '../data/interviewTopics';
import './InterviewsMenu.css';

const InterviewsMenu = () => {
  const categoryOrder = [
    "Technical Interview",
    "Java & Backend",
    "Python Frameworks",
    "Web Development",
    "Data, Cloud & Tools",
    "Software Testing"
  ];

  // Group topics by category
  const grouped = {};
  interviewTopics.forEach(topic => {
    if (!grouped[topic.category]) grouped[topic.category] = [];
    grouped[topic.category].push(topic);
  });

  return (
    <div className="interviews-menu-content">
      <div className="menu-grid">
        {categoryOrder.map(category => (
          grouped[category] && grouped[category].length > 0 && (
            <div key={category} className="menu-column">
              <h4>{category}</h4>
              <ul>
                {grouped[category].map(topic => (
                  <li key={topic.slug}>
                    <Link to={`/interview/${topic.slug}`} className="menu-item">
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default InterviewsMenu;