import React, { useState } from 'react';

const SkirtInputs = (props) => {
  const { change, project, units } = props;

  const instructions = (
    <div className='help padding-top-small padding-bottom-small slide-in-top row flex-center'>
      <div className='col sm-8'>
        <p>
          Measure the circumference of your waist, hips, and your legs/knees
          where you would like your skirt to end. Then enter the measurements
          below.
        </p>
        <p>
          Distance A is the vertical distance between your waist and hips
          measurements. Distance B is the vertical distance between your hips
          and your end-point (leg/knee) measurement.
        </p>
        <p>
          If you wanted to make a straight skirt that was figure fitted at the
          top. Simply enter the hips measurement into the end-point box too and
          distance B should be the total desired length of the skirt minus
          distance A.
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
          Waist Circumference ({units})
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
          Hip Circumference ({units})
          <input
            type='number'
            onChange={change}
            name='m2'
            value={project.m2}
            className='input margin-small'
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
            className='input margin-small'
          />
        </label>
      </div>
      <div className='row flex-center'>
        <label>
          Distance A ({units})
          <input
            type='number'
            onChange={change}
            name='d1'
            value={project.d1}
            className='input margin-small'
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
            className='input margin-small'
          />
        </label>
      </div>
    </div>
  );
};

export default SkirtInputs;
