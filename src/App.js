import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Carga } from "./components/Carga";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchNotion, KEY_END_POINT } from "./helpers/fetch";
import { Category } from "./components/Category";
import { ProductPage } from "./components/ProductPage";


function App() {
  const [categorias, setCategorias] = useState([])

useEffect(()=>{
 async function fetchDataHeader() {
  try {
    const data = await fetchNotion(KEY_END_POINT.KEY_ESPECIAL, "Categoria")
    let result = data.sort((a, b)=>{
      const nameA = a.category
      const nameB = b.category
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    console.log(data)
    setCategorias(result)
  } catch (error) {
    console.log(error)
  }
 }
 fetchDataHeader()
},[])


  return (
    <BrowserRouter>
      <HeaderNav categorias={categorias} />
      <Routes>
        <Route path="/" element={<Inicio categorias={categorias}/>} />
        <Route path="/__log" element={<Carga />} />
        <Route path="/category/:category" element={<Category/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
