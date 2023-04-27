import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/home";
import Navbar from "./Components/navbar";
import Services from "./Components/pages/services";
import Work from "./Components/pages/work";
import Contact from "./Components/pages/contact";
import Testimonials from "./Components/pages/testimonials";
import Myblogweb from "./Components/pages/myblogweb";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/myblogweb" element={<Myblogweb />} />
          <Route path="/testimonial" element={<Testimonials />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
