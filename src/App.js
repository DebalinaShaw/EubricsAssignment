import React, { Fragment, useEffect, useState } from 'react';

import './App.css';

// Components
import HealthInputTodo from './components/HealthInputTodo';
import HealthListTodos from './components/HealthListTodos';
import TechnicalInputTodo from './components/TechnicalInputTodo';
import TechnicalListTodos from './components/TechnicalListTodos';
import CommunicationInputTodo from './components/CommunicationInputTodo';
import CommunicationListTodos from './components/CommunicationListTodos';
import PresentationInputTodo from './components/PresentationInputTodo';
import PresentationListTodos from './components/PresentationListTodos';
import PhysicalInputTodo from './components/PhysicalInputTodo';
import PhysicalListTodos from './components/PhysicalListTodos';

function App() {
  const storedBehavior = localStorage.getItem('behavior');
  const [behavior, setBehavior] = useState(storedBehavior || 'health');

  const handleBehaviorChange = (newBehavior) => {
    setBehavior(newBehavior);
    localStorage.setItem('behavior', newBehavior);
  };

  useEffect(() => {
    localStorage.setItem('behavior', behavior);
  }, [behavior]);

  return (
    <Fragment>
      <div className='container mt-5 text-center'>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <button
              className={`btn btn-${behavior === 'health' ? 'primary' : 'secondary'}`}
              onClick={() => handleBehaviorChange('health')}
            >
              Health
            </button>
          </div>
          <div className='col-auto'>
            <button
              className={`btn btn-${behavior === 'technical' ? 'primary' : 'secondary'}`}
              onClick={() => handleBehaviorChange('technical')}
            >
              Technical
            </button>
          </div>
          <div className='col-auto'>
            <button
              className={`btn btn-${behavior === 'communication' ? 'primary' : 'secondary'}`}
              onClick={() => handleBehaviorChange('communication')}
            >
              Communication
            </button>
          </div>
          <div className='col-auto'>
            <button
              className={`btn btn-${behavior === 'presentation' ? 'primary' : 'secondary'}`}
              onClick={() => handleBehaviorChange('presentation')}
            >
              Presentation
            </button>
          </div>
          <div className='col-auto'>
            <button
              className={`btn btn-${behavior === 'physical' ? 'primary' : 'secondary'}`}
              onClick={() => handleBehaviorChange('physical')}
            >
              Physical
            </button>
          </div>
        </div>
        <div className='todo-container'>
          {behavior === 'health' && (
            <Fragment>
              <HealthInputTodo />
              <HealthListTodos />
            </Fragment>
          )}
          {behavior === 'technical' && (
            <Fragment>
              <TechnicalInputTodo />
              <TechnicalListTodos />
            </Fragment>
          )}
          {behavior === 'communication' && (
            <Fragment>
              <CommunicationInputTodo />
              <CommunicationListTodos />
            </Fragment>
          )}
          {behavior === 'presentation' && (
            <Fragment>
              <PresentationInputTodo />
              <PresentationListTodos />
            </Fragment>
          )}
          {behavior === 'physical' && (
            <Fragment>
              <PhysicalInputTodo />
              <PhysicalListTodos />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;