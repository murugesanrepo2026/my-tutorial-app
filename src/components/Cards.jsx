import React, { useState, useEffect, useRef } from 'react';
import './Cards.css';

const Cards = () => {
  const cardData = [
    { id: 1, title: '🔥 Special Offer in Python', description: '30% off – limited time!', color: '#ff7e5e' },
    { id: 2, title: '🚀 Python with Data Science', description: 'Smart tech just landed', color: '#feb47b' },
    { id: 3, title: '✨ Python with Data Analytics', description: 'Exclusive rewards & free trial', color: '#86a8e7' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Move to next card (circular: 0→1→2→0→1...)
  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % cardData.length);
    // Remove transition lock after animation ends
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextCard, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Manual navigation via dots (reset timer)
  const goToCard = (index) => {
    if (index === activeIndex || isTransitioning) return;
    clearInterval(intervalRef.current);
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
    intervalRef.current = setInterval(nextCard, 5000);
  };

  return (
    <div className="carousel-wrapper">
      {/* Fixed-height viewport – shows only one card at a time */}
      <div className="viewport">
        <div
          className="card-stack"
          style={{ transform: `translateY(-${activeIndex * 100}%)` }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card"
              style={{ backgroundColor: card.color }}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="ad-badge">✦ ADVERTISEMENT ✦</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar (visual timer) */}
      <div className="progress-track">
        <div className="progress-fill" key={activeIndex}></div>
      </div>

      {/* Pagination dots */}
      <div className="dots-container">
        {cardData.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => goToCard(idx)}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>

      <div className="info-note">
        <span>⬆️ vertical circular scroll (every 5s)</span>
        <span>📢 same card size</span>
      </div>
    </div>
  );
};

export default Cards;