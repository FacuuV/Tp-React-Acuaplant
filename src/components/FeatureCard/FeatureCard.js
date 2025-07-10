import React from 'react';
import './FeatureCard.css';

// Este componente recibe el icono, título y descripción y los muestra.
const FeatureCard = ({ iconClass, title, description }) => {
  return (
    <div className="card-feature">
      <i className={iconClass}></i>
      <div className="feature-content">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;