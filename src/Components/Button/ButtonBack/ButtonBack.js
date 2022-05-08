import React, {useState} from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


export default function ButtonBack({ navigation: { } }) {


const navigation = useNavigation();


return (
    <View style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('HomeModulos')}
            >
            <Icon name="chevron-left" size={30} color="#000" />
            </TouchableOpacity>
        </View>
);
}