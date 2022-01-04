import React, { useMemo } from "react";
import { usePhone } from "../features/phones/hooks/usePhone";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../routes/constants";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useForm } from "react-hook-form";
import { EditablePhone } from "../features/phones/redux/reducer";
import { ContactForm } from "../features/phones/components/ContactForm";

export const EditPhone = () => {
  const { id } = useParams();
  const { onLogout } = useAuth();
  const { editPhone } = usePhone();
  const navigate = useNavigate();
  const { phones } = usePhone();

  const currentPhone = useMemo(() => phones?.find(p => p.id === id), [id,phones])

  const { register, formState: { errors }, handleSubmit } = useForm<EditablePhone>({defaultValues: currentPhone});

  function submitHandler(data: EditablePhone) {
    if(currentPhone){
      editPhone(data, currentPhone.id);
      navigate("/");
    }
  }

  return currentPhone ? (
    <div>
      <div className="d-flex justify-content-around">
        <h3>Edit contact</h3>
        <Link to={ROUTES.main} className="btn btn-warning">All contacts</Link>
        <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
      </div>

      <form className="w-75 m-auto mt-5" onSubmit={handleSubmit(submitHandler)}>
        <ContactForm register={register} errors={errors}/>
      </form>

    </div>
  ) : (
    <div>
      Not found
    </div>
  );
};
