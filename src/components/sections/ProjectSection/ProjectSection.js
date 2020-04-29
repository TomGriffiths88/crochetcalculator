import React from 'react';

import { withRouter } from 'react-router-dom';

const projectSection = (props) => {
  const btnClick = () => {
    props.history.push('/measurements');
  };

  return (
    <div className='col sm-12 center padding-large border background-white'>
      <h3 className='margin-top-small margin-bottom-small'>1: Project</h3>
      <p className='margin-bottom-large text-muted'>
        Lets get this project started
      </p>

      <div className='form-group padding-small'>
        <div className='row flex-center'>
          <label>
            What kind of project would you like to make?
            <select
              name='project'
              onChange={props.change}
              className='input input-block'
              value={props.project}
            >
              <option value='' default>
                ---
              </option>
              <option value='top'>Top</option>
              <option value='skirt'>Skirt</option>
            </select>
          </label>
        </div>
      </div>

      <div className='form-group padding-small'>
        <div className='row flex-center'>
          <label>
            What units would you like to work in?
            <select
              name='units'
              onChange={props.change}
              className='input input-block'
              value={props.units}
            >
              <option value='' default>
                ---
              </option>
              <option value='cm'>cm</option>
              <option value='in'>Inches</option>
            </select>
          </label>
        </div>
      </div>

      <div className='row flex-right'>
        <button
          disabled={!props.valid}
          onClick={btnClick}
          className='background-success'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default withRouter(projectSection);
