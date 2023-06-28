import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import Home from "./pages/Home";
import FAQ from "./components/FAQ";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
