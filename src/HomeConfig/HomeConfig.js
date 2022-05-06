import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './style'


export default function HomeConfig({ navigation: { goBack } }) {


  return (
    <View style={styles.container}>
      <View style={styles.icon}>
          <TouchableOpacity
          onPress={() => goBack()}
          >
            <Icon name="arrow-left" size={30} color="#000" />
          </TouchableOpacity>
        </View>

      <View style={styles.textHeader}>
        <Text style={styles.textConfig}>Configurações</Text>
      </View>

      <View style={styles.button}>
        <Text style={styles.textButton}>
          Modo escuro
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>
          Reportar Bug
        </Text>
      </TouchableOpacity>
    </View>
            
  );
};



