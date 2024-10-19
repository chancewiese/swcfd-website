import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <Router>
         <div className="app-container">
            <Header />
            <main className="main-content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/events" element={<Events />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
