import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from "./components/VendingMachine";

import Water from "./components/Water";
import Candy from "./components/Candy";
import Chips from "./components/Chips";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/water" element={<Water />} />
          <Route exact path="/candy" element={<Candy />} />
          <Route exact path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
