import React from 'react';
import { useSelector } from 'react-redux';
import store from 'src/store';
import { RootState } from 'src/store/rootReducer';
import {Phone} from './Phone';

export const PhoneList = () => {
    const phonesState = useSelector((state: RootState) => state.phones.phones);

    const sortedByName = phonesState.sort((a, b) => {
        let nameA = a.name.first.toLowerCase(),
            nameB = b.name.first.toLowerCase();

        if(nameA < nameB){
            return -1;
        }

        if(nameA > nameB){
            return 1;
        }

        return 0;
    })

    return (
        <div>
            <table className="text-center m-auto mt-5 w-75">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {phonesState.map(phone => (<Phone {...phone} key={phone.id}/>))}
                </tbody>
            </table>
        </div>
    );
};
