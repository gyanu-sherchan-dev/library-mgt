import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { SideBar } from "./pages/sideBars/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
