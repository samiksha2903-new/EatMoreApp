import React from "react"
import {Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// components
import NavBar from "./components/Navbar/NavBar"

//Pages
import HomePage from "./pages/Home"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Item from "./pages/Item"
import Success from "./pages/Success"

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/orderplaced" element={<Success />} /> 
      </Routes>
    </div>
  )
}

export default App
