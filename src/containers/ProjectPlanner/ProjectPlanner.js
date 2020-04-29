import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ProjectSection from '../../components/sections/ProjectSection/ProjectSection';
import MeasurementsSection from '../../components/sections/MeasurementsSection/MeasurementsSection';
import GaugeSection from '../../components/sections/GaugeSection/GaugeSection';
import ResultsSection from '../../components/sections/ResultsSection/ResultsSection';

class ProjectPlanner extends Component {
  state = {
    project: '',
    units: '',
    gauge: {
      rpu: '',
      spu: '',
      valid: '',
    },
    top: {
      m1: '',
      m2: '',
      m3: '',
      d1: '',
      d2: '',
      valid: false,
    },
    skirt: {
      m1: '',
      m2: '',
      m3: '',
      d1: '',
      d2: '',
      valid: false,
    },
    converted: [],
    results: [],
  };

  //handle changes for the project section inputs
  projectChangeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  //handle changes for the gauge section inputs
  gaugeChangeHandler = (e) => {
    let { name, value } = e.target;
    const oldGauge = { ...this.state.gauge };
    const newGauge = { ...oldGauge, [name]: value };
    newGauge.valid = this.checkComplete(newGauge);
    this.setState({ gauge: newGauge });
  };

  //handles changes for the measurements section
  measurementsChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const project = this.state.project;
    const projectMeasurements = { ...this.state[project] };
    const newMeasurements = {
      ...projectMeasurements,
      [name]: value,
    };
    newMeasurements.valid = this.checkComplete(newMeasurements);
    this.setState({ [project]: newMeasurements });
  };

  //check there are entries for all measurements
  checkComplete = (project) => {
    let valid = true;
    for (let i in project) {
      if (project[i] === 0 || project[i] === '') {
        valid = false;
      }
    }
    return valid;
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              exact
              render={() => (
                <ProjectSection
                  change={this.projectChangeHandler}
                  valid={this.state.project !== '' && this.state.units !== ''}
                  project={this.state.project}
                  units={this.state.units}
                />
              )}
            />
            {this.state.project && (
              <Route
                path='/measurements'
                render={() => (
                  <MeasurementsSection
                    projectType={this.state.project}
                    change={this.measurementsChangeHandler}
                    project={this.state[this.state.project]}
                    units={this.state.units}
                  />
                )}
              />
            )}

            {this.state.project && (
              <Route
                path='/gauge'
                render={() => (
                  <GaugeSection
                    change={this.gaugeChangeHandler}
                    gauge={this.state.gauge}
                    units={this.state.units}
                  />
                )}
              />
            )}
            {this.state.project && (
              <Route
                path='/results'
                render={() => (
                  <ResultsSection
                    project={this.state[this.state.project]}
                    gauge={this.state.gauge}
                  />
                )}
              />
            )}
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default ProjectPlanner;
