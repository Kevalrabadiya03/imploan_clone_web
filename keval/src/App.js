import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Home";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Policy from "./Policy";
import Terms from "./Terms";
import Pagenotfound from "./Pagenotfound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="privacypolicy" element={<Policy/>} />
          <Route path="terms" element={<Terms/>} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
