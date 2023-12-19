import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Navbar from "./Components/Navbar/Navbar";
import Info from "./Components/Inicio/Info";
import NotFound from "./Components/NotFound/NotFound";
import FontsListContainer from "./Components/Recursos/Fonts/FontsListContainer";
import AddResources from "./Components/AddResources/AddResources";
import FotosListContainer from "./Components/Recursos/Fotos/FotosListContainer";
import AiListContainer from "./Components/Recursos/Ai/AiListContainer";
import InspiracionListContainer from "./Components/Recursos/Inspiracion/InspiracionListContainer";
import IconosListContainer from "./Components/Recursos/Iconos/IconosListContainer";
import ColoresListContainer from "./Components/Recursos/Colores/ColoresListContainer";
import AprenderListContainer from "./Components/Recursos/Aprender/AprenderListContainer";
import IlustracionListContainer from "./Components/Recursos/Ilustracion/IlustracionListContainer";
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
          <Route path="/agregar-recursos" element={<AddResources />} />
          <Route path="/ai" element={<AiListContainer />} />
          <Route path="/iconos" element={<IconosListContainer />} />
          <Route path="/inspiracion" element={<InspiracionListContainer />} />
          <Route path="/fotos" element={<FotosListContainer />} />
          <Route path="/ilustracion" element={<IlustracionListContainer />} />
          <Route path="/colores" element={<ColoresListContainer />} />
          <Route path="/aprender" element={<AprenderListContainer />} />

          <Route path="/fuentes" element={<FontsListContainer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
