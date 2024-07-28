import React, { useState } from 'react';
import './Meaning.css';  

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      imgURL: 'assets/icons/user-icon3.png',
      userName: 'Michael Johns',
      location: 'Local Austria',
      time: 'Today',
      text: `The best online zoo I’ve met. My son delighted very much loves to watch gorillas.
          Online zoo is one of the ways to instill a love for animals.The best online zoo I’ve
          met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
          to instill a love for animals. The best online zoo I’ve met. My son delighted very
          much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
          animals.The best online zoo I’ve met. My son delighted very much ljves to watch
          gorillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon2.png',
      userName: 'Oskar Samborska',
      location: 'Local Austria',
      time: 'Yesterday',
      text: `My son delighted very much ljves to watch gorillas. Online zoo is one of the ways to
      instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.
      My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways to
      instill a love for animals.The best online zoo I’ve met. My son delighted very much
      loves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
      zoo I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf
      the ways to instill a love for animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon3.png',
      userName: 'Fredericka Michelin',
      location: 'New York',
      time: 'Today',
      text: `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
      met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
      to instill a love for animals.The best online zoo I’ve met. My son delighted very much
      ljves to watch gorillas. The best online zoo I’ve met. My son delighted very much
      ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals. The best online
      zoo I’ve met. My son delighted very much loves to watch gorillas. Online zoo is one jf
      the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
      very much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon4.png',
      userName: 'Mila Riksha',
      location: 'Berlin',
      time: '09.01.2023',
      text: `My daughter delighted very much loves to watch pandas. Online zoo is one of the ways to
      instill a love for animals.The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My daughter delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
      zoo I’ve met. My daughter delighted very much ljves to watch gorillas. The best online zoo
      I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the
      ways to instill a love for animals.The best online zoo I’ve met. My daughter delighted very
      much ljves to watch gorillas. Online zoo is one of the ways to instill a love for
      animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon3.png',
      userName: 'Michael Johns',
      location: 'Local Austria',
      time: 'Today',
      text: `The best online zoo I’ve met. My son delighted very much loves to watch gorillas.
          Online zoo is one of the ways to instill a love for animals.The best online zoo I’ve
          met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
          to instill a love for animals. The best online zoo I’ve met. My son delighted very
          much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
          animals.The best online zoo I’ve met. My son delighted very much ljves to watch
          gorillas. Online zoo is one jf the ways to instill a love for animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon2.png',
      userName: 'Oskar Samborska',
      location: 'Local Austria',
      time: 'Yesterday',
      text: `My son delighted very much ljves to watch gorillas. Online zoo is one of the ways to
      instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.
      My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways to
      instill a love for animals.The best online zoo I’ve met. My son delighted very much
      loves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
      zoo I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf
      the ways to instill a love for animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon3.png',
      userName: 'Fredericka Michelin',
      location: 'New York',
      time: 'Today',
      text: `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve
      met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the ways
      to instill a love for animals.The best online zoo I’ve met. My son delighted very much
      ljves to watch gorillas. The best online zoo I’ve met. My son delighted very much
      ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My son delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals. The best online
      zoo I’ve met. My son delighted very much loves to watch gorillas. Online zoo is one jf
      the ways to instill a love for animals.The best online zoo I’ve met. My son delighted
      very much ljves to watch gorillas. Online zoo is one jf the ways to instill a love for
      animals.`,
    },
    {
      imgURL: 'assets/icons/user-icon4.png',
      userName: 'Mila Riksha',
      location: 'Berlin',
      time: '09.01.2023',
      text: `My daughter delighted very much loves to watch pandas. Online zoo is one of the ways to
      instill a love for animals.The best online zoo I’ve met. Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My daughter delighted very much ljves to watch
      gorillas. Online zoo is one jf the ways to instill a love for animals.The best online
      zoo I’ve met. My daughter delighted very much ljves to watch gorillas. The best online zoo
      I’ve met. My son delighted very much ljves to watch gorillas. Online zoo is one jf the
      ways to instill a love for animals.The best online zoo I’ve met. My daughter delighted very
      much ljves to watch gorillas. Online zoo is one of the ways to instill a love for
      animals.`,
    },
  ];


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials-section">
      <h3>TESTIMONIALS</h3>
      <div className="testimonial-container">
        <button onClick={handlePrev} className="testimonial-button">
          Prev
        </button>
        <div className="testimonial-content">
          <img src={testimonials[currentIndex].imgURL} alt={testimonials[currentIndex].userName} />
          <div className="testimonial-info">
            <h2>{testimonials[currentIndex].userName}</h2>
            <p><strong>Location:</strong> {testimonials[currentIndex].location}</p>
            <p><strong>Time:</strong> {testimonials[currentIndex].time}</p>
            <p>{testimonials[currentIndex].text}</p>
          </div>
        </div>
        <button onClick={handleNext} className="testimonial-button">
          Next
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
