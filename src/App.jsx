import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio/Inicio";
import Info from "./Components/Inicio/Info";
import AddResources from "./Components/AddResources/AddResources";
import AiListContainer from "./Components/Recursos/Ai/AiListContainer";
import IconosListContainer from "./Components/Recursos/Iconos/IconosListContainer";
import InspiracionListContainer from "./Components/Recursos/Inspiracion/InspiracionListContainer";
import FotosListContainer from "./Components/Recursos/Fotos/FotosListContainer";
import IlustracionListContainer from "./Components/Recursos/Ilustracion/IlustracionListContainer";
import ColoresListContainer from "./Components/Recursos/Colores/ColoresListContainer";
import AprenderListContainer from "./Components/Recursos/Aprender/AprenderListContainer";
import FontsListContainer from "./Components/Recursos/Fonts/FontsListContainer";
import EditResources from "./Components/AddResources/EditResources";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route
            path="/editar-recurso/:resourceId"
            element={<EditResources />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
