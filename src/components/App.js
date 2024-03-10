import React from 'react';
import Students from './Students';
import Courses from './Courses';
import CanvasCourses from './CanvasCourses';
import './App.css';
import HeaderBar from './Header';

function App() {
  return (
    <>
      <React.Fragment>
        <HeaderBar />
        <div class="main-body">
          <Students />
          <Courses />
          <CanvasCourses />
        </div>
      </React.Fragment>
    </>
  );
}

export default App;
