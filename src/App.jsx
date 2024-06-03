import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/Footer"
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
