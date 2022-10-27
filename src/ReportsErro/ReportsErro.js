import React, {useState, useEffect, useRef} from 'react';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {Picker} from '@react-native-picker/picker'
import api from '../services/api'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Modalize } from 'react-native-modalize';
import {useNetInfo} from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReportErroEnvDTO from '../Envio/ReportErroEnvDTO'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
//pages
import styles from './style';
import ModalErro from '../Components/Modal/ModalErro/ModalErro';
import ModalErroNetwok from '../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import PageHeader from '../Components/PageHeader/PageHeader'

  function ReportsErro() {

      const netInfo = useNetInfo();

      const [showErrorNetWork, setShowErrorNetWork] = useState(false)

      const [numUserCode, setNumUserCode] = useState(0)

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

      useEffect(()=>{
        getCondutores();
      },[numUserCode])


      const navigation = useNavigation();

      const [isLoading, setIsLoading] = useState(true);

      const [condutores, setCondutores] = useState([]);
      const [condutorSelecionado, setCondutorSelecionado] = useState([]);
      const [imageErro, setImageErro] = useState("");
      const [msgErro, setMsgErro] = useState("");

      //states alerts
      const [showError, setShowError] = useState(false);
      const [showAlertConfirm, setShowAlertConfirm] = useState(false)
      const [showAlertSuccess, setShowAlertSuccess] = useState(false)
      const [showValidacaoCond, setShowValidacaoCond] = useState(false)
      const [showValidacaoMsg, setShowValidacaoMsg] = useState(false)
      const [showValidacaoImage, setShowValidacaoImage] = useState(false)
      const [showErroSend, setShowErroSend] = useState(false)
      const [msgErroSend, setMsgErroSend] = useState("")
      const [showErroConec, setShowErroConec] = useState(false)

      // refresh control
      const [refreshing, setRefreshing] = useState(false)

      const onRefresh = () =>{
        setRefreshing(false)
        getCondutores();
      }

      const hideAlertConfirm = () => (
        setShowAlertConfirm(false)
      );

      const hideAlertSuccess = () => (
        setShowAlertSuccess(false)
      );

      const hideAlertValidacaoCond = () => (
        setShowValidacaoCond(false)
      );

      const hideAlertValidacaoMsg = () => (
        setShowValidacaoMsg(false)
      );

      const hideAlertErroSend = () => (
        setShowErroSend(false)
      );

      const hideAlertValidacaoImage = () => (
        setShowValidacaoImage(false)
      );

      const hideErroConec = () => (
        setShowErroConec(false)
      );

      const getCondutores = async () =>{
        showError && setShowError(false)
        setIsLoading(true)
        try { 
        const {data} = await api.get('/obterListaRondante/1&"TODOS"&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
        setIsLoading(false)
        setCondutores(data.lista)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
      } finally {
        setIsLoading(false);
      }
    }

      const enviarReportErro = async () =>{

      const dadosReportErroEnvDTO = new ReportErroEnvDTO(condutorSelecionado, imageErro, msgErro);
      
      let data = new URLSearchParams();
      data.append('dadosReportErro', JSON.stringify(dadosReportErroEnvDTO));
      data.append('codigoUsuario', numUserCode.toString());
      data.append('token', "teste");
      data.append('chaveCelular', "teste");
      data.append('captcha', "xxxxx");

      let datastr = data.toString();

        if(showErrorNetWork == true){
          setShowErroConec(true)
          setShowAlertConfirm(false)
        }else
        if(showError == true){
          setShowErroConec(true)
          setShowAlertConfirm(false)
        }else
        if(!condutorSelecionado.length){
          setShowValidacaoCond(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(!msgErro.length){
          setShowValidacaoMsg(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else{
        await api.post('/registrarReportErro', datastr)
       .then(function (response) {
        console.log(response);
        if(response.data.operacaoExecutada == "N"){
          setShowErroSend(true)
          setMsgErroSend("Erro ao enviar: "+response.data.mensagemErro)
        }else{
          setShowAlertSuccess(true) 
          setCondutorSelecionado([])
          setImageErro([])
          setMsgErro("")
        }
        setShowAlertConfirm(false)
       })
       .catch(function (error) {
         console.error(error);
       });
     }
    }

      //configs image picks upload
      function onOpenImageErro(){
        modalizeRefImageErro.current?.open()
      }

      function onClose(){
        modalizeRefImageErro.current?.close()
      }

      const pickImageFromGalleryImageErro = async () => {
        const options ={
          mediaType: 'photo',
          includeBase64: true
        }
        const result = await launchImageLibrary(options)
        if(result?.assets){
          setImageErro(result.assets[0].fileName)
        }
        onClose()
      }

      const pickImageFromCameraImageErro = async () => {
        const options ={
          mediaTyp: 'photo',
          saveToPhotos: false,
          quality: 1,
          includeBase64: true
        }
        const result = await launchCamera(options)
        if(result?.assets){
          setImageErro(result.assets[0].fileName)
        }
        onClose()
      }

      const modalizeRefImageErro = useRef(null)

  return (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Modalize
      ref={modalizeRefImageErro}
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
            <View style={{alignItems: 'center'}}> 
              <Text style={styles.panelTitle}>Enviar foto</Text>
              <Text style={styles.panelSubtitle}>Escolha como deseja enviar a foto</Text>

              <TouchableOpacity 
              style={styles.panelButton}
              onPress={() => pickImageFromCameraImageErro()}
              >
                <Text style={styles.panelButtonTitle}>Capturar foto</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.panelButton}
              onPress={() => pickImageFromGalleryImageErro()}
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
      
      <PageHeader/>

      {isLoading ? <ActivityIndicator style={{flex: 1, display: 'flex'}} size="large" color='#d21e2b'/> : (
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#d21e2b']}/>
      }>
        <Animatable.View animation={"fadeInUp"}>
        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => navigation.navigate('DrawerItems')}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: '#424242'}}>Reportar Erro</Text>
          </TouchableOpacity>
        </View>

        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <ModalErro showError={showError} />      

        <View style={{marginTop: 15}}>
          <Picker
            selectedValue={condutorSelecionado}
            onValueChange={(itemValue) =>
              setCondutorSelecionado(itemValue)
            }
              dropdownIconColor='#fff'
              style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff',
              marginTop: 5,
              fontFamily: 'BebasNeue-Regular',
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
              label='Colaborador' 
              style={{
                color: '#000',
                fontFamily: 'BebasNeue-Regular',
              }}
              />
              {
              condutores.map(id => {
                return <Picker.Item 
                label={decodeURIComponent(id.nomeRondante.replaceAll('+', ' '))} 
                value={id.nomeRondante}
                style={{
                  color: '#d21e2b',
                  fontFamily: 'BebasNeue-Regular'
                }}
                key='colaborador'
                />
              })
            }
          </Picker>
        </View>          

        <TextInput
          style={styles.input}
          placeholder="Mensagem detalhada do erro"
          placeholderTextColor={"#d21e2b"}
          value={msgErro}
          onChangeText={text => setMsgErro(text)}
          multiline={true}
          textAlignVertical="top"
        />
        
        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={onOpenImageErro}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Se desejar envie uma foto do erro</Text>
        </TouchableOpacity> 

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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          cancelButtonStyle={styles.ButtonAlert}
          confirmButtonStyle={styles.ButtonAlert}
          cancelButtonTextStyle={styles.txtButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertConfirm}
          showProgress={false}
          message="Tem certeza que deseja reportar o erro?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não"
          confirmText="Sim"
          confirmButtonColor="#d21e2b"
          cancelButtonColor='#424242'
          onCancelPressed={() => {
            hideAlertConfirm();
          }}
          onConfirmPressed={enviarReportErro}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertSuccess}
          showProgress={false}
          message="O erro foi reportardo com sucesso. Iremos trabalhar para corrigir, obrigado!😁✅"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertSuccess();
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
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertValidacaoCond();
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
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideErroConec();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showValidacaoMsg}
          showProgress={false}
          message="⚠️Preencha a mensagem detalhando o erro/bug"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertValidacaoMsg();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showValidacaoImage}
          showProgress={false}
          message="⚠️Capture ou selecione uma foto do erro"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertValidacaoImage();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showErroSend}
          showProgress={false}
          message={msgErroSend}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertErroSend();
          }}
        />

        <View style={{paddingVertical: 15}}></View>
        </ScrollView>
      )}    
    </KeyboardAvoidingView>
  );

  function exibirAlerta(){
    setShowAlertConfirm(true)
  }
};

export default gestureHandlerRootHOC(ReportsErro);