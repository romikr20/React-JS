import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Product from "./Product";
import Contact from "./Contact us";
import Header from "./Com-Comp/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App;
