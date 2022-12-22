import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
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
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import ModalMsgSemDash from '../../../Components/Modal/ModalMsgSemDash/ModalMsgSemDash';
import colors from '../../../Utils/colors';

const dados = [
  {
    id: '1',
    nome: 'Km Rodados',
    value: 7000,
    color: '#ff8555',
    percent: '85%',
    mes: "Janeiro"
  },
  {
    id: '2',
    nome: 'Consumo gasolina',
    value: 50,
    color: '#975fff',
    percent: '5%',
    mes: "Favereiro"
  },
  {
    id: '3',
    nome: 'Horas fora',
    value: 150,
    color: '#8f5e',
    percent: '10%',
    mes: "Março"
  }
]

export default function RelDash() {

  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

  useEffect(() => {
    setData(dados)
  }, [])

  useEffect(() => {
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  }, [netInfo])

  const [data, setData] = useState([]);
  const [mesSelecionado, setMesSelecionado] = useState([]);
  const [formatoSelecionadoCombustao, setFormatoSelecionadoCombustao] = useState(0);
  const [formatoSelecionadoEletrica, setFormatoSelecionadoEletrica] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showErroConec, setShowErroConec] = useState(false);
  const [tipoFrotaSelecionado, setTipoFrotaSelecionado] = useState(0);;

  /*
    const getDash = async () =>{
      showError && setShowError(false)
      setIsLoading(true)
      if(showErrorNetWork == true){
        setShowErroConec(true)
      }else
      if(showError == true){
        setShowErroConec(true)
      }else
      if(tipoFrotaSelecionado === 0){
        setShowValidacaoTipoFrota(true)
      }else
      if(formatoSelecionadoCombustao === 1){
        if(dataInicialSelecionada.length<=0 && dataFinalSelecionada.length<=0 && condutorSelecionado.length<=0){
        try {
          const {data} = await api.get('/obterDash/qual tipo de fora&"qual formato"& qual mes&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
  
          if(data.operacaoExecutada == "N"){
            setShowAlertErro(true)
            setIsLoading(false)
          }
          if(data.mensagemErro.length>0){
              setMsgErro(data.mensagemErro)
              setShowAlertErro(true)
          }
          setIsLoading(false)
          setListaChecklistComb(data.lista)
        } catch(error) {
          setIsLoading(false)
          setShowError(true)
          if (error.response) {
          console.log({...error});
          }}
      }*/

  const hideErroConec = () => (
    setShowErroConec(false)
  );

  const navigation = useNavigation();

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
          tipoFrotaSelecionado == 1 && formatoSelecionadoCombustao == 2 ?
            <View>
              <Picker
                selectedValue={mesSelecionado}
                onValueChange={(itemValue) =>
                  setMesSelecionado(itemValue)
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
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />
                {
                  data.map(id => {
                    return <Picker.Item
                      label={id.mes}
                      value={id.mes}
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
          tipoFrotaSelecionado == 2 && formatoSelecionadoEletrica == 2 ?
            <View>
              <Picker
                selectedValue={mesSelecionado}
                onValueChange={(itemValue) =>
                  setMesSelecionado(itemValue)
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
                  style={{
                    color: colors.black,
                    fontFamily: 'BebasNeue-Regular'
                  }}
                />
                {
                  data.map(id => {
                    return <Picker.Item
                      label={id.mes}
                      value={id.mes}
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
          tipoFrotaSelecionado == 0 ?
            <View>
              <Picker
                selectedValue={formatoSelecionadoEletrica}
                onValueChange={(itemValue) =>
                  setFormatoSelecionadoEletrica(itemValue)
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
                  setFormatoSelecionadoCombustao(itemValue)
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
                formatoSelecionadoCombustao == 0 ?
                  <ModalMsgSemDash />
                  :
                  null
              }

              {
                formatoSelecionadoCombustao == 1 ?
                  <View>
                    <VictoryChart
                      domainPadding={10}
                    >
                      <VictoryBar
                        alignment='start'
                        colorScale={data.map(dados => dados.color)}
                        data={data}
                        x='id'
                        y='value'
                        y0='0'
                        style={{
                          labels: {
                            fill: colors.black,
                            fontSize: 20,
                            fontFamily: 'BebasNeue-Regular'
                          },
                          data: {
                            fill: colors.red
                          }
                        }}
                        animate={{
                          duration: 1000,
                          easing: 'circle'
                        }}
                      />
                    </VictoryChart>
                  </View>
                  : null
              }

              {
                formatoSelecionadoCombustao == 2 ?
                  <View style={{ marginTop: 70, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                      <Text style={styles.NumerokmRodadosMes}>3.291</Text>
                      <Text style={styles.textkmRodados}>km Rodados</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textEm}>em  </Text>
                      <Text style={styles.textMes}>Janeiro</Text>
                    </View>
                  </View>
                  : null
              }
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
                  setFormatoSelecionadoEletrica(itemValue)
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
                formatoSelecionadoEletrica == 0 ?
                  <ModalMsgSemDash />
                  :
                  null
              }

              {
                formatoSelecionadoEletrica == 1 ?
                  <>
                    <VictoryChart
                      domainPadding={10}
                    >
                      <VictoryBar
                        alignment='start'
                        colorScale={data.map(dados => dados.color)}
                        data={data}
                        x='id'
                        y='value'
                        y0='0'
                        style={{
                          labels: {
                            fill: colors.black,
                            fontSize: 20,
                            fontFamily: 'BebasNeue-Regular'
                          },
                          data: {
                            fill: colors.red
                          }
                        }}
                        animate={{
                          duration: 1000,
                          easing: 'circle'
                        }}
                      />
                    </VictoryChart>
                  </>
                  : null
              }

              {
                formatoSelecionadoEletrica == 2 ?
                  <View style={{ marginTop: 70, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                      <Text style={styles.NumerokmRodadosMes}>152</Text>
                      <Text style={styles.textkmRodados}> de Bateria cosumida</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.textEm}>em  </Text>
                      <Text style={styles.textMes}>Janeiro</Text>
                    </View>
                  </View>
                  : null
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
      </ScrollView>
    </View>
  )
}