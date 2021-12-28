import React, { useEffect } from "react";
import { PhoneList } from "src/features/phones/components/PhoneList";
import { usePhone } from "src/features/phones/hooks/usePhone";
import { useAuth } from "../features/auth/hooks/useAuth";
import { ROUTES } from "../routes/constants";
import { Link } from "react-router-dom";

export const Index = () => {
  const { onLogout } = useAuth();

  const { getPhones, sortedContactsByName } = usePhone();

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>Contacts book</h3>
        <Link className="btn btn-success" to={ROUTES.addPhone}>Add contact</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>

      <PhoneList phones={sortedContactsByName} />
    </>
  );
};
