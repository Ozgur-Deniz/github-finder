import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  const location = useLocation();
  const mainClass =
    location.pathname === "/about"
      ? "min-h-[433.5px] flex justify-center items-center"
      : "min-h-[433.5px] flex justify-center items-start";
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
