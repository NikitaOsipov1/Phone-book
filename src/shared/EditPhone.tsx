import React from "react";
import { usePhone } from "../features/phones/hooks/usePhone";
import { PhoneForm } from "../features/phones/components/PhoneForm";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../routes/constants";
import { useAuth } from "../features/auth/hooks/useAuth";
import { PhoneState } from "../features/phones/redux/reducer";

export const EditPhone = () => {
  const { addPhone } = usePhone();
  const { onLogout } = useAuth();
  const { id } = useParams();

  const { phones } = usePhone();

  const currentPhone = phones.find(phone => {
    return phone.id === id;
  })
  console.log(currentPhone);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Edit contact</h3>
        <Link to={ROUTES.main} className="btn btn-warning">All contacts</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>
      <PhoneForm action={addPhone} currentState={currentPhone}/>
    </div>
  );
};
