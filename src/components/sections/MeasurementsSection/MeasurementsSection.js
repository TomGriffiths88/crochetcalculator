import React from 'react';
import { withRouter } from 'react-router-dom';
import TopInputs from './TopInputs/TopInputs';
import SkirtInputs from './SkirtInputs/SkirtInputs';

const measurementsSection = (props) => {
  let project = '';

  const prevBtnHandler = () => {
    props.history.goBack();
  };

  const nextBtnHandler = () => {
    props.history.push('/gauge');
  };

  switch (props.projectType) {
    case 'top':
      project = (
        <TopInputs
          project={props.project}
          change={props.change}
          units={props.units}
        />
      );
      break;
    case 'skirt':
      project = (
        <SkirtInputs
          project={props.project}
          change={props.change}
          units={props.units}
        />
      );
      break;
    default:
      return;
  }

  return (
    <div className='col sm-12 center padding-large border background-white'>
      <h3 className='margin-top-small margin-bottom-small'>2: Measurements</h3>
      <p className='margin-bottom-small text-muted'>
        Lets take a few measurements...
      </p>
      {project}
      <div className='row flex-edges'>
        <button onClick={prevBtnHandler} className='background-secondary '>
          Prev
        </button>
        <button
          onClick={nextBtnHandler}
          className='background-success '
          disabled={!props.project.valid}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(measurementsSection);
