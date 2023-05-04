import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';


function App() {

  const Name = () => {
    return (
      <h1>Hello Myself Anish</h1>
    )
  };

  return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route path='/contact/name' element={<Name/>} />

        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;