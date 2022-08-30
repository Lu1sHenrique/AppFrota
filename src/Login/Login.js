import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Image,
  ImageBackground,
  BackHandler
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

  const [hidePass, setHidePass] = useState(true);

  //consts do context api
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  //consts do modal de erro login
  const [display, setDisplay] = useState('none') 

  const { logar } = useContext(AuthContext);

  //function logar
  function HandleLogar(){
    logar(usuario, password)
    if(usuario === "" || password === ""){
      setDisplay('flex')
    }else{
      setDisplay('none')
    }
  
  }
//function fechar modal erro login
  function fecharDisplayBadLogin(){
    setDisplay('none')
  }

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={styles.container}
    keyboardVerticalOffset={-90}
    >
      <ImageBackground 
      source={require('../assets/fundo_vermelho.png')}
      style={{flex: 1 }}>
        <Animatable.View animation="fadeInLeft"  delay={500} style={styles.containerHeader}>
          <Image source={require('../assets/logo_login.png')}
          style={{width: "100%", height: 100 }}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInUp"  delay={500} style={styles.containerInput}>
          <TextInput
            placeholder='Digite o usuário'
            placeholderTextColor={'#fff'}
            style={styles.input}
            value={usuario}
            onChangeText={(text)=> setUsuario(text)}
            autoCorrect={false}
          />
          <View style={styles.ContainerHidePass}>
          <TextInput
            placeholder='Digite a senha'
            placeholderTextColor={'#fff'}
            style={styles.inputHidePass}
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={hidePass} 
            autoCorrect={false}
          />
          <TouchableOpacity
            style={styles.iconHidePass}
            onPress={()=> setHidePass(!hidePass)}
            >
              {
                hidePass ?
                <Icon name="eye" size={23} color="#fff" />
                :
                <Icon name="eye-off" size={23} color="#fff" />
              }
          </TouchableOpacity>
          </View>
          {/*botao acessar*/}
          <TouchableOpacity 
          style={styles.button}
          onPress={HandleLogar}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          {/*texto versão*/}
          <View style={styles.containerVersao}>
            <Text style={styles.textversao}>Versão 1.0.0</Text>
          </View>
        </Animatable.View>
      </ImageBackground>
        {/*modal erro bad login*/}
        <View
            style={[(styles.modal(display)), {width: WIDTH - 32, height: HEIGHT/4}]}>
          <View style={styles.containerAvisoModalBadLogin}>
            <Text style={styles.textAvisoModalBadLogin}>Aviso</Text>
          </View>
            <Text style={styles.textModalBadLogin}>Usuário ou senha inválida</Text>
            <TouchableOpacity
            onPress={fecharDisplayBadLogin}
            style={styles.buttonOkModalBadLogin}
            >
                <Text style={styles.txtOkButton}>OK</Text>
            </TouchableOpacity>
        </View>  
    </KeyboardAvoidingView>
  );
};


