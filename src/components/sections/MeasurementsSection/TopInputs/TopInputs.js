import React, { useState } from 'react';

const TopInputs = ({ project, change, units }) => {
  const instructions = (
    <div className='help padding-top-small padding-bottom-small slide-in-top row flex-center'>
      <div className=' col sm-8'>
        <p>
          Measure the circumference of your chest underneath your arm-pits (or
          where you would like your top to start), your chest at the widest part
          (generally over the center of your breast), and your chest where you
          would like your top to end. Then enter them below.
        </p>
        <p>
          Distance A is the vertical distance between your under-arm and chest
          measurements. Distance B is the vertical distance between your chest
          and your end-point measurements.
        </p>
      </div>
    </div>
  );

  const [showInstructions, toggleInstructions] = useState(false);

  const instructionsToggle = () => {
    toggleInstructions(!showInstructions);
  };

  return (
    <div className='form-group'>
      <span className='badge margin-bottom-small' onClick={instructionsToggle}>
        Instructions
      </span>
      {showInstructions && instructions}
      <div className='row flex-center'>
        <label>
          Under-arm Circumference ({units})
          <input
            type='number'
            onChange={change}
            name='m1'
            value={project.m1}
            className='input margin-small'
          />
        </label>
      </div>
      <div className='row flex-center'>
        <label>
          Chest Circumference ({units})
          <input
            type='number'
            onChange={change}
            name='m2'
            value={project.m2}
            className='input'
          />
        </label>
      </div>
      <div className='row flex-center'>
        <label>
          End Circumference ({units})
          <input
            type='number'
            onChange={change}
            name='m3'
            value={project.m3}
            className='input'
          />
        </label>
      </div>
      <div className='row flex-center'>
        <label>
          Distance A ({units}){' '}
          <input
            type='number'
            onChange={change}
            name='d1'
            value={project.d1}
            className='input'
          />
        </label>
      </div>
      <div className='row flex-center'>
        <label>
          Distance B ({units})
          <input
            type='number'
            onChange={change}
            name='d2'
            value={project.d2}
            className='input'
          />
        </label>
      </div>
    </div>
  );
};

export default TopInputs;
