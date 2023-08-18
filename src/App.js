import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Carga } from "./components/Carga";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App() {
  const [dataHeader, setDataHeader] = useState({})

useEffect(()=>{
 async function fetchDataHeader() {
  try {
    const data = await fetch("https://obtencion-imagenes-back.vercel.app/notion")
    setDataHeader(data)
  } catch (error) {
    console.log(error)
  }
 }
 fetchDataHeader()
 console.log(dataHeader)
},[])

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/__log" element={<Carga />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
