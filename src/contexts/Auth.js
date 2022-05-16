import React, {createContext, useState} from 'react';

import {useNavigation} from '@react-navigation/native'

export const AuthContext = createContext({})


function AuthProvider({children}){

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function logar(usuario, password){
        if (usuario !== '' && password !== ''){
            setUser({
                usuario: usuario,
                status: "ATIVO"
            })

            navigation.navigate("HomeModulos"); 
        }
    }

    return(
        <AuthContext.Provider value={{logar, user}}>
            {children}
        </AuthContext.Provider> 
    )
}

export default AuthProvider;