// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import PageNotFound from "./components/error/error";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

