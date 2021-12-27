import React from 'react';
import {ROUTES} from 'src/routes/constants';
import {PhoneState} from '../redux/reducer';

export const Phone = (phoneObject: PhoneState) => {
    return (
        <tr>
            <td>{phoneObject.name.first}</td>
            <td>{phoneObject.name.last}</td>
            <td>{phoneObject.age}</td>
            <td>{phoneObject.phone}</td>
            <td>{phoneObject.company}</td>
            <td><a className="btn btn-info" href={ROUTES.dynamic.viewPhone(phoneObject.id)}>View</a></td>
        </tr>
    );
};
