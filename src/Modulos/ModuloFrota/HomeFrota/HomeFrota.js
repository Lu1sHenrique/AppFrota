import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../Styles/style'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

export default function HomeFrota({ navigation: { goBack } }) {

  const navigation = useNavigation();
  

  return (
      <View style={styles.container}>

        <View style={styles.textHeader}>
          <Text style={styles.textConfig}>Gestão de Frota</Text>
        </View>

        <View style={styles.icon}>
          <TouchableOpacity
             onPress={() => goBack()}
          >
            <Icon name="arrow-left" size={30} color="#000" />
          </TouchableOpacity>
        </View>


          <Text>Formulario e bottom tabs aqui</Text>
      </View>
  );
};



