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
import api from '../../../services/api'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Modalize } from 'react-native-modalize';
import {useNetInfo} from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChecklistEletricaEnvDTO from '../../../Envio/ChecklistEletricaEnvDTO'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
//pages
import styles from './style';
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro';
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import PageHeader from '../../../Components/PageHeader/PageHeader'

import colors from '../../../Utils/colors';

  function FormFrotaEletrica() {

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
        getPlacas();
        getDepartamentos();
        getCondutores();
      },[numUserCode])


      const navigation = useNavigation();

      const [isLoading, setIsLoading] = useState(true);

      //states picker
      const [departamentos, setDepartamentos] = useState([]);
      const [departamentoSelecionado, setDepartamentoSelecionado] = useState([]);
      const [condutores, setCondutores] = useState([]);
      const [condutorSelecionado, setCondutorSelecionado] = useState([]);
      const [placas, setPlacas] = useState([]);
      const [placaSelecionada, setPlacaSelecionada] = useState([]);
      const [diferenca, setDiferenca] = useState("");
      //
      const [bateriaInicialSelecionado, setBateriaInicialSelecionado] = useState("");
      const [bateriaFinalSelecionado, setBateriaFinalSelecionado] = useState("");
      //states alerts
      const [showError, setShowError] = useState(false);
      const [showAlertConfirm, setShowAlertConfirm] = useState(false)
      const [showAlertSuccess, setShowAlertSuccess] = useState(false)
      const [showValidacaoDep, setShowValidacaoDep] = useState(false)
      const [showValidacaoCond, setShowValidacaoCond] = useState(false)
      const [showValidacaoPlac, setShowValidacaoPlac] = useState(false)
      const [showErroConec, setShowErroConec] = useState(false)
      const [showBateriaInicial, setShowBateriaInicial] = useState(false)
      const [showBateriaFinal, setShowBateriaFinal] = useState(false)
      const [showValidacaoBateria, setShowValidacaoBateria] = useState(false)
      const [showValidacaoBateriaIni8, setShowValidacaoBateriaIni8] = useState(false)
      const [showErrorSend, setShowErrorSend] = useState(false)
      const [showMsgErrorSend, setShowMsgErrorSend] = useState("")
      // states image
      const [imageBateriaInicial, setImageBateriaInicial] = useState("")
      const [imageBateriaFinal, setimageBateriaFinal] = useState("")
      const [imageBateriaInicialAnex, setImageBateriaInicialAnex] = useState(false)
      const [imageBateriaFinalAnex, setimageBateriaFinalAnex] = useState(false)
      const [showValidacaoImageInicial, setShowValidacaoImageInicial] = useState(false)
      const [showValidacaoImageFinal, setShowValidacaoImageFinal] = useState(false)
      // refresh control
      const [refreshing, setRefreshing] = useState(false)

      const onRefresh = () =>{
        setRefreshing(false)
        getDepartamentos();
        getCondutores();
        getPlacas();
      }

      const hideAlertConfirm = () => (
        setShowAlertConfirm(false)
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

      const hideBateriaInicial = () => (
        setShowBateriaInicial(false)
      );

      const hideBaterialFinal = () => (
        setShowBateriaFinal(false)
      );

      const hideAlertValidacaoBateria = () => (
        setShowValidacaoBateria(false)
      );

      const hideAlertValidacaoBateriaIni8 = () => (
        setShowValidacaoBateriaIni8(false)
      );

      const hideAlertValidacaoImageInicial = () => (
        setShowValidacaoImageInicial(false)
      );

      const hideAlertValidacaoImageFinal = () => (
        setShowValidacaoImageFinal(false)
      );

      const getDepartamentos = async () =>{
        showError && setShowError(false)
        setIsLoading(true)
        try { 
        const {data} = await api.get('/obterListaDepartamento/1&"TODOS"&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
        setIsLoading(false)
        setDepartamentos(data.lista)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
      } finally {
        setIsLoading(false);
      }
      }

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

      const getPlacas = async () =>{
        showError && setShowError(false)
        setIsLoading(true)
        try { 
        const {data} = await api.get('/obterListaVeiculo/1&"TODOS"&'+numUserCode+'&"TESTE"&"TESTE"&"TESTE"')
        setIsLoading(false)
        setPlacas(data.lista)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
      } finally {
        setIsLoading(false);
      }
      }

      function calcDiferenca(){
        let result = parseInt(bateriaInicialSelecionado)-parseInt(bateriaFinalSelecionado)
        setDiferenca(result.toString())
      }


      const enviarChecklistEletrica = async () =>{

      const dadosChecklistEletricaEnvDTO = new ChecklistEletricaEnvDTO(departamentoSelecionado, condutorSelecionado, placaSelecionada, bateriaInicialSelecionado, bateriaFinalSelecionado, imageBateriaInicial, imageBateriaFinal, diferenca);
      
      let data = new URLSearchParams();
      data.append('dadosChecklistEletrica', JSON.stringify(dadosChecklistEletricaEnvDTO));
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
        if(!departamentoSelecionado.length){
          setShowValidacaoDep(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(!condutorSelecionado.length){
          setShowValidacaoCond(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(!placaSelecionada.length){
          setShowValidacaoPlac(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(bateriaInicialSelecionado.length<0){
          setShowBateriaInicial(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(bateriaFinalSelecionado.length<0){
          setShowBateriaFinal(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(parseInt(bateriaInicialSelecionado) > 8){
          setShowValidacaoBateriaIni8(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(parseInt(bateriaInicialSelecionado) <= parseInt(bateriaFinalSelecionado)){
          setShowValidacaoBateria(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(!imageBateriaInicial.length){
          setShowValidacaoImageInicial(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else
        if(!imageBateriaFinal.length){
          setShowValidacaoImageFinal(true)
          setShowAlertSuccess(false)
          setShowAlertConfirm(false)
        }else{
        await api.post('/registrarChecklistEletrica', datastr)
       .then(function (response) {
        console.log(response);
        if(response.data.operacaoExecutada  == "N"){
          setShowErrorSend(true)
          setShowMsgErrorSend("Erro ao enviar: "+response.data.mensagemErro)
        }else{
        setShowAlertSuccess(true) 
        setDepartamentoSelecionado([])
        setCondutorSelecionado([])
        setPlacaSelecionada([])
        setBateriaInicialSelecionado("")
        setImageBateriaInicial("")
        setBateriaFinalSelecionado("")
        setimageBateriaFinal("")
        setDiferenca("")
        setImageBateriaInicialAnex(false)
        setimageBateriaFinalAnex(false)
        }
        setShowAlertConfirm(false)
      })
       .catch(function (error) {
         console.error(error);
       });
     }
    }

      //configs image picks upload
      function onOpenKmInicial(){
        modalizeRefBateriaInicial.current?.open()
      }

      function onOpenKmFinal(){
        modalizeRefBateriaFinal.current?.open()
      }

      function onClose(){
        modalizeRefBateriaInicial.current?.close()
        modalizeRefBateriaFinal.current?.close()
      }

      const pickImageFromGalleryInicial = async () => {
        const options ={
          mediaType: 'photo',
          includeBase64: true
        }
        const result = await launchImageLibrary(options)
        if(result?.assets){
          setImageBateriaInicial(result.assets[0].base64)
          setImageBateriaInicialAnex(true)
        }
        onClose()
      }

      const pickImageFromCameraInicial = async () => {
        const options ={
          mediaTyp: 'photo',
          saveToPhotos: false,
          quality: 1,
          includeBase64: true
        }
        const result = await launchCamera(options)
        if(result?.assets){
          setImageBateriaInicial(result.assets[0].base64)
          setImageBateriaInicialAnex(true)
        }
        onClose()
      }

      const pickImageFromGalleryFinal = async () => {
        const options ={
          mediaType: 'photo',
          includeBase64: true
        }
        const result = await launchImageLibrary(options)
        if(result?.assets){
          setimageBateriaFinal(result.assets[0].base64)
          setimageBateriaFinalAnex(true)
        }
        onClose()
      }

      const pickImageFromCameraFinal = async () => {
        const options ={
          mediaTyp: 'photo',
          saveToPhotos: false,
          quality: 1,
          includeBase64: true
        }
        const result = await launchCamera(options)
        if(result?.assets){
          setimageBateriaFinal(result.assets[0].base64)
          setimageBateriaFinalAnex(true)
        }
        onClose()
      }   

      const modalizeRefBateriaInicial = useRef(null)
      const modalizeRefBateriaFinal = useRef(null)

  return (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Modalize
      ref={modalizeRefBateriaInicial}
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
      ref={modalizeRefBateriaFinal}
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
      
      <PageHeader/>

      {isLoading ? <ActivityIndicator style={{flex: 1, display: 'flex'}} size="large" color={colors.red}/> : (
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.red]}/>
      }>
        <Animatable.View animation={"fadeInUp"}>
        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => navigation.navigate('HomeFrota')}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: colors.gray}}>Checklist Elétrica</Text>
          </TouchableOpacity>
        </View>

        <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

        <ModalErro showError={showError} />

        <View style={{marginTop: 20}}>
          <Picker
            selectedValue={departamentoSelecionado}
            onValueChange={(itemValue) =>
              setDepartamentoSelecionado(itemValue)
            }
              dropdownIconColor={colors.white}
              style={{
              backgroundColor:colors.red,
              width: '85%',
              alignSelf: 'center',
              color: colors.white,
              marginTop: 5,
              fontFamily: 'BebasNeue-Regular',
            }}
            dropdownIconRippleColor= {colors.white}
            >
              <Picker.Item 
              label='Departamento' 
              style={{
                color: colors.black,
                fontFamily: 'BebasNeue-Regular',
              }}
              />
              {
              departamentos.map(id => {
                return <Picker.Item 
                label={decodeURIComponent(id.nomeDepartamento.replaceAll('+', ' '))} 
                value={id.nomeDepartamento} 
                style={{
                  color: colors.red,
                  fontFamily: 'BebasNeue-Regular',
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
              backgroundColor:colors.red,
              width: '85%',
              alignSelf: 'center',
              color: colors.white,
              marginTop: 5,
              fontFamily: 'BebasNeue-Regular',
            }}
            dropdownIconRippleColor={colors.white}
            >
              <Picker.Item 
              label='Condutor' 
              style={{
                color: colors.black,
                fontFamily: 'BebasNeue-Regular',
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
              backgroundColor:colors.red,
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
                label={id.placaVeiculo} 
                value={id.placaVeiculo}
                style={{
                  color: colors.red,
                  fontFamily: 'BebasNeue-Regular',
                }}
                key='placa'
                />
              })
            }
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Bateria Inicial"
          keyboardType='numeric'
          placeholderTextColor={colors.red}
          value={bateriaInicialSelecionado}
          onChangeText={text => setBateriaInicialSelecionado(text)}
        />
        
        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={onOpenKmInicial}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color={colors.white} />
          <Text style={styles.txtButtonEnviar}>
            {
              imageBateriaInicialAnex ? "Foto Bateria Inicial Anexada ✅"
              : 
              "Foto Bateria Inicial"
            }
            </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Bateria Final"
          placeholderTextColor={colors.red}
          keyboardType='numeric'
          value={bateriaFinalSelecionado}
          onChangeText={text => setBateriaFinalSelecionado(text)}
          onEndEditing={() => calcDiferenca()}
        />

        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={onOpenKmFinal}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color={colors.white}/>
          <Text style={styles.txtButtonEnviar}>
          {
              imageBateriaFinalAnex ? "Foto Bateria Final Anexada ✅"
              : 
              "Foto Bateria Final"
            }
            </Text>
        </TouchableOpacity>   
        <View>
          <TextInput
              style={styles.input}
              placeholder="Diferença entre a bateria inicial e a final"
              placeholderTextColor={colors.red}
              editable={false}
              value={String(diferenca)}
              onChangeText={text => setDiferenca(text)}
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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          cancelButtonStyle={styles.ButtonAlert}
          confirmButtonStyle={styles.ButtonAlert}
          cancelButtonTextStyle={styles.txtButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertConfirm}
          showProgress={false}
          message="Tem certeza que deseja enviar o checklist?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Não"
          confirmText="Sim"
          confirmButtonColor={colors.red}
          cancelButtonColor={colors.gray}
          onCancelPressed={() => {
            hideAlertConfirm();
          }}
          onConfirmPressed={enviarChecklistEletrica}
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
          show={showBateriaInicial}
          showProgress={false}
          message="⚠️Preencha a Bateria Inicial"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.red}
          onConfirmPressed={() => {
            hideBateriaInicial();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showBateriaFinal}
          showProgress={false}
          message="⚠️Preencha a Bateria Final"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor={colors.red}
          onConfirmPressed={() => {
            hideBaterialFinal();
          }}
        />

        <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.ButtonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showValidacaoBateria}
        showProgress={false}
        message="⚠️A Bateria Inicial deve ser maior que a Bateria Final"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.red}
        onConfirmPressed={() => {
          hideAlertValidacaoBateria();
        }}
        />

        <AwesomeAlert
        contentContainerStyle={styles.containerAlert}
        confirmButtonStyle={styles.ButtonAlert}
        confirmButtonTextStyle={styles.txtButtonAlert}
        messageStyle={styles.txtTitleAlert}
        show={showValidacaoBateriaIni8}
        showProgress={false}
        message="⚠️A Bateria Inicial não pode ser maior que 8"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor={colors.red}
        onConfirmPressed={() => {
          hideAlertValidacaoBateriaIni8();
        }}
        />

         <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showValidacaoImageInicial}
          showProgress={false}
          message="⚠️Capture ou selecione uma foto da Bateria Inicial"
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
          message="⚠️Capture ou selecione uma foto da Bateria Final"
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
        <View style={{paddingVertical: 15}}></View>
        </ScrollView>
      )}    
    </KeyboardAvoidingView>
  );

  function exibirAlerta(){
    setShowAlertConfirm(true)
  }
};

export default gestureHandlerRootHOC(FormFrotaEletrica);