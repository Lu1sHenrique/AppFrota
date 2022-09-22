import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ConsultaChecklistEletrica({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonItemCheck}
        >
          <Text style={styles.txtbBttonItemCheck}>{data.codigoChecklistEletrica}</Text>
          <Text style={styles.txtbBttonItemCheck}>{data.dataEnvio}</Text>
          <Text style={styles.txtbBttonItemCheck}>{data.condutor}</Text>
        </TouchableOpacity>
    );
}