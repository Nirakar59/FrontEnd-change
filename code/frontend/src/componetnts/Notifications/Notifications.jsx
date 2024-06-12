import React from 'react'
import './Notification.css'
import { useState } from 'react';
import { useEffect } from 'react';
const Notification = () => {
    const [notification, setNotification] = useState(null);
  
    useEffect(() => {
      fetchNotification();
    }, []);
  
    const fetchNotification = () => {
      fetch('your_api_endpoint_here')
        .then(response => response.json())
        .then(data => {
          setNotification(data.message);
        })
        .catch(error => {
          console.error('Error fetching notification:', error);
        });
    };
  
    const handleClose = () => {
      setNotification(null);
    };
  
    return (
      <div>
        {notification && (
          <div className={`notification ${notification.type}`}>
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
            {notification.message}
          </div>
        )}
      </div>
    );
  };
  
  export default Notification;
