import React, { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";
import MainPage from "./components/mainPage";
import { ToastContainer, toast } from "react-toastify";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/mainpage" exact element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
