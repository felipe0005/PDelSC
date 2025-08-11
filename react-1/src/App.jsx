import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import Creation from "./pages/creation.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/details">details</Link>
            </li>
            <li>
              <Link to="/creation">creation</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/creation" element={<Creation />} />
      </Routes>
    </div>
  );
}

export default App;
