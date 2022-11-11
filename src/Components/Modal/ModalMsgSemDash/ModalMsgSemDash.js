import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../../Utils/colors';

export default function ModalMsgSemDash() {
    return (
        <View style={styles.container}>
        <Icon style={styles.icon} name='bar-chart' size={100} color={colors.gray}/>
        <Text style={styles.txt}>Nenhum gráfico selecionado</Text>
       </View>
 )
}