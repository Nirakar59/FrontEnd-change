import React from "react";
import './Banner.css';
import bannerImage from './Banner.jpg';

const Banner = () => {
  const containerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    fontFamily: "'Spicy Rice', serif",
    fontWeight: 400,
    fontStyle: 'normal',
    color: '#4fc3f7',
  };

  const contentContainerStyle = {
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for better styling
  };

  const contentStyle = {
    textAlign: 'left',
  };

  const headlineStyle = {
    margin: '0 0 10px 0',
    fontSize: '2.5em', // Make the headline larger
    lineHeight: '1.2',
  };

  const subheadlineStyle = {
    margin: '0',
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: 'black'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#4fc3f7',
    border: '2px solid #4fc3f7 ',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: "'Spicy Rice', serif",
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="contentContainer" style={contentContainerStyle}>
        <h1 style={headlineStyle}>Stronger Minds, Together</h1>
        <h3 style={subheadlineStyle}>
          Join our community of like-minded individuals committed to personal growth
          and collective well-being. Together, we explore the depths of human potential
          and support each other on the journey to becoming the best versions of ourselves.
        </h3>
        <a href="#refresh" style={buttonStyle}>Go to Refresh</a>
      </div>
    </div>
  );
};

export default Banner;
