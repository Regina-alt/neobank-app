import "./css/App.css";
import "./css/media.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="header">
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan" element={<Loan />} />
          </Routes>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
