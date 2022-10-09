import React, {useState, useEffect} from 'react';
import { ScrollView, 
  Text, 
  View, 
  TouchableOpacity, 
  FlatList, 
  RefreshControl, 
  Image, 
  TextInput,
  ActivityIndicator
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {Picker} from '@react-native-picker/picker'
import AwesomeAlert from 'react-native-awesome-alerts';
import {useNetInfo} from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
//pages
import styles from './style'
import ConsultaChecklistComb from '../../../Components/ConsultaChecklistComb/ConsultaChecklistComb'
import ConsultaChecklistEletrica from '../../../Components/ConsultaChecklistEletrica/ConsultaChecklistEletrica'
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'

export default function RelFrota(){

  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)

  useEffect(()=>{
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  },[netInfo])

  useEffect(() => {
    async function buscarUserCodeAsyncStorage() {
      const userCode = await AsyncStorage.getItem('@ListApp:userCode');
      userCode ? setNumUserCode(userCode) : null
    }

    buscarUserCodeAsyncStorage();
  }, []);

  const navigation = useNavigation();
  
  const [listaChecklistComb, setListaChecklistComb] = useState([])
  const [listaChecklistEletrica, setListaChecklistEletrica] = useState([])
  const [dataInicialSelecionada, setDataInicialSelecionada] = useState("");
  const [dataFinalSelecionada, setDataFinalSelecionada] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tipoFrotaSelecionado, setTipoFrotaSelecionado] = useState(0);
  const [showValidacaoTipoFrota, setShowValidacaoTipoFrota] = useState(false)
  const [showErroConec, setShowErroConec] = useState(false)
  const [showError, setShowError] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false)
  const [numUserCode, setNumUserCode] = useState(0)
  // refresh control
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () =>{
    setRefreshing(false)
    getListaCheckList();
  }

  const hideAlertValidacaoTipoFrota = () => (
    setShowValidacaoTipoFrota(false)
  );

  const hideErroConec = () => (
    setShowErroConec(false)
  );

  const getListaCheckList = async () =>{
    showError && setShowError(false)
    setIsLoading(true)
    if(showErrorNetWork == true){
      setShowErroConec(true)
      setShowAlertConfirm(false)
    }else
    if(showError == true){
      setShowErroConec(true)
      setShowAlertConfirm(false)
    }else
    if(tipoFrotaSelecionado === 0){
      setShowValidacaoTipoFrota(true)
    }else
    if(tipoFrotaSelecionado === 1){
      try { 
        const {data} = await api.get('/obterListaChecklistCombustao/1&"TODOS"&"teste"&"teste"&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
        setIsLoading(false)
        setListaChecklistComb(data.lista)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
        if (error.response) {
        console.log({...error});
        }}
    }else 
    if(tipoFrotaSelecionado === 2){
      try { 
        const {data} = await api.get('/obterListaChecklistEletrica/1&"TODOS"&"teste"&"teste"&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
        setIsLoading(false)
        setListaChecklistEletrica(data.lista)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
        if (error.response) {
        console.log({...error});
        }}
    }
    setIsLoading(false)
  };
  
    return(
      <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh ={onRefresh} colors={['#d21e2b']}/>
      }>
       <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
        <View style={{width: '90%', flexDirection: 'row', alignSelf: 'center', width: '90%'}}>
          <Animatable.View animation="fadeInLeft" style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.navigate('DrawerItems')}
            >
              <IconFeather name="menu" size={30} color="#fff" />
            </TouchableOpacity>
          </Animatable.View>
          <View
          style={styles.ContainerLogo}>
            <Image source={require('../../../assets/logo_login.png')}
            style={styles.LogoHome} 
            />
          </View>
        </View>
      </Animatable.View>

        <View style={styles.ContainerButtonBack}> 
          <TouchableOpacity
            style={styles.ButtonBack}
            onPress={() => navigation.navigate('HomeFrota')}
            >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: '#424242'}}>Pesquisar checklist</Text>
          </TouchableOpacity>
        </View>

        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <ModalErro showError={showError} />

        <View style={{marginTop: 10}}>
          <Picker
          selectedValue={tipoFrotaSelecionado}
          onValueChange={(itemValue) =>
            setTipoFrotaSelecionado(itemValue)
          }
              dropdownIconColor='#fff'
              style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff'
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
              label='Selecione o tipo de frota'
              value={0} 
              style={{
                color: '#d21e2b',
                fontFamily: 'BebasNeue-Regular'
              }}
              />

              <Picker.Item
              label='Combustão'
              value={1}  
              style={{
                color: '#d21e2b',
                fontFamily: 'BebasNeue-Regular'
              }}
              />

            <Picker.Item
              label='Elétrica'
              value={2} 
              style={{
                color: '#d21e2b',
                fontFamily: 'BebasNeue-Regular'
              }}
              />
              
          </Picker>
        </View>

        <View>
          <TextInput
            style={styles.input}
              placeholder="Data inicial do checklist"
              keyboardType='numeric'
              placeholderTextColor={"#d21e2b"}
              onChangeText={text => setDataInicialSelecionada(text)}
              value={dataInicialSelecionada}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
              placeholder="Data final do checklist"
              keyboardType='numeric'
              placeholderTextColor={"#d21e2b"}
              onChangeText={text => setDataFinalSelecionada(text)}
              value={dataFinalSelecionada}
          />
        </View>       

        <TouchableOpacity
        onPress={getListaCheckList}
        style={styles.buttonBuscar}
        >
          <IconFeather style={{marginRight: 15}} name="search" size={25} color="#fff"/>
          <Text style={{fontSize: 20, fontFamily: 'BebasNeue-Regular', color: '#fff'}}>Buscar</Text>
        </TouchableOpacity>
        
        {isLoading ? <ActivityIndicator style={{flex: 1, display: 'flex'}} size="large" color='#d21e2b'/> : (
        <>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>   
          <Text style={{color: '#000'}}>Código</Text>
          <Text style={{color: '#000'}}>Data e hora envio</Text>  
          <Text style={{color: '#000'}}>Condutor</Text>
        </View>

         {
          tipoFrotaSelecionado === 1 ? <FlatList 
          data={listaChecklistComb}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item})=> <ConsultaChecklistComb data={item} />}
          /> : <FlatList 
            data={listaChecklistEletrica}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <ConsultaChecklistEletrica data={item} />}
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
          confirmButtonColor="#d21e2b"
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
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideErroConec();
          }}
        /> 
      </ScrollView>
    )
}



