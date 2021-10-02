import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router";
import roles from "../helpers/roles";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const history = useHistory();
    const [user, setUser] = useState(null);


    const login = (userCredentials, fromLocation) =>{ 
        setUser({id: 1, name: 'Fabrizio', lastname: 'Ferroni', email: 'fabrizioferroni@outlook.com', profilePic: '/img/male_avatar.svg', role: roles.user});
        if(fromLocation){
            history.push(fromLocation);
        }
};
    const logout = () => setUser(null);

    const updateUser = (data) => {
        setUser({
            ...user,
            ...data
        })
    }

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;
    
    const contextValue = {
        user, 
        updateUser,
        isLogged,
        hasRole,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}