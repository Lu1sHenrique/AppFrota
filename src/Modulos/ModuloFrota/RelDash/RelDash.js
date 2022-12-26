import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToggleSwitch from 'toggle-switch-react-native'
//pages
import styles from './style'
import PageHeader from '../../../Components/PageHeader/PageHeader'
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
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
  const [formatoSelecionadoCombustao, setFormatoSelecionadoCombustao] = useState(0);
  const [formatoSelecionadoEletrica, setFormatoSelecionadoEletrica] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showErroConec, setShowErroConec] = useState(false);
  const [tipoFrotaSelecionado, setTipoFrotaSelecionado] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlertErro, setShowAlertErro] = useState(false)
  const [numUserCode, setNumUserCode] = useState(0);
  const [msgErro, setMsgErro] = useState("")
  const [exibirGrafico, setExibirGrafico] = useState(false)

  const hideAlertErro = () => (
    setShowAlertErro(false)
  );

  const getFormatoAnual = async (itemValue) => {
    setMesSelecionado(0)
    setExibirGrafico(false)
    if (tipoFrotaSelecionado == 1) {
      setFormatoSelecionadoCombustao(itemValue)
    } else {
      setFormatoSelecionadoEletrica(itemValue)
    }
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
        if (tipoFrotaSelecionado == 1) {
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
        } else {
          const { data } = await api.get('/obterDash/2&1&' + diaAnoIni + '&' + diaAnoFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
          if (data.operacaoExecutada == "N") {
            setShowAlertErro(true)
            setIsLoading(false)
          }
          if (data.mensagemErro.length > 0) {
            setMsgErro(data.mensagemErro)
            setShowAlertErro(true)
          }
          setIsLoading(false)
          setDataNumDash(data.consumoBateria)
        }
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

  const getFormatoMes = async (itemValue) => {
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

        if (tipoFrotaSelecionado == 1 && itemValue > 0) {
          const { data } = await api.get('/obterDash/1&2&' + diaMesIni + '&' + diaMesFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
          if (data.operacaoExecutada == "N") {
            setShowAlertErro(true)
            setMsgErro(data.mensagemErro)
            setIsLoading(false)
            setDataNumDash("")
          } else
            if (data.mensagemErro.length > 0) {
              setMsgErro(data.mensagemErro)
              setShowAlertErro(true)
            } else {
              setIsLoading(false)
              setDataNumDash(data.kmRodados)
            }
        } else if (itemValue > 0) {
          const { data } = await api.get('/obterDash/2&2&' + diaMesIni + '&' + diaMesFim + '&' + numUserCode + '&"TESTE"&"TESTE"&"TESTE"')
          if (data.operacaoExecutada == "N") {
            setShowAlertErro(true)
            setMsgErro(data.mensagemErro)
            setIsLoading(false)
            setDataNumDash("")
          } else
            if (data.mensagemErro.length > 0) {
              setMsgErro(data.mensagemErro)
              setShowAlertErro(true)
            } else {
              setIsLoading(false)
              setDataNumDash(data.consumoBateria)
            }
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

  function clickTipoFrota(itemValue) {
    setTipoFrotaSelecionado(itemValue)
    setFormatoSelecionadoCombustao(0)
    setFormatoSelecionadoEletrica(0)
  }

  function clickExibirGrafico() {
    setExibirGrafico(!exibirGrafico)
    console.log("grafico")
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
              clickTipoFrota(itemValue)
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
                  getFormatoAnual(itemValue)
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
                formatoSelecionadoCombustao == 2?
                  <>
                    <View>
                      <Picker
                        selectedValue={mesSelecionado}
                        onValueChange={(itemValue) =>
                          getFormatoMes(itemValue)
                        }
                        dropdownIconColor={colors.white}
                        style={{
                          backgroundColor: exibirGrafico ? "#a7a7a7" : colors.red,
                          width: '85%',
                          alignSelf: 'center',
                          color: colors.white,
                          marginTop: 5,
                          fontFamily: 'BebasNeue-Regular'
                        }}                       
                        enabled={exibirGrafico ? false : true}
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

                    <View style={{ alignSelf: 'center', width: '85%', alignItems: 'flex-end', marginTop: 10 }}>
                      <ToggleSwitch
                        isOn={exibirGrafico}
                        onColor={colors.red}
                        offColor={colors.gray}
                        label="Visualizar em gráfico"
                        labelStyle={{ color: colors.red, fontWeight: "600", fontFamily: 'BebasNeue-Regular', fontSize: 20 }}
                        size='medium'
                        onToggle={clickExibirGrafico}
                        animationSpeed={50}
                      />
                    </View>
                  </>
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
                    formatoSelecionadoCombustao == 2 && mesSelecionado > 0 && exibirGrafico == false?
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
                    formatoSelecionadoCombustao == 2 && mesSelecionado == 0 && exibirGrafico == false ?
                      <ModalMsgSemDash msg="Nenhum mês selecionado" />
                      : null
                  }

                  {
                    exibirGrafico ? 
                    <VictoryChart
                      domainPadding={10}
                    >
                      <VictoryBar
                        style={{ data: { fill: "#c43a31" } }}
                        data={[
                          { x: "Jan", y: 365},
                          { x: "Fev", y: 455},
                          { x: "Mar", y: 100},
                          { x: "Abr", y: 123},
                          { x: "Mai", y: 350},
                          { x: "Jun", y: 90},
                          { x: "Jul", y: 500},
                          { x: "Ago", y: 150},
                          { x: "Set", y: 300},
                          { x: "Out", y: 125},
                          { x: "Nov", y: 200},
                          { x: "Dez", y: 265}
                        ]}
                        labels={({ datum }) => `${datum.y}`}
                      />
                    </VictoryChart>
                    :
                    null
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
                  getFormatoAnual(itemValue)
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
                        getFormatoMes(itemValue)
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
                        <Text style={styles.NumerokmRodadosMes}>{dataNumDash}</Text>
                        <Text style={styles.textkmRodados}> de Bateria cosumida</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textEm}>em  </Text>
                        <Text style={styles.textMes}>2022</Text>
                      </View>
                    </View>
                  </>
                  : null
              }

              {
                formatoSelecionadoEletrica == 2 && mesSelecionado > 0 ?
                  <View style={{ marginTop: 70, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                      <Text style={styles.NumerokmRodadosMes}>{dataNumDash}</Text>
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