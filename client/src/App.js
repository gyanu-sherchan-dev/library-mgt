import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import { ToastContainer, toast } from "react-toastify";

import Register from "./components/pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
