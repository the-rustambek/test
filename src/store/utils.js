import axios from 'axios';
import { toast } from 'react-toastify';

 
export const getErrorMessage = (e) => {
    const { response = {} } = e;
    const { data = {} } = response;
    const { message = 'Internal server error!' } = data;
    return message;
};

export const notify = (message, type,) => {
    if (type === 'success') {
        return toast.success(message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
        });
    } else if (type === 'error') {
        return toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
        });
    }
}

export const inputClear = () => {
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = null;
    }
    let textAreas = document.querySelectorAll('textarea');
    for (let i = 0; i < textAreas.length; i++) {
        textAreas[i].value = null;
    }
    let selects = document.querySelectorAll('select');
    for (let i = 0; i < selects.length; i++) {
        selects[i].value = '';
    }
};


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
