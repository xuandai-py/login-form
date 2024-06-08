import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import "./index.css";
import Home from "./pages/home";
import RequireAuth from "./components/auth.guard";
import NotFound from './pages/notfound'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <RequireAuth redirectTo="/login">
             <Routes>
              <Route path="/profile" index element={<Home />} />
             </Routes>
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
