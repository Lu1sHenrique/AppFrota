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
          <Text style={styles.txtbBttonItemCheckCodigo}>{data.codigoChecklistCombustao}</Text>
          <Text style={styles.txtbBttonItemCheckData}>{data.dataEnvio.substr(0,12)} - {data.horaEnvio}</Text>
          <Text style={styles.txtbBttonItemCheckCondutor}>{decodeURIComponent(data.condutor.replaceAll('+', ' ').substr(0,33))}</Text>
        </TouchableOpacity>
    );
}