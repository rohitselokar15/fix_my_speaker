import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Subscribe from "./components/Subscribe";
import Terms_condition from "./pages/Terms_condition";
import Privacy_policy from "./pages/Privacy_policy";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<Terms_condition />} />
        <Route path="/privacy-policy" element={<Privacy_policy />} />
      </Routes>
      {/* <Subscribe /> */}
      <Footer />
    </>
  );
};

export default App;
