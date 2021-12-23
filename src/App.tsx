import React from "react";
import { Index } from "./shared/Index";
import { Login } from "./shared/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ROUTES } from "./routes/constants";

function App() {
  return (
    <Router>
      <div className="container pt-4 h-75">
        <Routes>

          <Route path={ROUTES.main} element={<PrivateRoute />}>
            <Route path={ROUTES.main} element={<Index />} />
          </Route>

          <Route path={ROUTES.login} element={<PublicRoute />}>
            <Route path={ROUTES.login} element={<Login />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
