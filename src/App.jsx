import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Inicio/Info";
import NotFound from "./Components/NotFound/NotFound";
import FontsListContainer from "./Components/Recursos/Fonts/FontsListContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/info" element={<Info />} />
          <Route path="/fuentes" element={<FontsListContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
