import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import Home from "./pages/Home";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <main className="App">
      <span id="background-wrap">
        <div className="bubble x1" />
        <div className="bubble x2" />
        <div className="bubble x3" />
        <div className="bubble x4" />
        <div className="bubble x5" />
        <div className="bubble x6" />
        <div className="bubble x7" />
        <div className="bubble x8" />
        <div className="bubble x9" />
        <div className="bubble x10" />
      </span>

      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </UserContextProvider>
    </main>
  );
}

export default App;
