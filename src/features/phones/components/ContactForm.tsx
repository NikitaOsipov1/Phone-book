import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import InputMask from "react-input-mask";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EditablePhone } from "../redux/reducer";

interface IContactFormProps {
  register: UseFormRegister<EditablePhone>
  errors: FieldErrors<EditablePhone>
}

export const ContactForm: React.FC<IContactFormProps> = (props) => {
  return (
    <div>
      <div className="form-group d-flex justify-content-between m-3">
        <div className="form-group text-center w-100">
          <label htmlFor="first_name">First name</label>
          <input type="text" className="form-control" id="first_name" placeholder="Enter first name"
                 {...props.register("name.first",
                   {
                     required: {
                       value: true,
                       message: "This field is required"
                     }
                   })}
          />
          <p style={{
            fontSize: "12px",
            color: "red"
          }}><ErrorMessage errors={props.errors} name="first_name" /></p>
        </div>

        <div className="form-group text-center w-100">
          <label htmlFor="last_name">Last name</label>
          <input type="text" className="form-control" id="last_name" placeholder="Enter last name"
                 {...props.register("name.last",
                   {
                     required: {
                       value: true,
                       message: "This field is required"
                     }
                   })}
          />
          <p style={{
            fontSize: "12px",
            color: "red"
          }}><ErrorMessage errors={props.errors} name="last_name" /></p>
        </div>
      </div>

      <div className="form-group text-center d-flex flex-column align-items-center w-100">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Enter address"
               {...props.register("address")}
        />
      </div>

      <div className="form-group d-flex justify-content-between m-3">
        <div className="form-group text-center w-100 d-flex flex-column align-items-center">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" placeholder="Enter age"
                 style={{
                   width: "85%",
                   margin: "5px",
                   padding: "15px 32px",
                   border: "2px solid #f6f6f6"
                 }}

                 {...props.register("age",
                   {
                     required: {
                       value: true,
                       message: "This field is required"
                     },
                     min: {
                       value: 1,
                       message: "Age must be greater than 1"
                     },
                     max: {
                       value: 120,
                       message: "Age must be smaller than 120"
                     }
                   })}
          />
          <p style={{
            fontSize: "12px",
            color: "red"
          }}><ErrorMessage errors={props.errors} name="age" /></p>
        </div>

        <div className="form-group text-center w-100">
          <label htmlFor="company">Company</label>
          <input type="text" className="form-control" id="company" placeholder="Enter company"
                 {...props.register("company")}
          />
        </div>
      </div>

      <div className="form-group d-flex justify-content-between m-3">
        <div className="form-group text-center d-flex flex-column align-items-center w-100">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email" placeholder="Enter email"
                 {...props.register("email",
                   {
                     required: {
                       value: true,
                       message: "This field is required"
                     },
                     pattern: {
                       value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                       message: "Your email is invalid"
                     }
                   })}
          />
          <p style={{
            fontSize: "12px",
            color: "red"
          }}>
              <ErrorMessage errors={props.errors} name="email" /></p>
        </div>

        <div className="form-group text-center d-flex flex-column align-items-center w-100">
          <label htmlFor="phone">Phone</label>
          <InputMask type="text" className="form-control" id="phone" placeholder="ex. +1 (974) 540-2046"
                     mask="+1 (999) 999-9999"
                     {...props.register("phone",
                       {
                         required: {
                           value: true,
                           message: "This field is required"
                         },
                         pattern: {
                           value: /^\+[1-9]{1}[\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/,
                           message: "Your phone number is invalid"
                         }
                       })}
          />
          <p style={{
            fontSize: "12px",
            color: "red"
          }}><ErrorMessage errors={props.errors} name="phone" /></p>

        </div>
      </div>

      <div className="form-group form-check d-flex justify-content-center m-3">
        <input type="checkbox" className="form-check-input" id="isActive"
               {...props.register("isActive")}
        />
        <label className="form-check-label" htmlFor="is_active" style={{ cursor: "pointer", marginLeft: "10px" }}>
          Is active?
        </label>
      </div>

      <div className="from-group d-flex justify-content-center mt-5">
        <button type="submit" className="btn btn-success w-25">Submit</button>
      </div>
    </div>
  );
};
