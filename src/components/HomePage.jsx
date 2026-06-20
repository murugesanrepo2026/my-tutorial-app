



// // src/pages/HomePage.jsx (or src/components/HomePage.jsx)
// import React, { useState, useMemo, useCallback } from 'react';
// import { tutorialData, getFlatSubtopicsForMain } from '../data/tutorialData';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import ContentArea from '../components/ContentArea';
// import Cards from '../components/Cards';




// function HomePage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedMainId, setSelectedMainId] = useState(tutorialData[0].id);
//   const [currentSubId, setCurrentSubId] = useState(null);

//   const selectedMain = tutorialData.find(t => t.id === selectedMainId);
//   const flatSubtopics = useMemo(() => {
//     if (!selectedMain) return [];
//     return getFlatSubtopicsForMain(selectedMain);
//   }, [selectedMain]);

//   React.useEffect(() => {
//     if (flatSubtopics.length > 0) {
//       setCurrentSubId(flatSubtopics[0].id);
//     }
//   }, [flatSubtopics]);

//   const currentIndex = flatSubtopics.findIndex(sub => sub.id === currentSubId);
//   const currentSub = flatSubtopics[currentIndex];

//   const handleNext = useCallback(() => {
//     const nextIndex = (currentIndex + 1) % flatSubtopics.length;
//     setCurrentSubId(flatSubtopics[nextIndex].id);
//   }, [currentIndex, flatSubtopics]);

//   const handlePrev = useCallback(() => {
//     const prevIndex = (currentIndex - 1 + flatSubtopics.length) % flatSubtopics.length;
//     setCurrentSubId(flatSubtopics[prevIndex].id);
//   }, [currentIndex, flatSubtopics]);

//   const handleTabClick = (mainId) => {
//     setSelectedMainId(mainId);
//   };

//   return (
//     <>
//       <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       <div className="tabs-container">
//         {tutorialData.map(mainTopic => (
//           <button
//             key={mainTopic.id}
//             className={`tab-btn ${selectedMainId === mainTopic.id ? 'active-tab' : ''}`}
//             onClick={() => handleTabClick(mainTopic.id)}
//           >
//             {mainTopic.icon} {mainTopic.name}
//           </button>
//         ))}
//       </div>
//       <div className="main-layout">
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//         <Sidebar
//           mainTopic={selectedMain}
//           currentSubId={currentSubId}
//           onSelectSubTopic={setCurrentSubId}
//           searchTerm={searchTerm}
//         />
//          <Cards /> 
//         </div>
//         <ContentArea
//           currentSub={currentSub}
//           onPrev={handlePrev}
//           onNext={handleNext}
//           currentIndex={currentIndex}
//           total={flatSubtopics.length}
//         />

      
//       </div>

     


//     </>
//   );
// }

// export default HomePage;




// src/components/HomePage.jsx
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate ,useLocation} from 'react-router-dom';
import { tutorialData, getFlatSubtopicsForMain, findSubTopicBySlug } from '../data';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';
import Cards from '../components/Cards';
import { getTutorialByPath } from '../data/tutorialMap';

// Helper to create URL-friendly slug from a name
const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');

function HomePage() {

  const location = useLocation();

  const { mainTopic: mainSlug, subTopic: subSlug } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Determine current main topic from URL slug
  // const selectedMain = useMemo(() => {
  //   if (mainSlug) {
  //     const found = tutorialData.find(t => slugify(t.name) === mainSlug);
  //     if (found) return found;
  //   }
  //   // Fallback to first tutorial if slug invalid or root route
  //   return tutorialData[0];
  // }, [mainSlug]);

  const selectedMain = useMemo(() => {
      // Try to get the tutorial from the full path
      const pathTutorial = getTutorialByPath(location.pathname);
      if (pathTutorial) return pathTutorial;

      // Fallback: try matching by mainSlug (as before)
      if (mainSlug) {
        const found = tutorialData.find(t => slugify(t.name) === mainSlug);
        if (found) return found;
      }
      return tutorialData[0];
    }, [location.pathname, mainSlug]);

  // 2. Flatten all leaf subtopics for this main topic
  const flatSubtopics = useMemo(() => {
    return getFlatSubtopicsForMain(selectedMain);
  }, [selectedMain]);

  // 3. Find current subtopic from URL slug (or default to first)
  const currentSub = useMemo(() => {
    if (subSlug) {
      const found = findSubTopicBySlug(selectedMain, subSlug);
      if (found) return found;
    }
    return flatSubtopics[0] || null;
  }, [selectedMain, subSlug, flatSubtopics]);

  const currentIndex = flatSubtopics.findIndex(sub => sub.id === currentSub?.id);

  // 4. Navigate when user clicks a main tab
  const handleTabClick = useCallback((mainId) => {
    const newMain = tutorialData.find(t => t.id === mainId);
    if (newMain) {
      const firstSub = getFlatSubtopicsForMain(newMain)[0];
      const mainSlug = slugify(newMain.name);
      const subSlug = firstSub ? slugify(firstSub.name) : '';
      navigate(`/${mainSlug}/${subSlug}`);
    }
  }, [navigate]);

  // 5. Navigate when user clicks a subtopic in sidebar
  // const handleSubTopicSelect = useCallback((subId) => {
  //   const sub = flatSubtopics.find(s => s.id === subId);
  //   if (sub) {
  //     navigate(`/${slugify(selectedMain.name)}/${slugify(sub.name)}`);
  //   }
  // }, [selectedMain, flatSubtopics, navigate]);

  const handleSubTopicSelect = useCallback((subId) => {
  const sub = flatSubtopics.find(s => s.id === subId);
  if (sub) {
    navigate(`/${slugify(selectedMain.name)}/${sub.id}`);  // ✅ use sub.id directly
  }
}, [selectedMain, flatSubtopics, navigate]);

  // 6. Next / Previous buttons
  const handleNext = useCallback(() => {
    if (!flatSubtopics.length) return;
    const nextIndex = (currentIndex + 1) % flatSubtopics.length;
    handleSubTopicSelect(flatSubtopics[nextIndex].id);
  }, [currentIndex, flatSubtopics, handleSubTopicSelect]);

  const handlePrev = useCallback(() => {
    if (!flatSubtopics.length) return;
    const prevIndex = (currentIndex - 1 + flatSubtopics.length) % flatSubtopics.length;
    handleSubTopicSelect(flatSubtopics[prevIndex].id);
  }, [currentIndex, flatSubtopics, handleSubTopicSelect]);

  // 7. Redirect root "/" to default main + first subtopic
  useEffect(() => {
    if (!mainSlug) {
      const defaultMain = tutorialData[0];
      const firstSub = getFlatSubtopicsForMain(defaultMain)[0];
      navigate(`/${slugify(defaultMain.name)}/${slugify(firstSub.name)}`, { replace: true });
    }
  }, [mainSlug, navigate]);

  // Inside HomePage component, after the existing useEffect for root redirect
  useEffect(() => {
    if (mainSlug && !subSlug) {
      // No subtopic in URL -> redirect to first subtopic of this main
      const main = tutorialData.find(t => slugify(t.name) === mainSlug);
      if (main) {
        const firstSub = getFlatSubtopicsForMain(main)[0];
        if (firstSub) {
          navigate(`/${mainSlug}/${slugify(firstSub.name)}`, { replace: true });
        }
      }
    }
  }, [mainSlug, subSlug, navigate]);

  return (
    <>
      {/* <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <div className="tabs-container">
        {tutorialData.map(mainTopic => (
          <button
            key={mainTopic.id}
            className={`tab-btn ${selectedMain.id === mainTopic.id ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(mainTopic.id)}
          >
            {mainTopic.icon} {mainTopic.name}
          </button>
        ))}
      </div>
      <div className="main-layout">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Sidebar
            mainTopic={selectedMain}
            currentSubId={currentSub?.id}
            onSelectSubTopic={handleSubTopicSelect}
            searchTerm={searchTerm}
          />
          <Cards />
        </div>
        <ContentArea
          currentSub={currentSub}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={currentIndex}
          total={flatSubtopics.length}
        />
      </div>
    </>
  );
}

export default HomePage;