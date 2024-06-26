/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './BurgerLayer.css';

const BurgerLayer = ({ src, offset }) => {
  return (
    <div className="burger-layer" style={{ transform: `translateY(${offset}px)` }}>
      <img src={src} alt="Burger Layer" />
    </div>
  );
};

export default BurgerLayer;
