import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../Styles/style'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function TelaInicial() {

  const navigation = useNavigation();
  

  return (
      <View style={styles.container}>
          <Text>Home Frota</Text>
      </View>
  );
};



