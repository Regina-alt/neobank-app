import "./css/App.css";
import "./css/media.css";
import { Routes, Route, useParams } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import Footer from "./components/Footer";
import Scoring from "./pages/Scoring";
import Document from "./pages/Document";
import Sign from "./pages/Sign";
import Code from "./pages/Code";

function App() {
  return (
    <>
      <section className="header">
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/loan/:local" element={<Scoring />} />
            <Route path="/loan/:local/document" element={<Document />} />
            <Route path="/loan/:local/document/sign" element={<Sign />} />
            <Route path="/loan/:local/code" element={<Code />} />
          </Routes>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
