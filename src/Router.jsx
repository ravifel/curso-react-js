import React from 'react'
import News from "./pages/news/News";
import Counter from "./pages/counter/Counter";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="news" element={<News />}></Route>
      <Route path="counter" element={<Counter />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
