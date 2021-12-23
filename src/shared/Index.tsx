import React, {Fragment} from "react";
import {PhoneList} from "src/features/phones/components/PhoneList";
import {useAuth} from "../features/auth/hooks/useAuth";

export const Index = () => {
    const {onLogout} = useAuth();

    return (
        <>
            <div className="d-flex justify-content-around">
                <h3>Contacts book</h3>
                <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
            </div>

            <PhoneList/>
        </>
    );
};
