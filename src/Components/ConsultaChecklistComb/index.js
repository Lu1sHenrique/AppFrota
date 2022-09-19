import React, { useState } from "react";
import { Text,TouchableOpacity } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function ConsultaChecklistComb({data}){
  
  const navigation = useNavigation();

    return(
        <TouchableOpacity 
        style={styles.buttonItemCheck}
        >
          <Text style={styles.txtbBttonItemCheck}>{data.codigo_checklist_combustao}</Text>
          <Text style={styles.txtbBttonItemCheck}>12/12/1999</Text>
          <Text style={styles.txtbBttonItemCheck}>Thiago</Text>
        </TouchableOpacity>
    );
}