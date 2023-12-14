import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import NotFound from "./Components/NotFound";
import Recursos from "./Components/Recursos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/info" element={<Info />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
