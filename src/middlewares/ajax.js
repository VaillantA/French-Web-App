import axios from 'axios';

const api = axios.create({
    baseURL: 'https://test.frenchappweb.com/api/v1/auth',
});

const ajax = (store) => (next) => (action) => {
    if (action.type === 'LOGIN') {
        const state = store.getState();
        api.post('/register',{
           email: state.email,
           password: state.password, 
        })
        .then((response) => {
            api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
            sessionStorage.setItem('key', JSON.stringify(response.data));
            store.dispatch({
              type: 'SAVE_USER_LOGIN',
              token: response.token,
            });
        })
        .catch((error) => {
            console.error(error);
            alert('Authentification échouée');
          });
    }
    next(action);
};

export default ajax;
