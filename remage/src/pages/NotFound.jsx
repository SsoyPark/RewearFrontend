import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Oops!</h1>
        <p className="not-found-subtitle">404 - Page Not Found</p>
        <p className="not-found-description">
          The page you are looking for does not exist..
        </p>
        <div className="not-found-buttons">
          <Link to="/" className="not-found-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
