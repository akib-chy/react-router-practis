import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import FriendDetails from "./Components/FriendDetails/FriendDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route
          path="/friend/:friendId"
          element={<FriendDetails></FriendDetails>}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Home />
      <About />
      <Friends /> */}
    </div>
  );
}

export default App;
