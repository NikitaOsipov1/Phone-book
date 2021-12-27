import React from 'react';
import {useSelector} from 'react-redux';
import store from 'src/store';
import {RootState} from 'src/store/rootReducer';
import {Phone} from './Phone';

export const PhoneList = () => {
    const phonesState = useSelector((state: RootState) => state.phones.phones);
    phonesState.sort((a, b) => {
        let nameA = a.name.first.toLowerCase(),
            nameB = b.name.first.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    })

    let firstLetter = phonesState[0].name.first.charAt(0);

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
                <tr key={0}>
                    <th colSpan={6} style={{textAlign: "left", paddingLeft: "20px"}}>{firstLetter}</th>
                </tr>

                {phonesState.map((contact, index) => {
                    let component = null;
                    if (firstLetter !== contact.name.first.charAt(0)) {
                        firstLetter = contact.name.first.charAt(0);
                        component = (<tr key={index}>
                            <th colSpan={6} style={{textAlign: "left", paddingLeft: "20px"}}>{firstLetter}</th>
                        </tr>);
                    }
                    return [component, (<Phone {...contact} key={contact.id}/>)];
                })}
                </tbody>
            </table>
        </div>
    );
};
