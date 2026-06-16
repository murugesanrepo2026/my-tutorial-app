// src/App.jsx
import React, { useState, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom'; // only Routes, Route – no Router
import { tutorialData, getFlatSubtopicsForMain, findSubTopicBySlug } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CompilersList from './pages/CompilersList';
import CompilerPage from './pages/CompilerPage';
import AboutUs from './components/AboutUs';
import SubscribeSection from "./components/SubscribeSection";
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Team from './components/Team';
import Careers from './components/Careers';
import InterviewPage from './pages/InterviewPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMainId, setSelectedMainId] = useState(tutorialData[0].id);
  const [currentSubId, setCurrentSubId] = useState(null);

  const selectedMain = tutorialData.find(t => t.id === selectedMainId);
  const flatSubtopics = useMemo(() => {
    if (!selectedMain) return [];
    return getFlatSubtopicsForMain(selectedMain);
  }, [selectedMain]);

  React.useEffect(() => {
    if (flatSubtopics.length > 0) {
      setCurrentSubId(flatSubtopics[0].id);
    }
  }, [flatSubtopics]);

  const currentIndex = flatSubtopics.findIndex(sub => sub.id === currentSubId);
  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % flatSubtopics.length;
    setCurrentSubId(flatSubtopics[nextIndex].id);
  }, [currentIndex, flatSubtopics]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + flatSubtopics.length) % flatSubtopics.length;
    setCurrentSubId(flatSubtopics[prevIndex].id);
  }, [currentIndex, flatSubtopics]);

  const handleTabClick = (mainId) => {
    setSelectedMainId(mainId);
  };

  return (
    <div className="app-container">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="main-content-area">
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/:mainTopic/:subTopic?" element={<HomePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/compilers" element={<CompilersList />} />
          <Route path="/compiler/:language" element={<CompilerPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/interview/:slug" element={<InterviewPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </main>
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;