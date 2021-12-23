import React from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { useAuth } from 'src/features/auth/hooks/useAuth';
import {usePhone} from 'src/features/phones/hooks/usePhone';
import { ROUTES } from 'src/routes/constants';
import { RootState } from 'src/store/rootReducer';

export const Phone = () => {
    const {id} = useParams();
    const {onLogout} = useAuth();
    const {onGetPhone} = usePhone();
    const phonesState = useSelector((state: RootState) => state.phones.phones);

    const phone = phonesState.find((phone) => {
        if (phone.id === id){
            return phone;
        }
    })

    return (
        <div>
            <div className="d-flex justify-content-around">
                <h3>Contact info</h3>
                <a href={ROUTES.main} className="btn btn-warning">All contacts</a>
                <button className="btn btn-primary float-end" onClick={onLogout}>Logout</button>
            </div>
            <div className="mt-5">
                <span className="d-flex justify-content-around"><p>Name</p>{phone && (phone.name.first + ' ' + phone.name.last)}</span>
                <span className="d-flex justify-content-around"><p>Phone</p>{phone && phone.phone}</span>
                <span className="d-flex justify-content-around"><p>Age</p>{phone && phone.age}</span>
            </div>

        </div>
    );
};
