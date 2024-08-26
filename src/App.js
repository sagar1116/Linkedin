import React from 'react';
import './App.css';
import Header from"./Header";
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
      <h1 className='Link'>Linkedin</h1>

      {/*Header*/}
      <Header/>

      {/*App Body*/}
      {/*Sidebar*/}
      <Sidebar/>
      {/*Feed*/}
      {/*Widgets*/}
    </div>
  );
}

export default App;
