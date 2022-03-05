//* Initial State
const initialState = {
  email: '',
  password: '',
  token:'',
  logged: false,

};
  
  //* Actions received
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, 
      };
      case 'SAVE_USER_LOGIN':
        return {
          ...state,
          logged: true,
          email: '',
          password: '',
          token: action.token,
        };
    default:
      return state;
  }
  };
  
  //* Reducer export
  export default reducer;
  