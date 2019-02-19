import * as actionTypes from './action_types';
import server from '../../http';

export const changeForm = (field, value) => {
    return {
        type: actionTypes.FORM_UPDATE,
        field: field,
        value: value
    }
};

export const formSubmitted = () => {
    return {
        type: actionTypes.FORM_SUBMITTED
    }
};

export const submitData = () => {
    return (dispatch, getState) => {
        server.post('/', getState())
            .then(res => {
                dispatch(formSubmitted());
            }).catch(err => {
            console.log(err);
        });
    };
};


