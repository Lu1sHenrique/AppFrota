import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import IconFA from 'react-native-vector-icons/FontAwesome'
import colors from "../../Utils/colors";
import ChecklistEletricaEnvDTO from '../../Envio/ChecklistEletricaEnvDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

  function ConsultaChecklistEletrica({ data, onRefresh }) {

  var codigo = data.codigoChecklistEletrica;

  useEffect(() => {
    async function buscarUserCodeAsyncStorage() {
      const userCode = await AsyncStorage.getItem('@ListApp:userCode');
      userCode ? setNumUserCode(userCode) : null
    }

    buscarUserCodeAsyncStorage();
  }, [numUserCode]);

  const [numUserCode, setNumUserCode] = useState(0)
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [showErrorSend, setShowErrorSend] = useState(false);
  const [showMsgErrorSend, setShowMsgErrorSend] = useState("");
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  const hideAlertErroSend = () => (
    setShowErrorSend(false)
  );

  const hideAlertSuccess = () => (
    setShowAlertSuccess(false)
  );

  const hideAlertConfirm = () => (
    setShowAlertConfirm(false)
  );

  const excluirCheckListComb = async () => {

    const dadosChecklistEletricaEnvDTO = new ChecklistEletricaEnvDTO(codigo, "", "", 0, 0, "", "", 0, "E");

    let data = new URLSearchParams();
    data.append('dadosChecklistEletrica', JSON.stringify(dadosChecklistEletricaEnvDTO));
    data.append('codigoUsuario', numUserCode.toString());
    data.append('token', "teste");
    data.append('chaveCelular', "teste");
    data.append('captcha', "xxxxx");

    let datastr = data.toString();

    setIsLoadingSend(true)
    await api.post('/excluirChecklistEle', datastr)
      .then(function (response) {
        setIsLoadingSend(false)
        if (response.data.operacaoExecutada == "N") {
          setShowErrorSend(true)
          setShowMsgErrorSend("Erro ao excluir: " + response.data.mensagemErro)
        } else {
          setShowAlertSuccess(true)
        }
        setShowAlertConfirm(false)
      })
      .catch(function (error) {
        console.error(error);
      })
    setShowAlertConfirm(false)
    onRefresh()
  }

  function LeftActions(){

    return (
      <View style={styles.containerLeftAction}>
        <IconFA style={styles.iconAction} name="edit" color={colors.red} size={30}/>
      </View>
    )
  }

  function RightActions(){

    return (
      <View style={styles.containerRightAction}>
        <IconFA style={styles.iconAction} name="trash" color={colors.red} size={30}/>
      </View>
    )
  }

  const navigation = useNavigation();

  return (
    <Swipeable
    renderLeftActions={LeftActions}
    renderRightActions={RightActions}
    onSwipeableLeftOpen={exibirAlerta}
    onSwipeableRightOpen={exibirAlerta}
    >
      <TouchableOpacity
        style={styles.buttonItemCheck}
        onPress={() => navigation.navigate('DetalheChecklist', { paramKey: data })}
      >
        <Text style={styles.txtbBttonItemCheckCodigo}>{data.codigoChecklistEletrica}</Text>
        <Text style={styles.txtbBttonItemCheckData}>{data.dataEnvio.substr(0, 12)} - {data.horaEnvio}</Text>
        <Text style={styles.txtbBttonItemCheckCondutor}>{decodeURIComponent(data.condutor.replaceAll('+', ' ').substring(0, 15))}</Text>
      </TouchableOpacity>

      <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        cancelButtonStyle={styles.ButtonAlert}
        confirmButtonStyle={styles.ButtonAlert}
        cancelButtonTextStyle={styles.txtButtonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showAlertConfirm}
        progressColor={colors.red}
        message={isLoadingSend ? "🖐️Excluindo Checklist" : "Tem certeza que deseja excluir o checklist?"}
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
        onConfirmPressed={excluirCheckListComb}
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
        show={showAlertSuccess}
        showProgress={false}
        message="O checklist foi excluído com sucesso!😁✅"
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
    </Swipeable>
  );

  function exibirAlerta() {
    setShowAlertConfirm(true)
  }
}

export default gestureHandlerRootHOC(ConsultaChecklistEletrica)