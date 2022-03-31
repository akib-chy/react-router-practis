import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Welcome TO React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Friends" element={<Friends />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Home />
      <About />
      <Friends /> */}
    </div>
  );
}

export default App;
