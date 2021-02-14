import React, {useContext} from 'react';


export const AuthContext = React.createContext({
    user: null,
    jwt: ''
});

export const useAuth = () => useContext(AuthContext);