import { useState } from "react";

import "./App.css";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Proof from "./components/sections/Proof";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricings";
import Customers from "./components/sections/Customers";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-white p-[8px] md:p-0 lg:p-0">
      <Navbar />
      <Hero />
      <Proof />
      <Features />
      <Pricing />
      <Customers />
      <Contact />
      <Footer />
      {/* Other sections will go here */}
    </main>
  );
}

export default App;
