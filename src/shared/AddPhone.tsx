import React from "react";
import { usePhone } from "../features/phones/hooks/usePhone";
import { PhoneForm } from "../features/phones/components/PhoneForm";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/constants";
import { useAuth } from "../features/auth/hooks/useAuth";

export const AddPhone = () => {
  const { addPhone } = usePhone();
  const { onLogout } = useAuth();

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Add new contact</h3>
        <Link to={ROUTES.main} className="btn btn-warning">All contacts</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>
      <PhoneForm action={addPhone} />
    </div>
  );
};
