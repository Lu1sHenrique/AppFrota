import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Checkbox from "react-native-bouncy-checkbox";
import { Picker } from '@react-native-picker/picker'
import api from '../../../services/api'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Modalize } from 'react-native-modalize';
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChecklistCombustaoEnvDTO from '../../../Envio/ChecklistCombustaoEnvDTO'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
//pages
import styles from './style';
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import PageHeader from '../../../Components/PageHeader/PageHeader';

import colors from '../../../Utils/colors';


function FormFrota() {

  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

  //states AsyncStorage
  const [numUserCode, setNumUserCode] = useState(0)

  useEffect(() => {
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  }, [netInfo])

  useEffect(() => {
    async function buscarUserCodeAsyncStorage() {
      const userCode = await AsyncStorage.getItem('@ListApp:userCode');
      userCode ? setNumUserCode(userCode) : null
    }

    buscarUserCodeAsyncStorage();
  }, []);

  useEffect(() => {
    getDepartamentos();
    getCondutores();
    getPlacas();
  }, [numUserCode])

  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [diferenca, setDiferenca] = useState(0);

  //states picker
  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoSelecionado, setDepartamentoSelecionado] = useState([]);
  const [condutores, setCondutores] = useState([]);
  const [condutorSelecionado, setCondutorSelecionado] = useState([]);
  const [placas, setPlacas] = useState([]);
  const [placaSelecionada, setPlacaSelecionada] = useState([]);
  const [kmInicialSelecionado, setKmInicialSelecionado] = useState(0);
  const [kmFinalSelecionado, setKmFinalSelecionado] = useState(0);
  const [oleo, setOleo] = useState(0);
  const [pneu, setPneu] = useState(0);
  const [correias, setCorreias] = useState(0);
  const [operacao, setOperacao] = useState("I");
  //states checks
  const [carroMaxima, setCarroMaxima] = useState(true);
  const [carroReserva, setCarroReserva] = useState(false);
  const [ronda1, setRonda1] = useState(false);
  const [ronda2, setRonda2] = useState(false);
  const [ronda3, setRonda3] = useState(false);
  //states alerts
  const [showError, setShowError] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false)
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  const [showValidacaoDep, setShowValidacaoDep] = useState(false)
  const [showValidacaoCond, setShowValidacaoCond] = useState(false)
  const [showValidacaoPlac, setShowValidacaoPlac] = useState(false)
  const [showErroConec, setShowErroConec] = useState(false)
  const [showKmInicial, setShowKmInicial] = useState(false)
  const [showKmFinal, setShowKmFinal] = useState(false)
  const [showValidacaoKm, setShowValidacaoKm] = useState(false)
  const [showErrorSend, setShowErrorSend] = useState(false)
  const [showMsgErrorSend, setShowMsgErrorSend] = useState("")
  // states image
  const [imageKmInicial, setImageKmInicial] = useState("")
  const [imageKmFinal, setImageKmFinal] = useState("")
  const [imageKmInicialAnex, setImageKmInicialAnex] = useState(false)
  const [imageKmFinalAnex, setImageKmFinalAnex] = useState(false)
  const [showValidacaoImageInicial, setShowValidacaoImageInicial] = useState(false)
  const [showValidacaoImageFinal, setShowValidacaoImageFinal] = useState(false)
  // refresh control
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(false)
    getDepartamentos();
    getCondutores();
    getPlacas();
  }

  const hideAlertConfirm = () => (
    setShowAlertConfirm(false)
  );

  const hideAlertErroSend = () => (
    setShowErrorSend(false)
  );

  const hideAlertSuccess = () => (
    setShowAlertSuccess(false)
  );

  const hideAlertValidacaoDep = () => (
    setShowValidacaoDep(false)
  );

  const hideAlertValidacaoCond = () => (
    setShowValidacaoCond(false)
  );

  const hideAlertValidacaoPlac = () => (
    setShowValidacaoPlac(false)
  );

  const hideErroConec = () => (
    setShowErroConec(false)
  );

  const hideKmInicial = () => (
    setShowKmInicial(false)
  );

  const hideKmFinal = () => (
    setShowKmFinal(false)
  );

  const hideAlertValidacaoKm = () => (
    setShowValidacaoKm(false)
  );

  const hideAlertValidacaoImageInicial = () => (
    setShowValidacaoImageInicial(false)
  );

  const hideAlertValidacaoImageFinal = () => (
    setShowValidacaoImageFinal(false)
  );

  const getDepartamentos = async () => {
    showError && setShowError(false)
    setIsLoading(true)
    try {
      const { data } = await api.get('/obterListaDepartamento/1&"TODOS"&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
      setIsLoading(false)
      setDepartamentos(data.lista)
    } catch (error) {
      setIsLoading(false)
      setShowError(true)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCondutores = async () => {
    showError && setShowError(false)
    setIsLoading(true)
    try {
      const { data } = await api.get('/obterListaRondante/1&"TODOS"&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
      setIsLoading(false)
      setCondutores(data.lista)
    } catch (error) {
      setIsLoading(false)
      setShowError(true)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getPlacas = async () => {
    showError && setShowError(false)
    setIsLoading(true)
    try {
      const { data } = await api.get('/obterListaVeiculo/1&"TODOS"&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
      setIsLoading(false)
      setPlacas(data.lista)
    } catch (error) {
      setIsLoading(false)
      setShowError(true)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const enviarChecklistCombustao = async () => {

    const dadosChecklistCombustaoEnvDTO = new ChecklistCombustaoEnvDTO(carroMaxima, carroReserva, departamentoSelecionado, condutorSelecionado, placaSelecionada, kmInicialSelecionado, kmFinalSelecionado, ronda1, ronda2, ronda3, oleo, pneu, correias, imageKmInicial, imageKmFinal, diferenca, operacao);

    let data = new URLSearchParams();
    data.append('dadosChecklistCombustao', JSON.stringify(dadosChecklistCombustaoEnvDTO));
    data.append('codigoUsuario', numUserCode.toString());
    data.append('token', "teste");
    data.append('chaveCelular', "teste");
    data.append('captcha', "xxxxx");

    let datastr = data.toString();

    if (showErrorNetWork == true) {
      setShowErroConec(true)
      setShowAlertConfirm(false)
    } else
      if (showError == true) {
        setShowErroConec(true)
        setShowAlertConfirm(false)
      } else
        if (departamentoSelecionado == 0) {
          setShowValidacaoDep(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        } else
          if (!condutorSelecionado.length) {
            setShowValidacaoCond(true)
            setShowAlertSuccess(false)
            setShowAlertConfirm(false)
          } else
            if (!placaSelecionada.length) {
              setShowValidacaoPlac(true)
              setShowAlertSuccess(false)
              setShowAlertConfirm(false)
            } else
              if (kmInicialSelecionado.length < 2) {
                setShowKmInicial(true)
                setShowAlertSuccess(false)
                setShowAlertConfirm(false)
              } else
                if (kmFinalSelecionado.length < 2) {
                  setShowKmFinal(true)
                  setShowAlertSuccess(false)
                  setShowAlertConfirm(false)
                } else
                  if (parseInt(kmInicialSelecionado) >= parseInt(kmFinalSelecionado)) {
                    setShowValidacaoKm(true)
                    setShowAlertSuccess(false)
                    setShowAlertConfirm(false)
                  } else
                    if (!imageKmInicial.length) {
                      setShowValidacaoImageInicial(true)
                      setShowAlertSuccess(false)
                      setShowAlertConfirm(false)
                    } else
                      if (!imageKmFinal.length) {
                        setShowValidacaoImageFinal(true)
                        setShowAlertSuccess(false)
                        setShowAlertConfirm(false)
                      } else {
                        setIsLoadingSend(true)
                        await api.post('/registrarChecklistCombustao', datastr)
                          .then(function (response) {
                            setIsLoadingSend(false)
                            console.log(response)
                            if (response.data.operacaoExecutada == "N") {
                              setShowErrorSend(true)
                              setShowMsgErrorSend("Erro ao enviar: " + response.data.mensagemErro)
                            } else {
                              setShowAlertSuccess(true)
                              setDepartamentoSelecionado([])
                              setCondutorSelecionado([])
                              setPlacaSelecionada([])
                              setKmInicialSelecionado(0)
                              setImageKmInicial("")
                              setKmFinalSelecionado(0)
                              setImageKmFinal("")
                              setOleo(0)
                              setCorreias(0)
                              setPneu(0)
                              setDiferenca(0)
                              setImageKmInicialAnex(false)
                              setImageKmFinalAnex(false)
                            }
                            setShowAlertConfirm(false)
                          })
                          .catch(function (error) {
                            console.error(error);
                          })
                      }
  }

  function calcDiferenca() {
    setDiferenca(kmFinalSelecionado - kmInicialSelecionado)
  }


  //configs image picks upload
  function onOpenKmInicial() {
    modalizeRefKmInicial.current?.open()
  }

  function onOpenKmFinal() {
    modalizeRefKmFinal.current?.open()
  }

  function onClose() {
    modalizeRefKmInicial.current?.close()
    modalizeRefKmFinal.current?.close()
  }

  const pickImageFromGalleryInicial = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true
    }
    const result = await launchImageLibrary(options)
    if (result?.assets) {
      setImageKmInicial(result.assets[0].base64)
      setImageKmInicialAnex(true)
    }
    onClose()
  }

  const pickImageFromCameraInicial = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      quality: 1,
      includeBase64: true
    }
    const result = await launchCamera(options)
    if (result?.assets) {
      setImageKmInicial(result.assets[0].base64)
      setImageKmInicialAnex(true)
    }
    onClose()
  }

  const pickImageFromGalleryFinal = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true
    }
    const result = await launchImageLibrary(options)
    if (result?.assets) {
      setImageKmFinal(result.assets[0].base64)
      setImageKmFinalAnex(true)
    }
    onClose()
  }

  const pickImageFromCameraFinal = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      quality: 1,
      includeBase64: true
    }
    const result = await launchCamera(options)
    if (result?.assets) {
      setImageKmFinal(result.assets[0].base64)
      setImageKmFinalAnex(true)
    }
    onClose()
  }

  function clickCheckCarroMaxima() {
    setCarroMaxima(!carroMaxima)
    setCarroReserva(!carroReserva)
  }

  function clickCheckCarroReserva() {
    setCarroReserva(!carroReserva)
    setCarroMaxima(!carroMaxima)
  }
  const modalizeRefKmInicial = useRef(null)
  const modalizeRefKmFinal = useRef(null)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Modalize
        ref={modalizeRefKmInicial}
        snapPoint={330}
        modalHeight={330}
        HeaderComponent={
          <View style={styles.header}>
            <View style={styles.panelHeader}>
            </View>
          </View>
        }
      >
        <View style={styles.panel}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.panelTitle}>Enviar foto</Text>
            <Text style={styles.panelSubtitle}>Escolha como deseja enviar a foto</Text>

            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => pickImageFromCameraInicial()}
            >
              <Text style={styles.panelButtonTitle}>Capturar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => pickImageFromGalleryInicial()}
            >
              <Text style={styles.panelButtonTitle}>Escolher da galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={onClose}
            >
              <Text style={styles.panelButtonTitle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
      <Modalize
        ref={modalizeRefKmFinal}
        snapPoint={330}
        modalHeight={330}
        HeaderComponent={
          <View style={styles.header}>
            <View style={styles.panelHeader}>
            </View>
          </View>
        }
      >
        <View style={styles.panel}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.panelTitle}>Enviar foto</Text>
            <Text style={styles.panelSubtitle}>Escolha como deseja enviar a foto</Text>

            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => pickImageFromCameraFinal()}
            >
              <Text style={styles.panelButtonTitle}>Capturar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.panelButton}
              onPress={() => pickImageFromGalleryFinal()}
            >
              <Text style={styles.panelButtonTitle}>Escolher da galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.panelButton}
              onPress={onClose}
            >
              <Text style={styles.panelButtonTitle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>

      <PageHeader />

      {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex' }} size="large" color={colors.red} /> : (
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.red]} />
        }>
          <Animatable.View animation={"fadeInUp"}>
            <View style={styles.ContainerButtonBack}>
              <TouchableOpacity
                style={styles.ButtonBack}
                onPress={() => navigation.navigate('HomeFrota')}
              >
                <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
                <Text style={{ fontSize: 33, fontFamily: 'BebasNeue-Regular', color: colors.gray }}>Checklist Combustão</Text>
              </TouchableOpacity>
            </View>

            <ModalErroNetwok showErrorNetWork={showErrorNetWork} />

            <ModalErro showError={showError} />

            <View style={styles.containerCheckBox}>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: '40%', marginRight: 15 }}>
                  <Checkbox
                    size={25}
                    text="Carro Máxima"
                    fillColor={colors.red}
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 20,
                      fontFamily: 'BebasNeue-Regular',
                    }}
                    isChecked={carroMaxima}
                    disableBuiltInState
                    onPress={clickCheckCarroMaxima}
                  />
                </View>
                <View style={{ width: '40%' }}>
                  <Checkbox
                    size={25}
                    text="Carro Reserva"
                    fillColor={colors.red}
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 20,
                      fontFamily: 'BebasNeue-Regular'
                    }}
                    isChecked={carroReserva}
                    disableBuiltInState
                    onPress={clickCheckCarroReserva}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Picker
                selectedValue={departamentoSelecionado}
                onValueChange={(itemValue) =>
                  setDepartamentoSelecionado(itemValue)
                }
                dropdownIconColor={colors.white}
                style={{
                  backgroundColor: colors.red,
                  width: '85%',
                  alignSelf: 'center',
                  color: colors.white,
                  marginTop: 5,
                  fontFamily: 'BebasNeue-Regular'
                }}
                dropdownIconRippleColor={colors.white}
              >
                <Picker.Item
                  label='Departamentos'
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                  value={0}
                />
                {
                  departamentos.map(id => {
                    return <Picker.Item
                      label={decodeURIComponent(id.nomeDepartamento.replaceAll('+', ' '))}
                      value={id.codigoDepartamento}
                      style={{
                        color: colors.red,
                        fontFamily: 'BebasNeue-Regular'
                      }}
                      key='departamento'
                    />
                  })
                }
              </Picker>
            </View>

            <View>
              <Picker
                selectedValue={condutorSelecionado}
                onValueChange={(itemValue) =>
                  setCondutorSelecionado(itemValue)
                }
                dropdownIconColor={colors.white}
                style={{
                  backgroundColor: colors.red,
                  width: '85%',
                  alignSelf: 'center',
                  color: colors.white,
                  marginTop: 5,
                  fontFamily: 'BebasNeue-Regular'
                }}
                dropdownIconRippleColor={colors.white}
              >
                <Picker.Item
                  label='Condutores'
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />
                {
                  condutores.map(id => {
                    return <Picker.Item
                      label={decodeURIComponent(id.nomeRondante.replaceAll('+', ' '))}
                      value={id.nomeRondante}
                      style={{
                        color: colors.red,
                        fontFamily: 'BebasNeue-Regular'
                      }}
                      key='condutor'
                    />
                  })
                }
              </Picker>
            </View>

            <View>
              <Picker
                selectedValue={placaSelecionada}
                onValueChange={(itemValue) =>
                  setPlacaSelecionada(itemValue)
                }
                dropdownIconColor={colors.white}
                style={{
                  backgroundColor: colors.red,
                  width: '85%',
                  alignSelf: 'center',
                  color: colors.white,
                  marginTop: 5,
                  fontFamily: 'BebasNeue-Regular'
                }}
                dropdownIconRippleColor={colors.white}
              >
                <Picker.Item
                  label='Placa Veículo'
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />
                {
                  placas.map(id => {
                    return <Picker.Item
                      label={id.placaVeiculo.replaceAll('+', ' ')}
                      value={id.placaVeiculo}
                      style={{
                        color: colors.red,
                        fontFamily: 'BebasNeue-Regular'
                      }}
                      key='placa'
                    />
                  })
                }
              </Picker>
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Km Inicial"
                keyboardType='numeric'
                placeholderTextColor={colors.red}
                onChangeText={text => setKmInicialSelecionado(text)}
                value={kmInicialSelecionado}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={onOpenKmInicial}
            >
              <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color={colors.white} />
              <Text style={styles.txtButtonEnviar}>
                {
                  imageKmInicialAnex ? "Foto Km Inicial Anexada ✅"
                    :
                    "Foto Km Inicial"
                }
              </Text>
            </TouchableOpacity>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Km Final"
                placeholderTextColor={colors.red}
                keyboardType='numeric'
                onChangeText={text => setKmFinalSelecionado(text)}
                onEndEditing={() => calcDiferenca()}
                value={kmFinalSelecionado}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={onOpenKmFinal}
            >
              <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color={colors.white} />
              <Text style={styles.txtButtonEnviar}>
                {
                  imageKmFinalAnex ? "Foto Km Final Anexada ✅"
                    :
                    "Foto Km Final"
                }
              </Text>
            </TouchableOpacity>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Diferença entre o Km inicial e o final"
                placeholderTextColor={colors.red}
                editable={false}
                value={String(diferenca)}
              />
            </View>

            <View style={styles.ContainerRonda}>
              <View style={{ marginVertical: 25, marginHorizontal: 30 }}>
                <View style={{ marginVertical: 15 }}>
                  <Text style={{ fontSize: 30, fontFamily: 'BebasNeue-Regular', color: colors.gray }}>Ronda</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                  <Checkbox
                    size={25}
                    text="Rota 1"
                    fillColor={colors.red}
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 20,
                      fontFamily: 'BebasNeue-Regular',
                      marginRight: 20
                    }}
                    isChecked={ronda1}
                    onPress={() => setRonda1(!ronda1)}
                  />
                  <Checkbox
                    size={25}
                    text="Rota 2"
                    fillColor={colors.red}
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 20,
                      fontFamily: 'BebasNeue-Regular',
                      marginRight: 20
                    }}
                    isChecked={ronda2}
                    onPress={() => setRonda2(!ronda2)}
                  />
                  <Checkbox
                    size={25}
                    text="Rota 3"
                    fillColor={colors.red}
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 20,
                      fontFamily: 'BebasNeue-Regular',
                    }}
                    isChecked={ronda3}
                    onPress={() => setRonda3(!ronda3)}
                  />
                </View>
              </View>
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Troca de Óleo (Km Inicial)"
                placeholderTextColor={colors.red}
                keyboardType='numeric'
                onChangeText={text => setOleo(text)}
                value={oleo}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder='Pneu'
                placeholderTextColor={colors.red}
                keyboardType='numeric'
                onChangeText={text => setPneu(text)}
                value={pneu}
              />
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Correias (Km Inicial)"
                placeholderTextColor={colors.red}
                keyboardType='numeric'
                onChangeText={text => setCorreias(text)}
                value={correias}
              />
            </View>

            <View>
              <TouchableOpacity
                onPress={exibirAlerta}
                style={styles.button}
              >
                <Text style={styles.txtButton}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          <View style={{ paddingVertical: 15 }}></View>

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            cancelButtonStyle={styles.ButtonAlert}
            confirmButtonStyle={styles.ButtonAlert}
            cancelButtonTextStyle={styles.txtButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showAlertConfirm}
            showProgress={false}
            message={isLoadingSend ? <View style={{ flexDirection: 'column' }}><Text style={styles.txtTitleAlert}>🖐️Enviando Checklist</Text><ActivityIndicator style={{ marginTop: 15 }} color={colors.red} /></View> : "Tem certeza que deseja enviar o checklist?"}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={isLoadingSend ? false : true}
            showConfirmButton={isLoadingSend ? false : true}
            cancelText="Não"
            confirmText="Sim"
            confirmButtonColor={colors.red}
            cancelButtonColor={colors.gray}
            onCancelPressed={() => {
              hideAlertConfirm();
            }}
            onConfirmPressed={enviarChecklistCombustao}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showAlertSuccess}
            showProgress={false}
            message="O checklist foi enviado com sucesso!😁✅"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertSuccess();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showErrorSend}
            showProgress={false}
            message={showMsgErrorSend}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertErroSend();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoDep}
            showProgress={false}
            message="⚠️Selecione um departamento"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoDep();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoCond}
            showProgress={false}
            message="⚠️Selecione um condutor"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoCond();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoPlac}
            showProgress={false}
            message="⚠️Selecione uma placa"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoPlac();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showErroConec}
            showProgress={false}
            message="⚠️Erro de conexão"
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

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showKmInicial}
            showProgress={false}
            message="⚠️Preencha o Km Inicial com no mínimo dois dígitos"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideKmInicial();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showKmFinal}
            showProgress={false}
            message="⚠️Preencha o Km Final com no mínimo dois dígitos"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideKmFinal();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoKm}
            showProgress={false}
            message="⚠️O Km Inicial deve ser menor que o Km Final"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoKm();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoImageInicial}
            showProgress={false}
            message="⚠️Capture ou selecione uma foto do Km Inicial"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoImageInicial();
            }}
          />

          <AwesomeAlert
            contentContainerStyle={styles.containerAlert}
            confirmButtonStyle={styles.ButtonAlert}
            confirmButtonTextStyle={styles.txtButtonAlert}
            messageStyle={styles.txtTitleAlert}
            show={showValidacaoImageFinal}
            showProgress={false}
            message="⚠️Capture ou selecione uma foto do Km Final"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor={colors.red}
            onConfirmPressed={() => {
              hideAlertValidacaoImageFinal();
            }}
          />
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );

  function exibirAlerta() {
    setShowAlertConfirm(true)
  }
}

export default gestureHandlerRootHOC(FormFrota)