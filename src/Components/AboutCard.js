import React, { useEffect, useRef } from 'react';
import '../styles/AboutCard.css';

export default function AboutCard(props) {
  const { topic, body } = props;
  const cardRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      const cardElement = cardRef.current;
      const cardWidth = cardElement.offsetWidth;
      const cardHeight = cardElement.offsetHeight;
      const fontSize = Math.min(cardWidth / 20, cardHeight / 10);
      
      cardElement.style.setProperty('--font-size', `${fontSize}px`);
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className='AboutCard' ref={cardRef}>
      <div className='card-head'>
        <h1>{topic}</h1>
      </div>
      <div className='card-body'>
        <h1>{body}</h1>
      </div>
    </div>
  );
}
