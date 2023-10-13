import { Routes, Route } from "react-router";
import "./App.css";
import Start from "./pages/Start";
import Main from "./pages/Main";
import Dead from "./pages/Dead";
import { useState } from "react";
import Win from "./pages/Win";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/main"
          element={<Main active={modalActive} setActive={setModalActive} />}
        />
        <Route path="/dead" element={<Dead />} />
        <Route path="/win" element={<Win />} />
      </Routes>
    </div>
  );
}

export default App;
