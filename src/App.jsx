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
import User from "./components/pages/User";

function App() {
  const location = useLocation();
  const mainClass =
    location.pathname === "/about"
      ? "min-h-[433.5px] flex justify-center items-center"
      : "flex-grow flex flex-col justify-start items-center";
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:login" element={<User />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
