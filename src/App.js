import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
