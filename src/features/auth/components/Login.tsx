import React from "react";

export const Login = () => {
    return (
        <div className="wrapper fadeInDown">
            <div className="text-center">

                <div className="fadeIn first text-center">
                    <img src="user.svg" id="icon" alt="User Icon" width="90px" height="90px"/>
                </div>

                <form id="loginForm">
                    <div>
                        <input type="text" id="email" className="fadeIn second w-75" name="email" placeholder="Email"/>
                        <input type="text" id="password" className="fadeIn third w-75" name="password" placeholder="Password"/>
                    </div>
                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

            </div>
        </div>
    );
}