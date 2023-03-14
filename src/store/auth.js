import { createContext, useReducer, useCallback } from "react";
import request from "@/utils/request";
import {useRouter} from 'next/router';

const AuthContext = createContext(null);

const initialState = {
    data: null,
    error: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                data: action.payload,
                error: null
            }
        case 'LOGIN_ERROR':
            return {
                data: null,
                error: action.payload
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}



export const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(reducer, initialState);
    const {push} = useRouter();

    const login = useCallback((responseData) => {
        localStorage.setItem('token', responseData.token);
        console.log(responseData);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: responseData
        });
    }, [dispatch]);
    

    const init = useCallback(async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: 'User not authenticated'
            })
            return;
        }
        try {
            const user = await request('/api/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                    token,
                    user
                }
            })
        } catch (error) {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: error.message
            })
        }   
    }, [dispatch]);
    

    const logout = useCallback(async () => {
        await push('/login');
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT'
        })
    }, [push, dispatch]);

    return (<AuthContext.Provider value={{...authState, init, login, logout}}>
        {children}
    </AuthContext.Provider>)
}


export default AuthContext;
