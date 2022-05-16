import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
//pages
import styles from './style'
import {AuthContext} from '../Contexts/Auth'

//consts de domensionamento do modal de erro login
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Login(){

  //consts do context api
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  //consts do modal de erro login
  const [display, setDisplay] = useState('none') 

  const { logar } = useContext(AuthContext);

  //function logar
  function HandleLogar(){
    logar(usuario, password)
    setDisplay('flex')
  }
//function fechar modal erro login
  function fecharDisplayBadLogin(){
    setDisplay('none')
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        {/*titulo bem vindo*/}
        <Animatable.View animation="fadeInLeft"  delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Bem vindo(a)</Text>
        </Animatable.View>
        {/*texto usuario*/}
        <Animatable.View animation="fadeInUp"  delay={500} style={styles.containerForm}>
          <Text style={styles.title}>Usuário</Text>
          {/*caixa input usuario*/}
          <TextInput
            placeholder='Digite o usuário'
            style={styles.input}
            value={usuario}
            onChangeText={(text)=> setUsuario(text)}
            autoCorrect={false}
          />
          {/*texto senha*/}
          <Text style={styles.title}>Senha</Text>
          {/*caixa input senha*/}
          <TextInput
            placeholder='Digite a senha'
            style={styles.input}
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={true} 
            autoCorrect={false}
          />
          {/*botao acessar*/}
          <TouchableOpacity 
          style={styles.button}
          onPress={HandleLogar}
          >
            <Text style={styles.buttonText}>Acessar</Text>
            <Icon style={styles.icon} name="log-in" size={23} color="#fff" />
          </TouchableOpacity>
          {/*texto versão*/}
          <View style={styles.containerVersao}>
            <Text style={styles.textversao}>Versão 1.0.0</Text>
          </View>
        </Animatable.View>
        {/*modal erro bad login*/}
        <View style={[(styles.modal(display)), {width: WIDTH - 32, height: HEIGHT/9}]}>
            <Text>Usuário ou senha inválida</Text>
            <TouchableOpacity
            onPress={fecharDisplayBadLogin}
            >
                <Text>OK</Text>
            </TouchableOpacity>
        </View>  
    </KeyboardAvoidingView>
     
  );
};


