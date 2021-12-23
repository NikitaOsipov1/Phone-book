import React, { Fragment } from "react";
import { useAuth } from "../features/auth/hooks/useAuth";

export const Index = () => {
  const { onLogout } = useAuth();

  return (
    <Fragment>
      <h1 className="text-danger text-center">Phones list...</h1>
      <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
    </Fragment>
  );
};
