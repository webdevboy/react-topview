import React from 'react';

import StartingPointMarker from '../../markers/startingPoint';
import MapPointer from '../../markers/mapPointer';
import DestionationMarker from '../../markers/destionationMarker';

const indexToLetter = {
  1: 'A',
  2: 'B',
  3: 'C'
};

function DestinationFields({ destionations, changeDestionation, deleteDestionation }) {
  return (
    <div>
      {destionations.map((destionation, index) => (
        <div className="destionation-field-container" key={index}>
          {index === 0 && <StartingPointMarker />}
          {index !== 0 && destionations.length === 2 && (
            <MapPointer />
          )}
          {index > 0 && destionations.length > 2 && (
            <DestionationMarker title={indexToLetter[index]} />
          )}
          <input
            className="destionation-field"
            value={destionation.value}
            onChange={(e) => {changeDestionation(index, e.target.value)}}
            placeholder={index === 0 ? 'Choose starting point' : 'Choose destination'}
          />
          {index > 0 && destionations.length > 2 && (
            <img
              src="/icons/cancel.svg"
              className="destionation-field__delete"
              alt="Delete"
              onClick={() => {deleteDestionation(index)}}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default DestinationFields;
