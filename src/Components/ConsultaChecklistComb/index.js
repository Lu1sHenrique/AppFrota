import React from "react";
import { Text,TouchableOpacity } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ConsultaChecklistComb({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonBanco}
        >
          <Text style={styles.txtButtonBanco}>{data.codigo_checklist_combustao}</Text>
        </TouchableOpacity>
    );
}