import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import SamplePoc from './sample';
import Main from "./Main";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/home" element={<Home />}/>
      {/* Sample POC, Below line component can be cleaned up later */}
      <Route path="/test" element={<SamplePoc />} />
    </Routes>
  </Router>
);
export default App;