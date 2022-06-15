import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomeComponents/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home transparent={true} />} />
          <Route path="/about" element={<About transparent={false} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
