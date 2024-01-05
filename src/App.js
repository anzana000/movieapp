import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
