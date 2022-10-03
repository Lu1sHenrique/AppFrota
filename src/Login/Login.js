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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import AwesomeAlert from 'react-native-awesome-alerts';
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

  const [showAlertErro, setShowAlertErro] = useState(false)
  const [msgErro, setMsgErro] = useState("")

  const hideAlertErro = () => (
    setShowAlertErro(false)
  );

  //context api
  const { logar } = useContext(AuthContext);

  async function saveUserToken(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }

  async function saveUserName(userName) {
    await AsyncStorage.setItem('@ListApp:userName', JSON.stringify(userName))
  }

  const navigation = useNavigation();

  //function logar
  async function HandleLogar(){
    setIsLoading(true)
    if (!usuario.length || !password.length){
      setShowAlertErro(true)
      setIsLoading(false)
    }else{
      try{
        const {data} = await api.get('/processarLoginMobileV3/'+usuario+'&'+password+'&01311001-3955-421b-81cb-af08f5cb1031&00000')
        if(data.operacaoExecutada == "N"){
          setShowAlertErro(true)
          setIsLoading(false)
          if(data.mensagemErro.length>0){
            setMsgErro(data.mensagemErro)
            setShowAlertErro(true)
          }
        }else if(!data.passaport == ""){
          logar(usuario)
          const user = data.passaport
          const userName = usuario

          await saveUserToken(user)
          await saveUserName(userName)
      
          setIsLoading(false)

          navigation.reset({
            index: 0,
            routes: [{name: "HomeModulos"}]
          })
          
        }
      }catch(error){
        setIsLoading(false)
        setMsgErro("Erro ao realizar login: "+error)
        setShowAlertErro(true)
      }
    }
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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertErro}
          showProgress={false}
          message={msgErro}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertErro();
          }}
        />
    </KeyboardAvoidingView>
  );
};


