import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ConsultaChecklistComb({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonItemCheck}
        onPress={() => navigation.navigate('DetalheChecklist', {paramKey:data})}
        >
          <Text style={styles.txtbBttonItemCheck}>{data.codigoChecklistCombustao}</Text>
          <Text style={styles.txtbBttonItemCheck}>{data.dataEnvio}</Text>
          <Text style={styles.txtbBttonItemCheck}>{decodeURIComponent(data.condutor.replaceAll('+', ' '))}</Text>
        </TouchableOpacity>
    );
}