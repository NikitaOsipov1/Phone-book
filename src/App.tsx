import React from "react";
import { Index } from "./shared/Index";
import { Login } from "./shared/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ROUTES } from "./routes/constants";
import { Phone } from "./shared/Phone";
import { AddPhone } from "./shared/AddPhone";
import { EditPhone } from "./shared/EditPhone";

function App() {
  return (
    <Router>
      <div className="container pt-4 h-75">
        <Routes>

          <Route path={ROUTES.main} element={<PrivateRoute />}>
            <Route path={ROUTES.main} element={<Index />} />
          </Route>

          <Route path={ROUTES.dynamic.viewPhone()} element={<PrivateRoute />}>
            <Route path={ROUTES.dynamic.viewPhone()} element={<Phone />} />
          </Route>

          <Route path={ROUTES.dynamic.editPhone()} element={<PrivateRoute />}>
            <Route path={ROUTES.dynamic.editPhone()} element={<EditPhone />} />
          </Route>

          <Route path={ROUTES.addPhone} element={<PrivateRoute />}>
            <Route path={ROUTES.addPhone} element={<AddPhone />} />
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
