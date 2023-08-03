import React, { useState, useEffect } from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000); // Change 2000ms to control the display duration of the alert

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    showAlert && (
      <div className="custom-alert">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    )
  );
};

export default CustomAlert;
