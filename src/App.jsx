import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Produtos from "./Pages/Produtos/Produtos";
import Galeria from "./Pages/Galeria/Galeria";
import Contato from "./Pages/Contato/Contato";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/produtos" element={<Produtos />}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
