import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import MaterialsIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../../../Utils/colors'

export default function ModalErro({showError}) {
 return showError ? (
    <View style={styles.container}>
        <MaterialsIcons name='error' size={30} color={colors.white}/>
        <Text style={styles.txtErro}>Erro ao consultar informações</Text>
    </View>
 )
  : null
}