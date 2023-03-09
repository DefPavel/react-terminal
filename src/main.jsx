import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./pages/Login.jsx";
import './styles/main.css'
// import BaseLayout from "./components/layouts/BaseLayout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginLayout from "./components/layouts/LoginLayout.jsx";
import Home from "./pages/Home.jsx";
import BaseLayout from "./components/layouts/BaseLayout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <LoginLayout>
                      <Login />
                  </LoginLayout>
              } />

              <Route path="/home" element={
                  <BaseLayout>
                    <Home />
                  </BaseLayout>
              } />

          </Routes>
      </BrowserRouter>


  </React.StrictMode>,
)
