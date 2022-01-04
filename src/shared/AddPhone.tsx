import React from "react";
import { usePhone } from "../features/phones/hooks/usePhone";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/constants";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useForm } from "react-hook-form";
import { EditablePhone } from "../features/phones/redux/reducer";
import { ContactForm } from "../features/phones/components/ContactForm";

export const AddPhone = () => {
  const { addPhone } = usePhone();
  const { onLogout } = useAuth();

  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm<EditablePhone>();

  function submitHandler(data: EditablePhone) {
    addPhone(data);
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Add new contact</h3>
        <Link to={ROUTES.main} className="btn btn-warning">All contacts</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>

      <form className="w-75 m-auto mt-5" onSubmit={handleSubmit(submitHandler)}>
        <ContactForm register={register} errors={errors}/>
      </form>
    </div>
  );
};
