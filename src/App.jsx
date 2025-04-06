import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import { createContext } from "react";
import View from "./components/View";

const productcontext = createContext();
const App = () => {
  const [items, setitems] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [viewpage, setviewpage] = useState([])

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setitems(response.data.products));
  }, []);

  return (
    <productcontext.Provider value={{items,setitems,searchTerm,setSearchTerm,viewpage,setviewpage}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/view" element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </productcontext.Provider>
  );
};

export default App;
export { productcontext };
