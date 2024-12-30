// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  return (

      <div id="wrapper">
             <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
      />
        <Router>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
