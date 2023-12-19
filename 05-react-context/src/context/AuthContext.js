import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        } else {
            setAuth(true);
        }
    };

    const data = {auth, handleAuth};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
};

export const useAuthContext = () => useContext(AuthContext);