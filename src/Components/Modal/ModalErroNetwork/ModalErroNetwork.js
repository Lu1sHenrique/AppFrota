import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../../Utils/colors';

export default function ModalErroNetwork({ showErrorNetWork }) {
    return showErrorNetWork ? (
        <View style={styles.container}>
            <MaterialCommunityIcons name='access-point-network-off' size={30} color={colors.white} />
            <Text style={styles.txtErro}>Nenhuma conexão de rede disponível!</Text>
        </View>
    )
        : null
}