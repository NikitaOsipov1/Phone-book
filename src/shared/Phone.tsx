import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "src/features/auth/hooks/useAuth";
import { usePhone } from "src/features/phones/hooks/usePhone";
import { ROUTES } from "src/routes/constants";

export const Phone = () => {
  const { id } = useParams();
  const { onLogout } = useAuth();
  const { phones } = usePhone();

  const phone = useMemo(() => phones?.find(p => p.id === id), [id,phones])

  return phone ? (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Contact info</h3>
        <Link to={ROUTES.main} className="btn btn-warning">All contacts</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <table>
          <thead className="d-inline-block" style={{ paddingRight: "20px" }}>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <th>Phone</th>
          </tr>
          <tr>
            <th>Address</th>
          </tr>
          <tr>
            <th>Email</th>
          </tr>
          <tr>
            <th>Age</th>
          </tr>
          </thead>
          <tbody className="d-inline-block">
          <tr>
            <td>{phone && (phone.name.first + " " + phone.name.last)}</td>
          </tr>
          <tr>
            <td>{phone && (phone.phone)}</td>
          </tr>
          <tr>
            <td>{phone && (phone.address)}</td>
          </tr>
          <tr>
            <td>{phone && (phone.email)}</td>
          </tr>
          <tr>
            <td>{phone && (phone.age)}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  ) : (
    <div>
      Not found
    </div>
  );
};
