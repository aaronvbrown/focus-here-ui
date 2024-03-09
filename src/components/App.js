import React from 'react';
import Students from './Students';
import './App.css';
import HeaderBar from './Header';

function App() {
  return (
    <>
      <React.Fragment>
        <HeaderBar />
        <Students />
      </React.Fragment>
    </>
  );
}

export default App;
