import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindMentor from "./pages/FindMentor";
import BeaMentor from "./pages/BeaMentor";
import Contact from "./pages/Contact";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/findmentor" element={<FindMentor/>}/>
        <Route path="/apply" element={<BeaMentor/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    
  );
}

export default App;
