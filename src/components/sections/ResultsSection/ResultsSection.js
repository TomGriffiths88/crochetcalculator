import React from 'react';
import { withRouter } from 'react-router-dom';

import formula from '../../../helpers/formula';

const resultsSection = ({ project, gauge, ...props }) => {
  let results = formula(project, gauge);

  const backButtonHandler = () => {
    props.history.goBack();
  };

  const startOverButtonHandler = () => {
    props.history.push('/');
  };

  return (
    <div className='border padding-large background-white'>
      <h3 className='margin-top-small margin-bottom-small'>4: Results</h3>
      <p className='margin-bottom-large text-muted'>Happy hooking!!</p>
      <div className='row flex-center' style={{ textAlign: 'center' }}>
        <p className='col col-12'>Start with {results.s1} stitches</p>
        <p className='col col-12'>{results.res1}</p>
        <p className='col col-12'>{results.res2}</p>
      </div>

      <div className='row margin-top-large flex-edges'>
        <button class='background-secondary' onClick={backButtonHandler}>
          back
        </button>
        <button className='background-warning' onClick={startOverButtonHandler}>
          Start Over
        </button>
      </div>
    </div>
  );
};

export default withRouter(resultsSection);
