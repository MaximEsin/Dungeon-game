import { Routes, Route } from "react-router";
import "./App.css";
import Start from "./pages/Start";
import Main from "./pages/Main";
import { useState } from "react";

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
      </Routes>
    </div>
  );
}

export default App;
