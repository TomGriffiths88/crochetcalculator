import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const GaugeSection = (props) => {
  const { gauge, change, units } = props;

  const prevButtonHandler = () => {
    props.history.goBack();
  };

  const calcButtonHandler = () => {
    props.history.push('/results');
  };

  const impExample = (
    <div>
      <p>
        For example: I crochet a 4x4 inch square. I count 20 rows and 24
        stitches.
      </p>
      <p>Rows per inch: 20 / 4 = 5</p>
      <p>Stitches per inch: 24 / 4 = 6</p>
    </div>
  );

  const decExample = (
    <div>
      <p>
        For example: I crochet a 10x10 cm square. I count 25 rows and 30
        stitches.
      </p>
      <p>Rows per inch: 25 / 10 = 2.5</p>
      <p>Stitches per inch: 30 / 10 = 3</p>
    </div>
  );

  const instructions = (
    <div className='help padding-top-small padding-bottom-small slide-in-top row flex-center'>
      <div className='col sm-8'>
        <p>
          Crochet a square {units === 'in' ? '4x4 inches' : '10x10cm'} using
          your chosen yarn and stitch.
        </p>
        <p>
          Count the number of rows and stitches that make up your square. Then
          divide each by the size of the square (
          {units === 'in' ? '4 in' : '10 cm'}) to get the number of stitches and
          rows per {units === 'in' ? 'inch' : 'cm'}. Then enter the figures in
          the boxes below.
        </p>
        {units === 'in' ? impExample : decExample}
      </div>
    </div>
  );

  const [showInstructions, toggleInstructions] = useState(false);

  const instructionsToggle = () => {
    toggleInstructions(!showInstructions);
  };

  return (
    <div className='border padding-large background-white'>
      <h3 className='margin-top-small margin-bottom-small'>3: Gauge</h3>
      <p className='margin-bottom-small text-muted'>
        Lets calculate your gauge...{' '}
      </p>

      <div className='form-group padding-small'>
        <span
          className='badge margin-bottom-small'
          onClick={instructionsToggle}
        >
          Instructions
        </span>
        {showInstructions && instructions}
        <div className='row flex-center'>
          <label>
            Rows per {units === 'in' ? 'inch' : 'cm'}:
            <input
              type='number'
              onChange={change}
              name='rpu'
              value={gauge.rpu}
              placeholder='eg. 10'
              className='input'
            />
          </label>
        </div>
        <div className='row flex-center'>
          <label>
            Stitches per {units === 'in' ? 'inch' : 'cm'}:
            <input
              type='number'
              onChange={change}
              name='spu'
              value={gauge.spu}
              placeholder='eg. 10'
              className='input'
            />
          </label>
        </div>
        <div className='row flex-center'>
          <button
            onClick={prevButtonHandler}
            className='col sm-4 margin-small background-secondary'
          >
            Back
          </button>
          <button
            className='col sm-4 margin-small background-success'
            disabled={!gauge.valid}
            onClick={calcButtonHandler}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(GaugeSection);
