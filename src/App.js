import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Screen } from "./screen/screen1";
import { Screen2 } from "./screen/screen2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="manage-event" element={<Screen2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
