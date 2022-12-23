import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import {
  VictoryBar,
  VictoryChart
} from 'victory-native'
import api from '../../../services/api'
import { Picker } from '@react-native-picker/picker'
import { useNetInfo } from "@react-native-community/netinfo";
import AwesomeAlert from 'react-native-awesome-alerts';
//pages
import styles from './style'
import PageHeader from '../../../Components/PageHeader/PageHeader'
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import ModalMsgSemDash from '../../../Components/Modal/ModalMsgSemDash/ModalMsgSemDash';
import listaMeses from '../../../Utils/listaMeses';
import colors from '../../../Utils/colors';

export default function RelDash() {

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

  const [mesSelecionado, setMesSelecionado] = useState(0);
  const [dataNumDash, setDataNumDash] = useState("");
  const [nomeMesSelecionado, setNomeMesSelecionado] = useState("");
  const [diaMesIni, setDiaMesIni] = useState("");
  const [diaMesFim, setDiaMesFim] = useState("");
  const [formatoSelecionadoCombustao, setFormatoSelecionadoCombustao] = useState(0);
  const [formatoSelecionadoEletrica, setFormatoSelecionadoEletrica] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showErroConec, setShowErroConec] = useState(false);
  const [tipoFrotaSelecionado, setTipoFrotaSelecionado] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlertErro, setShowAlertErro] = useState(false)
  const [numUserCode, setNumUserCode] = useState(0);
  const [msgErro, setMsgErro] = useState("")

  const hideAlertErro = () => (
    setShowAlertErro(false)
  );

  const getKmAnualComb = async (itemValue) => {
    setFormatoSelecionadoCombustao(itemValue)
    showError && setShowError(false)
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
    } else if (showError == true) {
      setShowErroConec(true)
    } else if (itemValue == 1) {

      const diaAnoIni = "0101";
      const diaAnoFim = "3112";

      try {
      const { data } = await api.get('/obterDash/1&1&' + diaAnoIni + '&' + diaAnoFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
      if (data.operacaoExecutada == "N") {
        setShowAlertErro(true)
        setIsLoading(false)
      }
      if (data.mensagemErro.length > 0) {
        setMsgErro(data.mensagemErro)
        setShowAlertErro(true)
      }
      setIsLoading(false)
      setDataNumDash(data.kmRodados)
      } catch (error) {
        setIsLoading(false)
        setShowError(true)
        if (error.response) {
          console.log({ ...error });
        }
      }
    }
    setIsLoading(false)
  }

  const getKmMesComb = async (itemValue) => {
    setMesSelecionado(itemValue)
    setaNomeIdMesSelecionado(itemValue)
    showError && setShowError(false)
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
    } else if (showError == true) {
      setShowErroConec(true)
    } else {
      try {

        let diaMesIni = "";
        let diaMesFim = "";

        if (itemValue == 1) {
          diaMesIni = "0101"
          diaMesFim = "3101"
        } else if (itemValue == 2) {
          diaMesIni = "0102"
          diaMesFim = "2802"
        } else if (itemValue == 3) {
          diaMesIni = "0103"
          diaMesFim = "3103"
        } else if (itemValue == 4) {
          diaMesIni = "0104"
          diaMesFim = "3004"
        } else if (itemValue == 5) {
          diaMesIni = "0105"
          diaMesFim = "3105"
        } else if (itemValue == 6) {
          diaMesIni = "0106"
          diaMesFim = "3006"
        } else if (itemValue == 7) {
          diaMesIni = "0107"
          diaMesFim = "3107"
        } else if (itemValue == 8) {
          diaMesIni = "0108"
          diaMesFim = "3108"
        } else if (itemValue == 9) {
          diaMesIni = "0109"
          diaMesFim = "3009"
        } else if (itemValue == 10) {
          diaMesIni = "0110"
          diaMesFim = "3110"
        } else if (itemValue == 11) {
          diaMesIni = "0111"
          diaMesFim = "3011"
        } else if (itemValue == 12) {
          diaMesIni = "0112"
          diaMesFim = "3112"
        }

        const { data } = await api.get('/obterDash/1&2&' + diaMesIni + '&' + diaMesFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
        if (data.operacaoExecutada == "N") {
          setShowAlertErro(true)
          setMsgErro(data.mensagemErro)
          setIsLoading(false)
          setDataNumDash("")
        }else
        if (data.mensagemErro.length > 0) {
          setMsgErro(data.mensagemErro)
          setShowAlertErro(true)
        }else{
          setIsLoading(false)
          setDataNumDash(data.kmRodados)
        }
      } catch (error) {
        setIsLoading(false)
        setShowError(true)
        setDataNumDash("")
        if (error.response) {
          console.log({ ...error });
        }
      }
    }
    setIsLoading(false)
  };

  const getBateriaAnualEle = async (itemValue) => {
    setFormatoSelecionadoEletrica(itemValue)
    setaNomeIdMesSelecionado(itemValue)
    showError && setShowError(false)
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
    } else if (showError == true) {
      setShowErroConec(true)
    } else if (itemValue == 1) {
      console.log("pego as infos pro ano")
      /*try {
      
    
      /*const { data } = api.get('/obterDash/' + tipoFrotaSelecionado + '&' + formatoSelecionadoCombustao + '&' + diaMesIni + '&' + diaMesFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
      
      if (data.operacaoExecutada == "N") {
        setShowAlertErro(true)
        setIsLoading(false)
      }
      if (data.mensagemErro.length > 0) {
        setMsgErro(data.mensagemErro)
        setShowAlertErro(true)
      }
      setIsLoading(false)
      setDataNumDash(data) aqui vai ser um objeto com as infos de consumo e mes
      } catch (error) {
        setIsLoading(false)
        setShowError(true)
        if (error.response) {
          console.log({ ...error });
        }
      }*/
    }
    setIsLoading(false)
  };

  const getBateriaMesEle = async(itemValue) => {
    setMesSelecionado(itemValue)
    setaNomeIdMesSelecionado(itemValue)
    showError && setShowError(false)
    setIsLoading(true)
    if (showErrorNetWork == true) {
      setShowErroConec(true)
    } else if (showError == true) {
      setShowErroConec(true)
    } else {
      try {

        if (itemValue == 1) {
          setDiaMesIni("0101")
          setDiaMesFim("3101")
        } else if (itemValue == 2) {
          setDiaMesIni("0102")
          setDiaMesFim("2802")
        } else if (itemValue == 3) {
          setDiaMesIni("0103")
          setDiaMesFim("3103")
        } else if (itemValue == 4) {
          setDiaMesIni("0104")
          setDiaMesFim("3004")
        } else if (itemValue == 5) {
          setDiaMesIni("0105")
          setDiaMesFim("3105")
        } else if (itemValue == 6) {
          setDiaMesIni("0106")
          setDiaMesFim("3006")
        } else if (itemValue == 7) {
          setDiaMesIni("0107")
          setDiaMesFim("3107")
        } else if (itemValue == 8) {
          setDiaMesIni("0108")
          setDiaMesFim("3108")
        } else if (itemValue == 9) {
          setDiaMesIni("0109")
          setDiaMesFim("3009")
        } else if (itemValue == 10) {
          setDiaMesIni("0110")
          setDiaMesFim("3110")
        } else if (itemValue == 11) {
          setDiaMesIni("0111")
          setDiaMesFim("3011")
        } else if (itemValue == 12) {
          setDiaMesIni("0112")
          setDiaMesFim("3112")
        }

        const { data } = api.get('/obterDash/' + tipoFrotaSelecionado + '&' + formatoSelecionadoCombustao + '&' + diaMesIni + '&' + diaMesFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')

        if (data.operacaoExecutada == "N") {
          setShowAlertErro(true)
          setIsLoading(false)
        }
        if (data.mensagemErro.length > 0) {
          setMsgErro(data.mensagemErro)
          setShowAlertErro(true)
        }
        setIsLoading(false)
        setDataNumDash(data)
      } catch (error) {
        setIsLoading(false)
        setShowError(true)
        if (error.response) {
          console.log({ ...error });
        }
      }
    }
    setIsLoading(false)
  };

  const hideErroConec = () => (
    setShowErroConec(false)
  );


  const navigation = useNavigation();

  function setaNomeIdMesSelecionado(itemValue) {
    if (itemValue == 1) {
      setNomeMesSelecionado("Janeiro")
    } else if (itemValue == 2) {
      setNomeMesSelecionado("Fevereiro")
    } else if (itemValue == 3) {
      setNomeMesSelecionado("Março")
    } else if (itemValue == 4) {
      setNomeMesSelecionado("Abril")
    } else if (itemValue == 5) {
      setNomeMesSelecionado("Maio")
    } else if (itemValue == 6) {
      setNomeMesSelecionado("Junho")
    } else if (itemValue == 7) {
      setNomeMesSelecionado("Julho")
    } else if (itemValue == 8) {
      setNomeMesSelecionado("Agosto")
    } else if (itemValue == 9) {
      setNomeMesSelecionado("Setembro")
    } else if (itemValue == 10) {
      setNomeMesSelecionado("Outubro")
    } else if (itemValue == 11) {
      setNomeMesSelecionado("Novembro")
    } else if (itemValue == 12) {
      setNomeMesSelecionado("Dezembro")
    }
  }

  return (
    <View style={styles.container}>

      <PageHeader />

      <ScrollView>
        <View>
          <View style={styles.ContainerButtonBack}>
            <TouchableOpacity
              style={styles.ButtonBack}
              onPress={() => navigation.goBack()}
            >
              <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
              <Text style={{ fontSize: 33, fontFamily: 'BebasNeue-Regular', color: colors.gray }}>Dashboard Frota</Text>
            </TouchableOpacity>
          </View>
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
                color: colors.black,
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

        {
          tipoFrotaSelecionado == 0 ?
            <View>
              <Picker
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
                  label=''
                  value={0}
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />
              </Picker>
            </View>
            :
            null
        }

        {
          tipoFrotaSelecionado == 1 ?
            <View>
              <Picker
                selectedValue={formatoSelecionadoCombustao}
                onValueChange={(itemValue) =>
                  getKmAnualComb(itemValue)
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
                se
                dropdownIconRippleColor={colors.white}
              >
                <Picker.Item
                  label='Selecione o formato'
                  value={0}
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />

                <Picker.Item
                  label='Km rodados anual'
                  value={1}
                  style={{
                    color: colors.red,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                  key='kmRdodados'
                />

                <Picker.Item
                  label='Km rodados por mês'
                  value={2}
                  style={{
                    color: colors.red,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                  key='kmRodadosMes'
                />
              </Picker>

              {
                formatoSelecionadoCombustao == 2 ?
                  <View>
                    <Picker
                      selectedValue={mesSelecionado}
                      onValueChange={(itemValue) =>
                        getKmMesComb(itemValue)
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
                        label='Selecione o mês'
                        value={0}
                        style={{
                          color: colors.black,
                          fontFamily: 'BebasNeue-Regular'
                        }}
                      />
                      {
                        listaMeses.map(id => {
                          return <Picker.Item
                            label={id.nomeMes}
                            value={id.id}
                            style={{
                              color: colors.red,
                              fontFamily: 'BebasNeue-Regular'
                            }}
                            key='mes'
                          />
                        })
                      }
                    </Picker>
                  </View>
                  :
                  null
              }

              {isLoading ? <ActivityIndicator style={{ flex: 1, display: 'flex', marginTop: 20 }} size="large" color={colors.red} /> : (
                <>
                  {
                    formatoSelecionadoCombustao == 0 ?
                      <ModalMsgSemDash msg="Nenhum formato selecionado" />
                      :
                      null
                  }

                  {
                    formatoSelecionadoCombustao == 1 ?
                      <View>
                        <View style={{ marginTop: 70, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                          <Text style={styles.NumerokmRodadosMes}>{dataNumDash}</Text>
                          <Text style={styles.textkmRodados}>  km Rodados</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.textEm}>em  </Text>
                          <Text style={styles.textMes}>2022</Text>
                        </View>
                      </View>
                      </View>
                      : null
                  }

                  {
                    formatoSelecionadoCombustao == 2 && mesSelecionado > 0 ?
                      <View style={{ marginTop: 70, alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                          <Text style={styles.NumerokmRodadosMes}>{dataNumDash}</Text>
                          <Text style={styles.textkmRodados}>  km Rodados</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.textEm}>em  </Text>
                          <Text style={styles.textMes}>{nomeMesSelecionado}</Text>
                        </View>
                      </View>
                      :
                      null
                  }

                  {
                    formatoSelecionadoCombustao == 2 && mesSelecionado == 0 ?
                      <ModalMsgSemDash msg="Nenhum mês selecionado" />
                      : null
                  }
                </>
              )}
            </View>
            :
            null
        }

        {
          tipoFrotaSelecionado == 2 ?
            <View>
              <Picker
                selectedValue={formatoSelecionadoEletrica}
                onValueChange={(itemValue) =>
                  getBateriaAnualEle(itemValue)
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
                  label='Selecione o formato'
                  value={0}
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />

                <Picker.Item
                  label='Bateria consumida anual'
                  value={1}
                  style={{
                    color: colors.red,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                  key='bateriaConsumida'
                />

                <Picker.Item
                  label='Bateria consumida por mês'
                  value={2}
                  style={{
                    color: colors.red,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                  key='bateriaConsumidaMes'
                />
              </Picker>

              {
                tipoFrotaSelecionado == 2 && formatoSelecionadoEletrica == 2 ?
                  <View>
                    <Picker
                      selectedValue={mesSelecionado}
                      onValueChange={(itemValue) =>
                        getBateriaMesEle(itemValue)
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
                        label='Selecione o mês'
                        value={0}
                        style={{
                          color: colors.black,
                          fontFamily: 'BebasNeue-Regular'
                        }}
                      />
                      {
                        listaMeses.map(id => {
                          return <Picker.Item
                            label={id.nomeMes}
                            value={id.id}
                            style={{
                              color: colors.red,
                              fontFamily: 'BebasNeue-Regular'
                            }}
                            key='mes'
                          />
                        })
                      }
                    </Picker>
                  </View>
                  :
                  null
              }

              {
                formatoSelecionadoEletrica == 0 ?
                  <ModalMsgSemDash msg="Nenhum formato selecionado" />
                  :
                  null
              }

              {
                formatoSelecionadoEletrica == 1 ?
                  <>
                    <View style={{ marginTop: 70, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                      <Text style={styles.NumerokmRodadosMes}>152</Text>
                      <Text style={styles.textkmRodados}> de Bateria cosumida</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textEm}>em  </Text>
                      <Text style={styles.textMes}>{nomeMesSelecionado}</Text>
                    </View>
                  </View>
                  </>
                  : null
              }

              {
                formatoSelecionadoEletrica == 2 && mesSelecionado > 0 ?
                  <View style={{ marginTop: 70, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                      <Text style={styles.NumerokmRodadosMes}>152</Text>
                      <Text style={styles.textkmRodados}> de Bateria cosumida</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textEm}>em  </Text>
                      <Text style={styles.textMes}>{nomeMesSelecionado}</Text>
                    </View>
                  </View>
                  :
                  null
              }

              {
                formatoSelecionadoEletrica == 2 && mesSelecionado == 0 ?
                  <ModalMsgSemDash msg="Nenhum mês selecionado" />
                  :
                  null
              }
            </View>
            :
            null
        }

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
    </View>
  )
}