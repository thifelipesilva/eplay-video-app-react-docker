import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import GlobalStyles from "./styles/GlobalStyles";
import HomePage from "./Pages/HomePage";
import SalaDeVideo from "./Pages/SalaDeVideo";
import CadastroVideo from "./Pages/CadastroVideo";
import { useState } from "react";

function App() {
  const [dados, setDados] = useState('');
  
  const addDados = novosDados => {
    setDados([...dados, novosDados]);
  }

  return (
    <BrowserRouter>
      <GlobalStyles/>   

      <Cabecalho/>
      
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/salaDeVideo" element={<SalaDeVideo dados={dados}/>}/>
        <Route path="/cadastro" element={<CadastroVideo  enviarDados={novosDados => addDados(novosDados)}/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;