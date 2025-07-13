// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

// const Works = React.lazy(() => import(''))

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
