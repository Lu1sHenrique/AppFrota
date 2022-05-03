import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './style'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Login(){

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft"  delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp"  delay={500} style={styles.containerForm}>
          <Text style={styles.title}>Usuário</Text>
          <TextInput
            placeholder='Digite o usuário'
            style={styles.input}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder='Digite a senha'
            style={styles.input}
            secureTextEntry={true} 
          />

          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('HomeModulos')}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

     
        </Animatable.View>
    </View>
     
  );
};



