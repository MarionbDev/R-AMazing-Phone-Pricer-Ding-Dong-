/* eslint-disable import/no-duplicates */
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PriceGenerator from "./pages/PriceGenerator";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import "./pages/faq.scss";

import UserContext from "./context/UserContext";

import "./App.scss";

function App() {
  const [{ user }] = useContext(UserContext);

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
        {user.id !== null && <Header />}
        <Routes>
          <Route
            path="/"
            element={!user.id ? <Navigate to="/login" /> : <Home />}
          />
          {!user.id && <Route path="/login" element={<Login />} />}
          <Route path="/mobile" element={<PriceGenerator />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
