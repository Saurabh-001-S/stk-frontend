import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import TradeGraph from "./Pages/TradeGraph";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/edit-entry/:id" element={<Home />} />
          <Route path="/add-entry" element={<Edit />} />
          <Route path="/trade-graph" element={<TradeGraph />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
