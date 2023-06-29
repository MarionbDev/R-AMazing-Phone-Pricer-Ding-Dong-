import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FAQ from "./components/FAQ";

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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
