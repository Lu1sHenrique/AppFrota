import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ModalMsgSemDash() {
    return (
        <View style={styles.container}>
        <Icon style={styles.icon} name='bar-chart' size={100} color="#000"/>
        <Text style={styles.txt}>Nenhum gráfico selecionado</Text>
       </View>
 )
}