import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Carga } from "./components/Carga";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { fetchNotion, KEY_END_POINT } from "./helpers/fetch";


function App() {
  const [categorias, setCategorias] = useState([])

useEffect(()=>{
 async function fetchDataHeader() {
  try {
    const data = await fetchNotion(KEY_END_POINT.KEY_ESPECIAL, "Categoria")
    setCategorias(data)
  } catch (error) {
    console.log(error)
  }
 }
 fetchDataHeader()
},[])

useEffect(()=>{
  console.log(categorias)
},[categorias])

  return (
    <BrowserRouter>
      <HeaderNav categorias={categorias} />
      <Routes>
        <Route path="/" element={<Inicio categorias={categorias}/>} />
        <Route path="/__log" element={<Carga />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
