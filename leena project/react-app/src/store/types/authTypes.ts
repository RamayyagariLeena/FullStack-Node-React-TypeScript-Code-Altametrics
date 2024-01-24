// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Interfaces for Actions
interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

// Union Type for Auth Actions
export type AuthActionTypes = LoginSuccessAction | LogoutAction;

// User Interface
export interface User {
    id: string;
    username: string;
    // Add other user properties as needed
}

// Auth State Interface
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}
