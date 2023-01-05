import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {api, createUser, createSession } from '../services/api'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState();
    const [open, setOpen] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem("user_token");

        const hasUser = localStorage.getItem("users_db");
        if (hasUser) {
            setUser(JSON.parse(hasUser));
        }
        var menu = localStorage.getItem('menu')


        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        if(menu == null){
            localStorage.setItem('menu', false)
            setOpen(false)
        }else{
            setOpen(menu === 'true'? true : false)
        }
    }, []);

    const signin = async (email, password) => {
        const hasUser = await createSession(email, password)
                .catch(function (err){
                    const erro = err.response.data.split('at')[0].split('System.Exception:')[1]
                    alert(erro)});
        localStorage.setItem("user_token",hasUser.accessToken)
        localStorage.setItem("user_dados",JSON.stringify(hasUser.dados))
        setUser(hasUser.dados)
        setUser(hasUser.accessToken)
    };

    const signup = async (email, password) => {

        await createUser(email, password).catch(function(err){alert(err)})
        navigate('/');
    };

    const signout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_dados");

    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout, open, setOpen }}
        >
            {children}
        </AuthContext.Provider>
    );
};