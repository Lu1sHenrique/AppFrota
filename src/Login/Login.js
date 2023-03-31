import React, { useState, useContext, useEffect } from 'react';
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
import TouchID from 'react-native-touch-id';
import { useNetInfo } from "@react-native-community/netinfo";
import ModalErroNetwok from '../Components/Modal/ModalErroNetwork/ModalErroNetwork'
//pages
import styles from './style'
import { AuthContext } from '../contexts/Auth';
import api from '../services/api'

import colors from '../Utils/colors'

export default function Login() {

  const netInfo = useNetInfo();

  useEffect(() => {
    TouchID.isSupported()
      .then(success => {
        setSupportedTouchID(true)
      })
      .catch((error) => {
        console.log("erro touch" + error)
        setShowAlertErro(true)
        setMsgErro("Touch ID não suportado/habilitado")
      })
  }, []);

  useEffect(() => {
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  }, [netInfo]);

  const [hidePass, setHidePass] = useState(true);

  const [supportedTouchID, setSupportedTouchID] = useState(null);

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)
  const [showErroConec, setShowErroConec] = useState(false)

  //consts do context api
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [smsCode, setSmsCode] = useState("000000");
  const [isLoading, setIsLoading] = useState(false);
  const [showSmsCode, setShowSmsCode] = useState(false);

  const [showAlertErro, setShowAlertErro] = useState(false)
  const [msgErro, setMsgErro] = useState("")

  const hideAlertErro = () => (
    setShowAlertErro(false)
  );

  const hideErroConec = () => (
    setShowErroConec(false)
  );

  //context api
  const { logar } = useContext(AuthContext);

  async function saveUserToken(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }

  async function saveUserName(userName) {
    await AsyncStorage.setItem('@ListApp:userName', JSON.stringify(userName))
  }

  async function saveUserCode(userCode) {
    await AsyncStorage.setItem('@ListApp:userCode', JSON.stringify(userCode))
  }

  const navigation = useNavigation();

  //function logar
  async function HandleLogar() {
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
      setIsLoading(false)
    } else
      if (!usuario.length || !password.length) {
        setShowAlertErro(true)
        setMsgErro("Login ou Senha invalidos !")
        setIsLoading(false)
      } else {
        try {
          const { data } = await api.get('/processarLoginMobileV3/'
            + usuario + '&'
            + password +
            '&teste&'
            + smsCode + ''
          )
          console.log(data)
          if (data.mensagemErro == "Chave de Acesso Tecnica invalida. Aguarde Autorizacao !") {
            setMsgErro(data.mensagemErro)
            setShowAlertErro(true)
            setIsLoading(false)
            setShowSmsCode(true)
          } else if (data.operacaoExecutada == "N") {
            setShowAlertErro(true)
            setIsLoading(false)
            if (data.mensagemErro.length > 0) {
              setMsgErro(data.mensagemErro)
              setShowAlertErro(true)
            }
          } else if (!data.passaport == "") {
            logar(usuario)
            const user = data.passaport
            const userName = usuario
            const userCode = data.codigoUsuario

            await saveUserToken(user)
            await saveUserName(userName)
            await saveUserCode(userCode)

            setIsLoading(false)

            navigation.reset({
              index: 0,
              routes: [{ name: "HomeModulos" }]
            })
          }
        } catch (error) {
          setIsLoading(false)
          setMsgErro("Erro ao realizar login: " + error)
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
        style={{ flex: 1 }}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Image source={require('../assets/logo_login.png')}
            style={{ width: "100%", height: 100 }}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerInput}>

          <ModalErroNetwok showErrorNetWork={showErrorNetWork} />

          <View style={styles.containerAviso}>
            <Text style={styles.textAviso}>Uso exclusivo dos colaboradores máxima</Text>
          </View>

          <TextInput
            placeholder='Digite o usuário'
            placeholderTextColor={colors.white}
            style={styles.input}
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
            autoCorrect={false}
          />
          <View style={styles.ContainerHidePass}>
            <TextInput
              placeholder='Digite a senha'
              placeholderTextColor={colors.white}
              style={styles.inputHidePass}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={hidePass}
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.iconHidePass}
              onPress={() => setHidePass(!hidePass)}
            >
              {
                hidePass ?
                  <Icon name="eye" size={23} color={colors.white} />
                  :
                  <Icon name="eye-off" size={23} color={colors.white} />
              }
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={HandleLogar}
          >
            {
              isLoading ? (
                <ActivityIndicator style={{ flex: 1, display: 'flex', paddingVertical: 10 }} size="large" color={'#d21e2b'} />
              ) : (
                <Text style={styles.buttonText}>Acessar</Text>
              )
            }
          </TouchableOpacity>

          {
            showSmsCode ?
              <TextInput
                placeholder='Digite o código sms'
                placeholderTextColor={colors.white}
                style={styles.inputSms}
                onChangeText={(text) => setSmsCode(text)}
                autoCorrect={false}
                keyboardType="numeric"
              />
              : null
          }

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
        confirmButtonColor={colors.red}
        onConfirmPressed={() => {
          hideAlertErro();
        }}
      />

      <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.ButtonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showErroConec}
        showProgress={false}
        message="Erro de conexão"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.red}
        onConfirmPressed={() => {
          hideErroConec();
        }}
      />
    </KeyboardAvoidingView>
  );
};


