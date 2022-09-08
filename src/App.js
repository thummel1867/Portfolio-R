import "./App.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavigationBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
