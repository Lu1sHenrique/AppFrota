import React, {useState} from 'react'
import {Text, View, TouchableOpacity, Dimensions} from 'react-native'
import styles from './style';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function ModalBadLogin(){

    const [abrir, setAbrirModal] = useState(true)

    function FecharModal (){
        setAbrirModal(false)
      }

    return(
        <View style={[(styles.modal()), {width: WIDTH - 32, height: HEIGHT/9}]}>
            <Text>Usuário ou senha inválida</Text>
            <TouchableOpacity onPress={()=> FecharModal()}>
                <Text>OK</Text>
            </TouchableOpacity>
        </View>   
    )
}