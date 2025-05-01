import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ Import the AuthProvider
import { AuthProvider } from "./context/AuthContext";

// Optional: Import global styles or CSS reset
import "./index.css"; // if you have one

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
