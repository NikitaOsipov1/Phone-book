import React from "react";
import {useAuth} from "src/features/auth/hooks/useAuth";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import userIcon from 'src/assets/user.svg'

type FormData = { email: string, password: string };

export const Login = () => {
    const {onLogin} = useAuth();
    const {register, formState: {errors}, handleSubmit, setError} = useForm<FormData>();

    function submitHandler(data: FormData) {
        if (data.email !== "test@gmail.com") {
            return setError("email", {message: "User with such email doesn`t exist."});
        }
        if (data.password !== "Qwerty12") {
            return setError("password", {message: "Password is incorrect."});
        }
        onLogin(data.email, data.password);
    }

    return (
        <div className="wrapper fadeInDown">
            <div className="text-center w-50">

                <div className="fadeIn first text-center">
                    <img src={userIcon} id="icon" alt="User Icon" width="90px" height="90px"/>
                </div>

                <form id="loginForm" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <div className="d-flex flex-column align-items-center w-100">
                            <input type="text" id="email" className="fadeIn second w-75" placeholder="Email"
                                   {...register("email",
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
                            }}><ErrorMessage errors={errors} name="email"/></p>
                        </div>

                        <div className="d-flex flex-column align-items-center w-100">
                            <input type="password" id="password" className="fadeIn third w-75" placeholder="Password"
                                   {...register("password", {
                                       required: {
                                           value: true,
                                           message: "This field is required"
                                       },
                                       minLength: {
                                           value: 8,
                                           message: "Password must contain at least 8 characters"
                                       },
                                       pattern: {
                                           value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                           message: "Password must contain at least 1 uppercase, lowercase and digit character"
                                       }
                                   })}
                            />
                            <p style={{
                                fontSize: "12px",
                                color: "red"
                            }}><ErrorMessage errors={errors} name="password"/></p>
                        </div>
                    </div>

                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

            </div>
        </div>
    );
};
