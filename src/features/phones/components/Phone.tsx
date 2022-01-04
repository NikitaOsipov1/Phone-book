import React from "react";
import { ROUTES } from "src/routes/constants";
import { PhoneState } from "../redux/reducer";
import { usePhone } from "../hooks/usePhone";
import { Link } from "react-router-dom";

export const Phone = (phoneObject: PhoneState) => {
  const { deletePhone } = usePhone();

  function onDelete(id: string) {
    deletePhone(id);
  }

  return (
    <tr>
      <td>{phoneObject.name.first}</td>
      <td>{phoneObject.name.last}</td>
      <td>{phoneObject.age}</td>
      <td>{phoneObject.phone}</td>
      <td>{phoneObject.company}</td>
      <td>
        <Link className="btn btn-info m-1" to={ROUTES.dynamic.viewPhone(phoneObject.id)}>View</Link>
        <Link className="btn btn-warning m-1" to={ROUTES.dynamic.editPhone(phoneObject.id)}>Edit</Link>
        <button className="btn btn-danger m-1" onClick={() => onDelete(phoneObject.id)}>Delete</button>
      </td>
    </tr>
  );
};
