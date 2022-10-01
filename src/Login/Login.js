import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
  ImageBackground
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Feather';
import { StackActions, NavigationActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//pages
import styles from './style'
import {AuthContext} from '../Contexts/Auth'
import api from '../services/api'

export default function Login(props){

  const [hidePass, setHidePass] = useState(true);

  //consts do context api
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //consts do modal de erro login
  const [display, setDisplay] = useState('none') 

  //context api
  const { logar } = useContext(AuthContext);

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }

  //function logar
  const HandleLogar = async () =>{
    logar(usuario)
    setIsLoading(true)
    if (!usuario.length && !password.length){
      setDisplay("flex")
      setIsLoading(false)
    }else{
      try{ 
        const {data} = await api.get('/processarLoginMobileV3/'+usuario+'&'+password+'&01311001-3955-421b-81cb-af08f5cb1031&00000')
        
        console.log(data)
        if(data.operacaoExecutada === "N"){
          setDisplay("flex")
        }else{

          const user = data.passaport
    
          await saveUser(user)
      
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomeModulos' })],
          })
          
          setIsLoading(false)
      
          props.navigation.dispatch(resetAction)
        }
      } 
      catch(error) {
        console.log(error)
        setIsLoading(false)
        setDisplay('flex')
      }
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
            {
              isLoading ? (
                <ActivityIndicator style={{flex: 1, display: 'flex'}} size="large" color='#d21e2b'/>
              ) : (
                <Text style={styles.buttonText}>Acessar</Text>
              )
            }
          </TouchableOpacity>
          {/*texto versão*/}
          <View style={styles.containerVersao}>
            <Text style={styles.textversao}>Versão 1.0.0</Text>
          </View>
        </Animatable.View>
      </ImageBackground>
        {/*modal erro bad login*/}
        <View
            style={[(styles.modal(display))]}>
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


