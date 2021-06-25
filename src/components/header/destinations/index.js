import React, { useState } from 'react';

import DestinationFields from './fields';

function Destinations() {
  const [destionations, setDestionations] = useState([
    { value: ''},
    { value: ''}
  ]);

  const addDestionation = () => {
    if(destionations.length >= 4) return;
    const destionation = {
      value: '',
    };
    setDestionations([ ...destionations, destionation ]);
  };

  const deleteDestionation = (index) => {
    const filteredDestionations = destionations.filter((destionation, i) => i !== index);
    setDestionations(filteredDestionations);
  };

  const switchFields = () => {
    const firstItemCopy = { ...destionations[0] };
    const newDestionations = [...destionations];
    console.log(newDestionations);
    newDestionations[0] = newDestionations[1];
    console.log(newDestionations);
    newDestionations[1] = firstItemCopy;
    console.log(newDestionations);
    setDestionations(newDestionations);
  };

  const changeDestionation = (index, value) => {
    const newDestionations = destionations.map((destionation, i) => {
      if(index === i) {
        return { value };
      }
      return destionation;
    });
    setDestionations(newDestionations);
  };
  return (
    <div className="destionations">
      <img className="destinations__back" src="/icons/left-arrow.svg" alt="Back" />
      {destionations.length === 2 && (
        <img
          onClick={switchFields}
          className="destionations__switch"
          src="/icons/arrows.svg"
          alt=""
        />
      )}
      <DestinationFields
        {...{
          destionations,
          changeDestionation,
          deleteDestionation,
        }}
      />
      <div className="destionations__add" onClick={addDestionation}>
        <img src="/icons/plus.svg" width="16" alt="" />
        <div>Add destination</div>
      </div>
    </div>
  );
}

export default Destinations;
