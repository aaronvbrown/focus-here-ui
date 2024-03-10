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
        <Students />
        <Courses />
        <CanvasCourses />
      </React.Fragment>
    </>
  );
}

export default App;
