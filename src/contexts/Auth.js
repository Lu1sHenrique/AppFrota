import React, {createContext, useState} from 'react';

import {useNavigation} from '@react-navigation/native'

export const AuthContext = createContext({})


function AuthProvider({children}){

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function logar(email, password){
        if (email !== '' && password !== ''){
            setUser({
                email: email,
                status: "ATIVO"
            })

            navigation.navigate("HomeModulos"); 
        }
    }

    return(
        <AuthContext.Provider value={{ nome:"LUIS.TEIXEIRA", logar, user}}>
            {children}
        </AuthContext.Provider> 
    )
}

export default AuthProvider;