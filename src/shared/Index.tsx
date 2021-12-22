import React, { Fragment } from "react";
import { useActions } from "../features/auth/hooks/useActions";

export const Index = () => {
  const { logoutUser } = useActions();

  return (
    <Fragment>
      <h1 className="text-danger text-center">Phones list...</h1>
      <button className="btn btn-primary float-end" onClick={logoutUser}>Logout</button>
    </Fragment>
  );
};
