import * as actionTypes from '../actions/action_types';

function randomAmount() {
    const max = 1000;
    const min = 100;

    return Math.floor(Math.random() * (max - min) + min) / 10;
}

const initialState = {
    amount: randomAmount(),

    ccName: '',
    ccNumber: '',
    ccCode: '',
    ccExMo: '',
    ccExYr: '',

    firstName: '',
    lastName: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',

    formSubmitted: false
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === actionTypes.FORM_UPDATE) {
        newState[action.field] = action.value;
    }

    if (action.type === actionTypes.FORM_SUBMITTED) {
        console.log('Form submitted reducer');
        newState['formSubmitted'] = true;
    }
    return newState;
};

export default reducer;