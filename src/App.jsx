import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import NavbarComponent from "./components/NavbarComponent";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <div>
          <ScrollToTop />
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route path="/service" element={<ServicesPage />} />
          </Routes>
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
