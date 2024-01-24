import { LOGIN_SUCCESS, LOGOUT } from '../../actions/authActions';
import { AuthState, AuthActionTypes} from '../../types/authTypes';

const initialState : AuthState = {
    isAuthenticated: false,
    user: null
};

const authReducer = (state = initialState, action : AuthActionTypes) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
