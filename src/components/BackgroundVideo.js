// src/components/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css'; // Import the CSS file for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
