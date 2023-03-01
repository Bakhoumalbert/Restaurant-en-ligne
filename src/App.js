import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HeadLineCards from "./components/HeadLineCards";
import Foods from "./components/Foods";
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
