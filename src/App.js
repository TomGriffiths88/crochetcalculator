import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ProjectPlanner from './containers/ProjectPlanner/ProjectPlanner';

function App() {
  return (
    <div className='App container'>
      <Layout>
        <ProjectPlanner />
      </Layout>
    </div>
  );
}

export default App;
