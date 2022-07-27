import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./comp/Cards";
import Cart from "./comp/Cart";
import Nav from "./comp/Nav";
import Slider from "./comp/Slider";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Slider />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route path="/item_detail/:river" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
