import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conform from "./Conform";
import Navcompo from "./Navcompo";
import Orderconfo from "./Orderconfo";
import Pizzimg from "./Pizzimg";

export default function Roution() {
  return (
    <div>
      <Navcompo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pizzimg />} />
          <Route path="/conform" element={<Conform />} />
          <Route path="/orderconfo" element={<Orderconfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
