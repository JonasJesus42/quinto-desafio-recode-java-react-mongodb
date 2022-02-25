import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Destino from "./pages/destino"
import Promocoes from "./pages/promocoes"
import Contato from "./pages/contato"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destino" element={<Destino />} />
      <Route path="/promocoes" element={<Promocoes />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}

export default App
