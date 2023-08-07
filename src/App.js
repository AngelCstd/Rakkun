import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/Inicio";
import { Carga } from "./components/Carga";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
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
