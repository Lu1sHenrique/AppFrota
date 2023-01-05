import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  TextInput
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import { Picker } from '@react-native-picker/picker'
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInputMask from 'react-native-masked-input'
//pages
import styles from './style'
import ConsultaChecklistComb from '../../../Components/ConsultaChecklistComb/ConsultaChecklistComb'
import ConsultaChecklistEletrica from '../../../Components/ConsultaChecklistEletrica/ConsultaChecklistEletrica'
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import PageHeader from '../../../Components/PageHeader/PageHeader'

import colors from '../../../Utils/colors';

export default function RelFrota() {

  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

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
  }, [numUserCode]);

  const navigation = useNavigation();

  const [listaChecklistComb, setListaChecklistComb] = useState([])
  const [listaChecklistEletrica, setListaChecklistEletrica] = useState([])
  const [dataInicialSelecionada, setDataInicialSelecionada] = useState("");
  const [dataFinalSelecionada, setDataFinalSelecionada] = useState("");
  const [condutorSelecionado, setCondutorSelecionado] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tipoFrotaSelecionado, setTipoFrotaSelecionado] = useState(0);
  const [showValidacaoTipoFrota, setShowValidacaoTipoFrota] = useState(false)
  const [showErroConec, setShowErroConec] = useState(false)
  const [showError, setShowError] = useState(false);
  const [showAlertErro, setShowAlertErro] = useState(false)
  const [msgErro, setMsgErro] = useState("")
  const [numUserCode, setNumUserCode] = useState(0)
  // refresh control
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = (exclusao) => {
    setRefreshing(false)
    getListaCheckList();
  }

  const hideAlertValidacaoTipoFrota = () => (
    setShowValidacaoTipoFrota(false)
  );

  const hideErroConec = () => (
    setShowErroConec(false)
  );

  const hideAlertErro = () => (
    setShowAlertErro(false)
  );

  const getListaCheckList = async () => {
    showError && setShowError(false)
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
    } else
      if (showError == true) {
        setShowErroConec(true)
      } else
        if (tipoFrotaSelecionado === 0) {
          setShowValidacaoTipoFrota(true)
        } else
          if (tipoFrotaSelecionado === 1) {
            if (dataInicialSelecionada.length <= 0 && dataFinalSelecionada.length <= 0 && condutorSelecionado.length <= 0) {
              try {
                const { data } = await api.get('/obterListaChecklistCombustao/1&"TODOS"&""&""&""&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')

                if (data.operacaoExecutada == "N") {
                  setShowAlertErro(true)
                  setIsLoading(false)
                }
                if (data.mensagemErro.length > 0) {
                  setMsgErro(data.mensagemErro)
                  setShowAlertErro(true)
                }
                setIsLoading(false)
                setListaChecklistComb(data.lista)
              } catch (error) {
                setIsLoading(false)
                setShowError(true)
                if (error.response) {
                  console.log({ ...error });
                }
              }
            } else {
              try {

                let dataInicial = ''
                let dataFinal = ''
                let condutor = ''

                if (dataInicialSelecionada.length <= 0) {
                  dataInicial = '01012022'
                } else {
                  dataInicial = dataInicialSelecionada.replaceAll('/', '');
                }

                if (dataFinalSelecionada.length <= 0) {
                  dataFinal = '00000000'
                } else {
                  dataFinal = dataFinalSelecionada.replaceAll('/', '');
                }

                if (condutorSelecionado.length <= 0) {
                  condutor = '1'
                } else {
                  condutor = condutorSelecionado
                }

                const { data } = await api.get('/obterListaChecklistCombustao/2&"TODOS"&' + dataInicial + '&' + dataFinal + '&' + condutor + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')

                if (data.operacaoExecutada == "N") {
                  setShowAlertErro(true)
                  setIsLoading(false)
                }
                if (data.mensagemErro.length > 0) {
                  setMsgErro(data.mensagemErro)
                  setShowAlertErro(true)
                }
                setIsLoading(false)
                setListaChecklistComb(data.lista)
              } catch (error) {
                setIsLoading(false)
                setShowError(true)
                if (error.response) {
                  console.log({ ...error });
                }
              }
            }
          } else if (tipoFrotaSelecionado === 2) {
            if (dataInicialSelecionada.length <= 0 && dataFinalSelecionada.length <= 0 && condutorSelecionado.length <= 0) {
              try {
                const { data } = await api.get('/obterListaChecklistEletrica/1&"TODOS"&""&""&&""&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
                if (data.operacaoExecutada == "N") {
                  setShowAlertErro(true)
                  setIsLoading(false)
                }
                if (data.mensagemErro.length > 0) {
                  setMsgErro(data.mensagemErro)
                  setShowAlertErro(true)
                }
                setIsLoading(false)
                setListaChecklistEletrica(data.lista)
              } catch (error) {
                setIsLoading(false)
                setShowError(true)
                if (error.response) {
                  console.log({ ...error });
                }
              }
            } else {
              try {
                let dataInicial = ''
                let dataFinal = ''
                let condutor = ''

                if (dataInicialSelecionada.length <= 0) {
                  dataInicial = '01012022'
                } else {
                  dataInicial = dataInicialSelecionada.replaceAll('/', '');
                }

                if (dataFinalSelecionada.length <= 0) {
                  dataFinal = '00000000'
                } else {
                  dataFinal = dataFinalSelecionada.replaceAll('/', '');
                }

                if (condutorSelecionado.length <= 0) {
                  condutor = '1'
                } else {
                  condutor = condutorSelecionado
                }
                const { data } = await api.get('/obterListaChecklistEletrica/2&"TODOS"&' + dataInicial + '&' + dataFinal + '&' + condutor + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
                if (data.operacaoExecutada == "N") {
                  setShowAlertErro(true)
                  setIsLoading(false)
                }
                if (data.mensagemErro.length > 0) {
                  setMsgErro(data.mensagemErro)
                  setShowAlertErro(true)
                }
                setIsLoading(false)
                setListaChecklistEletrica(data.lista)
              } catch (error) {
                setIsLoading(false)
                setShowError(true)
                if (error.response) {
                  console.log({ ...error });
                }
              }
            }
          }
    setIsLoading(false)
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.red]} />
      }>

      <PageHeader />

      <View style={styles.ContainerButtonBack}>
        <TouchableOpacity
          style={styles.ButtonBack}
          onPress={() => navigation.navigate('HomeFrota')}
        >
          <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
          <Text style={{ fontSize: 33, fontFamily: 'BebasNeue-Regular', color: colors.gray }}>Pesquisar checklist</Text>
        </TouchableOpacity>
      </View>

      <ModalErroNetwok showErrorNetWork={showErrorNetWork} />

      <ModalErro showError={showError} />

      <View style={{ marginTop: 10 }}>
        <Picker
          selectedValue={tipoFrotaSelecionado}
          onValueChange={(itemValue) =>
            setTipoFrotaSelecionado(itemValue)
          }
          dropdownIconColor={colors.white}
          style={{
            backgroundColor: colors.red,
            width: '85%',
            alignSelf: 'center',
            color: colors.white
          }}
          dropdownIconRippleColor={colors.white}
        >
          <Picker.Item
            label='Selecione o tipo de frota'
            value={0}
            style={{
              color: colors.red,
              fontFamily: 'BebasNeue-Regular'
            }}
          />

          <Picker.Item
            label='Combustão'
            value={1}
            style={{
              color: colors.red,
              fontFamily: 'BebasNeue-Regular'
            }}
          />

          <Picker.Item
            label='Elétrica'
            value={2}
            style={{
              color: colors.red,
              fontFamily: 'BebasNeue-Regular'
            }}
          />

        </Picker>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Condutor"
          placeholderTextColor={colors.red}
          onChangeText={text => setCondutorSelecionado(text)}
          value={condutorSelecionado}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInputMask
          style={styles.input}
          placeholder="Data inicial do checklist"
          keyboardType='numeric'
          placeholderTextColor={colors.red}
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          onChangeText={text => setDataInicialSelecionada(text)}
          value={dataInicialSelecionada}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInputMask
          style={styles.input}
          placeholder="Data final do checklist"
          keyboardType='numeric'
          placeholderTextColor={colors.red}
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          onChangeText={text => setDataFinalSelecionada(text)}
          value={dataFinalSelecionada}
        />
      </View>

      <TouchableOpacity
        onPress={getListaCheckList}
        style={styles.buttonBuscar}
      >
        <IconFeather style={{ marginRight: 15 }} name="search" size={25} color={colors.white} />
        <Text style={{ fontSize: 20, fontFamily: 'BebasNeue-Regular', color: colors.white }}>Buscar</Text>
      </TouchableOpacity>

      {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex' }} size="large" color={colors.red} /> : (
        <>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{ color: colors.black }}>Código</Text>
            <Text style={{ color: colors.black }}>Data e hora envio</Text>
            <Text style={{ color: colors.black }}>Condutor</Text>
          </View>

          {
            tipoFrotaSelecionado === 1 ? <FlatList
              data={listaChecklistComb}
              style={{ width: '85%', alignSelf: 'center' }}
              keyExtractor={(item, indexComb) => String(indexComb)}
              renderItem={({ item }) => <ConsultaChecklistComb data={item} onRefresh={() => onRefresh()}/>}
            /> : <FlatList
              data={listaChecklistEletrica}
              style={{ width: '85%', alignSelf: 'center' }}
              keyExtractor={(item, indexEle) => String(indexEle)}
              renderItem={({ item }) => <ConsultaChecklistEletrica data={item} onRefresh={() => onRefresh()}/>}
            />
          }
        </>
      )}

      <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.ButtonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showValidacaoTipoFrota}
        showProgress={false}
        message="Selecione um tipo de frota"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.red}
        onConfirmPressed={() => {
          hideAlertValidacaoTipoFrota();
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
    </ScrollView>
  )
};