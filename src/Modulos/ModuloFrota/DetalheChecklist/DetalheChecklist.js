import React, {useState, useEffect} from 'react';
import { ScrollView, 
  Text, 
  View, 
  TouchableOpacity, 
  RefreshControl, 
  Image, 
  ActivityIndicator
} from 'react-native';

//libs
import IconFeather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {useNetInfo} from "@react-native-community/netinfo";
//pages
import styles from './style'
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'


export default function DetalheChecklist(){

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

  useEffect(()=>{
    getDetalheCheckList();
  },[])


  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  
  const [listaChecklistComb, setListaChecklistComb] = useState([])
  const [listaChecklistEletrica, setListaChecklistEletrica] = useState([])
  const [codigoChecklistCombustao, setCodigoChecklistCombustao] = useState(0);
  const [codigoChecklistEletrica, setCodigoChecklistEletrica] = useState(0);
  const [showError, setShowError] = useState(false);
  // refresh control
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () =>{
    setRefreshing(false)
    getDetalheCheckList();
  }

  const getDetalheCheckList = async () =>{

    if(data.codigoChecklistCombustao){
      setCodigoChecklistCombustao(data.codigoChecklistCombustao)
      try { 
        const {data} = await api.get('/obterListaChecklistCombustao/' + codigoChecklistCombustao)
        setIsLoading(false)
        setListaChecklistComb(data.lista)
        console.log(listaChecklistComb)
      } catch(error) {
        setIsLoading(false)
        if (error.response) {
        console.log({...error});
        }}
    }else 
    if(data.codigoChecklistEletrica){
      setCodigoChecklistEletrica(data.codigoChecklistEletrica)
      try { 
        const {data} = await api.get('/obterListaChecklistEletrica/'+ codigoChecklistEletrica)
        setIsLoading(false)
        setListaChecklistEletrica(data.lista)
        console.log(listaChecklistEletrica)
      } catch(error) {
        setIsLoading(false)
        if (error.response) {
        console.log({...error});
        }}
    }
    setIsLoading(false)
  };
  
    return(
      <View refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#d21e2b']}/>
      }>
       <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
        <View style={{width: '90%', flexDirection: 'row', alignSelf: 'center', width: '90%'}}>
          <Animatable.View animation="fadeInLeft" style={styles.icon}>
            <TouchableOpacity
            onPress={ () => navigation.openDrawer()}
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

      {isLoading ? <ActivityIndicator style={{flex: 1, display: 'flex'}} size="large" color='#d21e2b'/> : (
        <>
        <View style={styles.ContainerButtonBack}> 
          <TouchableOpacity
            style={styles.ButtonBack}
            onPress={() => navigation.navigate('HomeFrota')}
            >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: '#424242'}}>Detalhes checklist</Text>
          </TouchableOpacity>
        </View>

        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <ModalErro showError={showError} />
        </>
        )}
      </View>
)
}
    




