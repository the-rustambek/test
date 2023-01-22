import axios from 'axios';

 
export const getErrorMessage = (e) => {
    const { response = {} } = e;
    const { data = {} } = response;
    const { message = 'Internal server error!' } = data;
    return message;
};

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
