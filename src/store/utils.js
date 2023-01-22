import axios from 'axios';
import { toast } from 'react-toastify';

 
export const getErrorMessage = (e) => {
    const { response = {} } = e;
    const { data = {} } = response;
    const { message = 'Internal server error!' } = data;
    return message;
};

export const notify = (message, type) => {
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
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
