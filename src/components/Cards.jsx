// import React, { useState, useEffect, useRef } from 'react';
// import Swal from 'sweetalert2';
// import './Cards.css';

// // Create a compact version of Swal
// const SwalCompact = Swal.mixin({
//   width: 320,                // smaller width
//   padding: '1rem',           // less padding inside
//   confirmButtonColor: '#4CAF50',
//   customClass: {
//     popup: 'swal-compact',   // optional custom CSS class
//   },
// });

// const Cards = () => {
//   const cardData = [
//     {
//       id: 1,
//       title: '🔥 Special Offer in Python',
//       description: '50% off – limited time!',
//       color: '#ff7e5e',
//       duration: '3 MONTHS',
//       mode: 'ONLINE',
//       paid: 'YES'
//     },
//     {
//       id: 2,
//       title: '🚀 Python with Data Science',
//       description: '30% off – limited time!',
//       color: '#feb47b',
//       duration: '3 MONTHS',
//       mode: 'ONLINE',
//       paid: 'YES'
//     },
//     {
//       id: 3,
//       title: '✨ Python with Data Analytics',
//       description: '50% off – limited time!',
//       color: '#86a8e7',
//       duration: '3 MONTHS',
//       mode: 'ONLINE',
//       paid: 'YES'
//     }

//   ];

//   // Carousel state
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const intervalRef = useRef(null);

//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Carousel logic (unchanged)
//   const nextCard = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setActiveIndex((prev) => (prev + 1) % cardData.length);
//     setTimeout(() => setIsTransitioning(false), 600);
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(nextCard, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const goToCard = (index) => {
//     if (index === activeIndex || isTransitioning) return;
//     clearInterval(intervalRef.current);
//     setIsTransitioning(true);
//     setActiveIndex(index);
//     setTimeout(() => setIsTransitioning(false), 600);
//     intervalRef.current = setInterval(nextCard, 5000);
//   };

//   // Modal handlers
//   const openModal = (card) => {
//     setSelectedCard(card);
//     setShowModal(true);
//     // Reset form fields
//     setName('');
//     setEmail('');
//     setPhone('');
//     setOtpSent(false);
//     setOtp('');
//     setGeneratedOtp('');
//     setIsOtpVerified(false);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedCard(null);
//   };

//   // Send OTP (mock)
//   const handleSendOtp = async () => {
//     // Basic validation
//     if (!name || !email || !phone) {
//       await SwalCompact.fire({
//         icon: 'warning',
//         title: 'Incomplete Form',
//         text: 'Please fill all fields before requesting OTP.',
//         confirmButtonColor: '#3085d6',
//       });
//       return;
//     }
//     // Generate a 6-digit OTP
//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//     setGeneratedOtp(otpCode);
//     setOtpSent(true);

//     // Show OTP in a SweetAlert
//     await SwalCompact.fire({
//       icon: 'info',
//       title: 'OTP Sent',
//       html: `An OTP has been sent to <strong>${phone}</strong>.<br/><br/>For demo purposes, your OTP is: <strong style="font-size: 1.5rem;">${otpCode}</strong>`,
//       confirmButtonColor: '#4CAF50',
//     });
//   };

//   // Verify OTP
//   const handleVerifyOtp = async () => {
//     if (otp === generatedOtp) {
//       setIsOtpVerified(true);
//       await SwalCompact.fire({
//         icon: 'success',
//         title: 'OTP Verified',
//         text: 'Your OTP is correct. You can now submit the enrollment.',
//         confirmButtonColor: '#4CAF50',
//         timer: 2000,
//         timerProgressBar: true,
//       });
//     } else {
//       await SwalCompact.fire({
//         icon: 'error',
//         title: 'Invalid OTP',
//         text: 'Please check the OTP and try again.',
//         confirmButtonColor: '#d33',
//       });
//     }
//   };

//   // // Submit form (send email/WhatsApp)
//   // const handleSubmit = async () => {
//   //   if (!isOtpVerified) {
//   //     await SwalCompact.fire({
//   //       icon: 'warning',
//   //       title: 'OTP Not Verified',
//   //       text: 'Please verify your OTP before submitting.',
//   //       confirmButtonColor: '#3085d6',
//   //     });
//   //     return;
//   //   }

//   //   setIsSubmitting(true);

//   //   const payload = {
//   //     name,
//   //     email,
//   //     phone,
//   //     course: selectedCard.title,
//   //     duration: selectedCard.duration,
//   //     mode: selectedCard.mode,
//   //     paid: selectedCard.paid
//   //   };

//   //   try {
//   //     // Replace with your actual API endpoint
//   //     const response = await fetch('https://your-backend.com/api/enroll', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(payload)
//   //     });

//   //     if (response.ok) {
//   //       await SwalCompact.fire({
//   //         icon: 'success',
//   //         title: 'Enrollment Successful!',
//   //         text: 'We will contact you shortly via email/WhatsApp.',
//   //         confirmButtonColor: '#4CAF50',
//   //       });
//   //       closeModal();
//   //     } else {
//   //       await SwalCompact.fire({
//   //         icon: 'error',
//   //         title: 'Submission Failed',
//   //         text: 'Something went wrong. Please try again later.',
//   //         confirmButtonColor: '#d33',
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.error('Submit error:', error);
//   //     await SwalCompact.fire({
//   //       icon: 'error',
//   //       title: 'Network Error',
//   //       text: 'Unable to connect to the server. Please check your internet.',
//   //       confirmButtonColor: '#d33',
//   //     });
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };



//   const handleSubmit = async () => {
//   if (!isOtpVerified) {
//     await SwalCompact.fire({
//       icon: null,
//       iconHtml: '⚠️',
//       title: 'OTP Not Verified',
//       text: 'Please verify your OTP before submitting.',
//       confirmButtonColor: '#3085d6',
//     });
//     return;
//   }

//   setIsSubmitting(true);

//   const payload = {
//     name,
//     email,
//     phone,
//     course: selectedCard.title,
//     duration: selectedCard.duration,
//     mode: selectedCard.mode,
//     paid: selectedCard.paid
//   };
//   console.log('📦 Enrollment payload:', payload);

//   // Simulate async operation
//   await new Promise((resolve) => setTimeout(resolve, 1500));

//   await SwalCompact.fire({
//     icon: null,
//     iconHtml: '🎉',
//     title: 'Enrollment Successful!',
//     text: 'We will contact you shortly via email/WhatsApp.',
//     confirmButtonColor: '#4CAF50',
//   });

//   closeModal();
//   setIsSubmitting(false);
// };

//   return (
//     <div className="carousel-wrapper">
//       {/* Viewport – same as before */}
//       <div className="viewport">
//         <div
//           className="card-stack"
//           style={{ transform: `translateY(-${activeIndex * 100}%)` }}
//         >
//           {cardData.map((card) => (
//             <div
//               key={card.id}
//               className="card"
//               style={{ backgroundColor: card.color }}
//             >
//               <h3>{card.title}</h3>
//               <p>{card.description}</p>
//               <p><strong>Duration:</strong> {card.duration}</p>
//               <p><strong>Mode:</strong> {card.mode}</p>
//               <p><strong>Paid:</strong> {card.paid}</p>
//               <button onClick={() => openModal(card)}>Join Now</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Progress bar & dots (unchanged) */}
//       <div className="progress-track">
//         <div className="progress-fill" key={activeIndex}></div>
//       </div>
//       <div className="dots-container">
//         {cardData.map((_, idx) => (
//           <button
//             key={idx}
//             className={`dot ${idx === activeIndex ? 'active' : ''}`}
//             onClick={() => goToCard(idx)}
//             aria-label={`Go to card ${idx + 1}`}
//           />
//         ))}
//       </div>

//       <div className="info-note">
//         <span>⬆️ vertical circular scroll (every 5s)</span>
//         <span>📢 same card size</span>
//       </div>

//       {/* Modal overlay */}
//       {showModal && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Enroll for {selectedCard?.title}</h2>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Your full name"
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="your@email.com"
//               />
//             </div>
//             <div className="form-group">
//               <label>Phone</label>
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="+91 9876543210"
//               />
//             </div>

//             {!otpSent ? (
//               <button onClick={handleSendOtp} className="btn-otp">
//                 Send OTP
//               </button>
//             ) : (
//               <>
//                 <div className="form-group">
//                   <label>Enter OTP</label>
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="6-digit OTP"
//                     maxLength="6"
//                   />
//                 </div>
//                 {!isOtpVerified ? (
//                   <button onClick={handleVerifyOtp} className="btn-verify">
//                     Verify OTP
//                   </button>
//                 ) : (
//                   <p style={{ color: 'green' }}>✅ OTP Verified</p>
//                 )}
//               </>
//             )}

//             <button
//               onClick={handleSubmit}
//               disabled={!isOtpVerified || isSubmitting}
//               className="btn-submit"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
//             </button>
//             <button onClick={closeModal} className="btn-close">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cards;



import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './Cards.css';

const SwalCompact = Swal.mixin({
  width: 320,
  padding: '1rem',
  confirmButtonColor: '#4CAF50',
  customClass: { popup: 'swal-compact' },
});

const Cards = () => {
  // ---------- First carousel data (Python) ----------
  const cardData = [
    {
      id: 1,
      title: '🔥 Special Offer in Python',
      description: '50% off – limited time!',
      color: '#ff7e5e',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 2,
      title: '🚀 Python with Data Science',
      description: '30% off – limited time!',
      color: '#feb47b',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 3,
      title: '✨ Python with Data Analytics',
      description: '50% off – limited time!',
      color: '#86a8e7',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
  ];

  // ---------- Second carousel data (new courses) ----------
  const additionalCardData = [
    {
      id: 4,
      title: '💻 Full Stack Developer',
      description: 'Master frontend + backend',
      color: '#6c5ce7',
      duration: '6 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 5,
      title: '☕ Java Developer',
      description: 'Spring Boot & Microservices',
      color: '#fdcb6e',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 6,
      title: '🗄️ MySQL / MongoDB Training',
      description: 'Database design & queries',
      color: '#00b894',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
  ];

  // ---------- Third carousel data (Internships & Cloud) ----------
  const thirdCardData = [
    {
      id: 7,
      title: '🐍 Python Internship',
      description: 'Real‑time projects & hands‑on experience',
      color: '#e17055',
      duration: '1 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 8,
      title: '☕ Java Internship',
      description: 'Real‑time projects & enterprise solutions',
      color: '#00b894',
      duration: '1 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
    {
      id: 9,
      title: '☁️ Cloud Training',
      description: 'MS Azure / AWS / GCP – full certification prep',
      color: '#0984e3',
      duration: '3 MONTHS',
      mode: 'ONLINE',
      paid: 'YES',
    },
  ];

  // ---------- Carousel 1 state ----------
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // ---------- Carousel 2 state ----------
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [isTransitioning2, setIsTransitioning2] = useState(false);
  const intervalRef2 = useRef(null);

  // ---------- Carousel 3 state ----------
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [isTransitioning3, setIsTransitioning3] = useState(false);
  const intervalRef3 = useRef(null);

  // ---------- Modal state (shared) ----------
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ---------- Carousel 1 logic (unchanged) ----------
  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % cardData.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextCard, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToCard = (index) => {
    if (index === activeIndex || isTransitioning) return;
    clearInterval(intervalRef.current);
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
    intervalRef.current = setInterval(nextCard, 5000);
  };

  // ---------- Carousel 2 logic (3-second interval) ----------
  const nextCard2 = () => {
    if (isTransitioning2) return;
    setIsTransitioning2(true);
    setActiveIndex2((prev) => (prev + 1) % additionalCardData.length);
    setTimeout(() => setIsTransitioning2(false), 600);
  };

  useEffect(() => {
    intervalRef2.current = setInterval(nextCard2, 3000);
    return () => clearInterval(intervalRef2.current);
  }, []);

  const goToCard2 = (index) => {
    if (index === activeIndex2 || isTransitioning2) return;
    clearInterval(intervalRef2.current);
    setIsTransitioning2(true);
    setActiveIndex2(index);
    setTimeout(() => setIsTransitioning2(false), 600);
    intervalRef2.current = setInterval(nextCard2, 3000);
  };

  // ---------- Carousel 3 logic (3-second interval) ----------
  const nextCard3 = () => {
    if (isTransitioning3) return;
    setIsTransitioning3(true);
    setActiveIndex3((prev) => (prev + 1) % thirdCardData.length);
    setTimeout(() => setIsTransitioning3(false), 600);
  };

  useEffect(() => {
    intervalRef3.current = setInterval(nextCard3, 3000);
    return () => clearInterval(intervalRef3.current);
  }, []);

  const goToCard3 = (index) => {
    if (index === activeIndex3 || isTransitioning3) return;
    clearInterval(intervalRef3.current);
    setIsTransitioning3(true);
    setActiveIndex3(index);
    setTimeout(() => setIsTransitioning3(false), 600);
    intervalRef3.current = setInterval(nextCard3, 3000);
  };

  // ---------- Modal handlers (unchanged) ----------
  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
    setName('');
    setEmail('');
    setPhone('');
    setOtpSent(false);
    setOtp('');
    setGeneratedOtp('');
    setIsOtpVerified(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const handleSendOtp = async () => {
    if (!name || !email || !phone) {
      await SwalCompact.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill all fields before requesting OTP.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setOtpSent(true);

    await SwalCompact.fire({
      icon: 'info',
      title: 'OTP Sent',
      html: `An OTP has been sent to <strong>${phone}</strong>.<br/><br/>For demo purposes, your OTP is: <strong style="font-size: 1.5rem;">${otpCode}</strong>`,
      confirmButtonColor: '#4CAF50',
    });
  };

  const handleVerifyOtp = async () => {
    if (otp === generatedOtp) {
      setIsOtpVerified(true);
      await SwalCompact.fire({
        icon: 'success',
        title: 'OTP Verified',
        text: 'Your OTP is correct. You can now submit the enrollment.',
        confirmButtonColor: '#4CAF50',
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      await SwalCompact.fire({
        icon: 'error',
        title: 'Invalid OTP',
        text: 'Please check the OTP and try again.',
        confirmButtonColor: '#d33',
      });
    }
  };

  const handleSubmit = async () => {
    if (!isOtpVerified) {
      await SwalCompact.fire({
        icon: null,
        iconHtml: '⚠️',
        title: 'OTP Not Verified',
        text: 'Please verify your OTP before submitting.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name,
      email,
      phone,
      course: selectedCard.title,
      duration: selectedCard.duration,
      mode: selectedCard.mode,
      paid: selectedCard.paid,
    };
    console.log('📦 Enrollment payload:', payload);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await SwalCompact.fire({
      icon: null,
      iconHtml: '🎉',
      title: 'Enrollment Successful!',
      text: 'We will contact you shortly via email/WhatsApp.',
      confirmButtonColor: '#4CAF50',
    });

    closeModal();
    setIsSubmitting(false);
  };

  // ---------- Render ----------
  return (
    <div className="carousel-wrapper">
      {/* ---- FIRST CAROUSEL (Python, 5s) ---- */}
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
              <p><strong>Duration:</strong> {card.duration}</p>
              <p><strong>Mode:</strong> {card.mode}</p>
              <p><strong>Paid:</strong> {card.paid}</p>
              <button onClick={() => openModal(card)}>Join Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-track">
        <div className="progress-fill" key={activeIndex}></div>
      </div>
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

      {/* ---- SECOND CAROUSEL (new courses, 3s) ---- */}
      <div className="second-carousel-section">
        <h2 className="section-title">🌟 More Courses</h2>
        <div className="viewport">
          <div
            className="card-stack"
            style={{ transform: `translateY(-${activeIndex2 * 100}%)` }}
          >
            {additionalCardData.map((card) => (
              <div
                key={card.id}
                className="card"
                style={{ backgroundColor: card.color }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p><strong>Duration:</strong> {card.duration}</p>
                <p><strong>Mode:</strong> {card.mode}</p>
                <p><strong>Paid:</strong> {card.paid}</p>
                <button onClick={() => openModal(card)}>Join Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dots-container">
          {additionalCardData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex2 ? 'active' : ''}`}
              onClick={() => goToCard2(idx)}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>
        <p className="carousel-timing">⏱️ changes every 3 seconds</p>
      </div>

      {/* ---- THIRD CAROUSEL (Internships & Cloud, 3s) ---- */}
      <div className="third-carousel-section">
        <h2 className="section-title">🎓 Internships & Cloud Training</h2>
        <div className="viewport">
          <div
            className="card-stack"
            style={{ transform: `translateY(-${activeIndex3 * 100}%)` }}
          >
            {thirdCardData.map((card) => (
              <div
                key={card.id}
                className="card"
                style={{ backgroundColor: card.color }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p><strong>Duration:</strong> {card.duration}</p>
                <p><strong>Mode:</strong> {card.mode}</p>
                <p><strong>Paid:</strong> {card.paid}</p>
                <button onClick={() => openModal(card)}>Join Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="dots-container">
          {thirdCardData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex3 ? 'active' : ''}`}
              onClick={() => goToCard3(idx)}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>
        <p className="carousel-timing">⏱️ changes every 3 seconds</p>
      </div>

      {/* ---- Modal (unchanged) ---- */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Enroll for {selectedCard?.title}</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
              />
            </div>

            {!otpSent ? (
              <button onClick={handleSendOtp} className="btn-otp">
                Send OTP
              </button>
            ) : (
              <>
                <div className="form-group">
                  <label>Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="6-digit OTP"
                    maxLength="6"
                  />
                </div>
                {!isOtpVerified ? (
                  <button onClick={handleVerifyOtp} className="btn-verify">
                    Verify OTP
                  </button>
                ) : (
                  <p style={{ color: 'green' }}>✅ OTP Verified</p>
                )}
              </>
            )}

            <button
              onClick={handleSubmit}
              disabled={!isOtpVerified || isSubmitting}
              className="btn-submit"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
            </button>
            <button onClick={closeModal} className="btn-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;