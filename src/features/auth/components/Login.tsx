import React, {useState, useContext} from "react";
import {useActions} from '../hooks/useActions'
import store from '../../../store/index'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loginUser} = useActions()
    const navigate = useNavigate()

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        loginUser(email, password);
        navigate("/phones")
    }

    return (
        <div className="wrapper fadeInDown">
            <div className="text-center">

                <div className="fadeIn first text-center">
                    <img src="user.svg" id="icon" alt="User Icon" width="90px" height="90px"/>
                </div>

                <form id="loginForm" onSubmit={submitHandler}>
                    <div>
                        <input type="text" id="email" className="fadeIn second w-75"
                               name="email" placeholder="Email" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" id="password" className="fadeIn third w-75"
                               name="password" placeholder="Password" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {store.getState().user.errors[0] && (
                        <div className="alert alert-danger mx-auto w-75">
                            {store.getState().user.errors[0]}
                        </div>)}

                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

            </div>
        </div>
    );
}