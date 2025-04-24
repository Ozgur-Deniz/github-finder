import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GithubProvider } from "./context/GithubContext";

createRoot(document.getElementById("root")).render(
  <GithubProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GithubProvider>
);
