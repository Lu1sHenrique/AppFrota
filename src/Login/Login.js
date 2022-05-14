import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './style'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext } from '../contexts/Auth'

export default function Login(){

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const { logar } = useContext(AuthContext);

  function HandleLogar(){
    logar(usuario, password)
  }

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
            value={usuario}
            onChangeText={(text)=> setUsuario(text)}
            autoCorrect={false}
          />
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder='Digite a senha'
            style={styles.input}
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={true} 
            autoCorrect={false}
          />

          <TouchableOpacity 
          style={styles.button}
          onPress={HandleLogar}
          >
            <Text style={styles.buttonText}>Acessar</Text>
            <Icon style={styles.icon} name="log-in" size={23} color="#fff" />
          </TouchableOpacity>

        <View style={styles.containerVersao}>
          <Text style={styles.textversao}>Versão 1.5.2</Text>
        </View>
        </Animatable.View>
    </View>
     
  );
};


