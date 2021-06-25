import React from 'react';

const DestionationMarker = ({ title }) => (
  <div className="destionation-marker">
    <div className="destionation-marker__title">{title}</div>
    <div className="destionation-marker__track">
      <div className="destionation-marker__track__item" />
      <div className="destionation-marker__track__item" />
      <div className="destionation-marker__track__item" />
      <div className="destionation-marker__track__item" />
    </div>
  </div>
);

export default DestionationMarker;
