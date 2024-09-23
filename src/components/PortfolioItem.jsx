import React, { useEffect, useRef } from 'react';

const PortfolioItem = ({ videoSrc, title, description }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="portfolio-item">
      <video ref={videoRef} muted autoPlay loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="portfolio-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
