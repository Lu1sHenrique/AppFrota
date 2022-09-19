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
          <Text style={styles.txtbBttonItemCheck}>{data.codigo_checklist_eletrica}</Text>
          <Text style={styles.txtbBttonItemCheck}>15/08/2022</Text>
          <Text style={styles.txtbBttonItemCheck}>Rodrigo</Text>
        </TouchableOpacity>
    );
}