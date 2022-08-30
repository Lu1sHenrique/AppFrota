import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ModalErro({showError}) {
 return showError ? (
    <View style={styles.container}>
        <Text style={styles.txtErro}>Erro ao consultar informações</Text>
    </View>
 )
  : null
}