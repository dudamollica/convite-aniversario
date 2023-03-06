import Invitation from "./pages/initialPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import Sonic from "./pages/SonicPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/sonic" element={<Sonic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
