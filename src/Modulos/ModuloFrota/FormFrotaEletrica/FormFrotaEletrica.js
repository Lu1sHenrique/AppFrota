import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator
} from 'react-native';

//libs
import * as Animatable from 'react-native-animatable';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import BottomSheet from  'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import {Picker} from '@react-native-picker/picker'
import api from '../../../services/api'
import AwesomeAlert from 'react-native-awesome-alerts';
//pages
import styles from './style';
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro';


export default function FormFrota() {

      useEffect(()=>{
        getPlacas();
        getDepartamentos();
        getCondutores();
      },[])

      const navigation = useNavigation();

      const [isLoading, setIsLoading] = useState(true);

      //states picker
      const [departamentos, setDepartamentos] = useState([]);
      const [departamentoSelecionado, setDepartamentoSelecionado] = useState([]);
      const [condutores, setCondutores] = useState([]);
      const [condutorSelecionado, setCondutorSelecionado] = useState([]);
      const [placas, setPlacas] = useState([]);
      const [placaSelecionada, setPlacaSelecionada] = useState([]);
      const [diferenca, setDiferenca] = useState(0);
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

      const getDepartamentos = async () =>{
        showError && setShowError(false)
        setIsLoading(true)
        try { 
        const {data} = await api.get('/departamentos')
        setIsLoading(false)
        setDepartamentos(data)
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
        const {data} = await api.get('/condutores')
        setIsLoading(false)
        setCondutores(data)
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
        const {data} = await api.get('/veiculos')
        setIsLoading(false)
        setPlacas(data)
      } catch(error) {
        setIsLoading(false)
        setShowError(true)
      } finally {
        setIsLoading(false);
      }
      }

      function calcDiferenca(){
        setDiferenca(parseInt(bateriaInicialSelecionado)-parseInt(bateriaFinalSelecionado))
      }

      //configs image picks upload
      const renderInner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}> 
            <Text style={styles.panelTitle}>Enviar foto</Text>
            <Text style={styles.panelSubtitle}>Escolha como deseja enviar a foto</Text>

            <TouchableOpacity 
            style={styles.panelButton}
            onPress={() => launchCamera()}
            >
              <Text style={styles.panelButtonTitle}>Capturar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.panelButton}
            onPress={() => launchImageLibrary()}
            >
              <Text style={styles.panelButtonTitle}>Escolher da galeria</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.panelButton}
            onPress={() => this.bs.current.snapTo(1)}
            >
              <Text style={styles.panelButtonTitle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
         

      const renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
           <View  style={styles.panelHandle}>
           </View>
          </View>
        </View>
      );

      bs = React.createRef();
      fall = new Animated.Value(1);

  return (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[330, 0]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={this.fall}
        />
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
      <ScrollView>
        <Animatable.View animation={"fadeInUp"}>
        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => navigation.navigate('HomeFrota')}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 28, color: '#424242'}}>Checklist Elétrica</Text>
          </TouchableOpacity>
        </View>

        <ModalErro showError={showError} />

        <View style={{marginTop: 20}}>
          <Picker
            selectedValue={departamentoSelecionado}
            onValueChange={(itemValue) =>
              setDepartamentoSelecionado(itemValue)
            }
              dropdownIconColor='#fff'
              style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff',
              marginTop: 5
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
              label='Departamento' 
              style={{
                color: '#000',
              }}
              />
              {
              departamentos.map(id => {
                return <Picker.Item 
                label={id.nome_departamento} 
                value={id.nome_departamento} 
                style={{
                  color: '#d21e2b'
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
              dropdownIconColor='#fff'
              style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff',
              marginTop: 5
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
              label='Condutor' 
              style={{
                color: '#000',
              }}
              />
              {
              condutores.map(id => {
                return <Picker.Item 
                label={id.nome} 
                value={id.nome}
                style={{
                  color: '#d21e2b'
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
            dropdownIconColor='#fff'
            style={{
              backgroundColor:'#d21e2b',
              width: '85%',
              alignSelf: 'center',
              color: '#fff',
              marginTop: 5
            }}
            dropdownIconRippleColor='#fff'
            >
              <Picker.Item 
                label='Placa Veículo' 
                style={{
                  color: '#000',
                }}
                />
            {
              placas.map(id => {
                return <Picker.Item 
                label={id.placa_veiculo} 
                value={id.placa_veiculo}
                style={{
                  color: '#d21e2b'
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
          placeholderTextColor={"#d21e2b"}
          value={bateriaInicialSelecionado}
          onChangeText={text => setBateriaInicialSelecionado(text)}
        />
        
        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={() => this.bs.current.snapTo(0)}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Foto Bateria Inicial</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Bateria Final"
          placeholderTextColor={"#d21e2b"}
          keyboardType='numeric'
          value={bateriaFinalSelecionado}
          onChangeText={text => setBateriaFinalSelecionado(text)}
          onEndEditing={() => calcDiferenca()}
        />

        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={() => this.bs.current.snapTo(0)}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Foto Bateria Final</Text>
        </TouchableOpacity>   
        <View>
          <TextInput
              style={styles.input}
              placeholder="Diferença entre a bateria inicical e a final"
              placeholderTextColor={"#d21e2b"}
              editable={true}
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
          confirmButtonColor="#d21e2b"
          cancelButtonColor='#424242'
          onCancelPressed={() => {
            hideAlertConfirm();
          }}
          onConfirmPressed={() => {
            enviarForm();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertSuccess}
          showProgress={false}
          message="O checklist foi enviado com sucesso"
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
          show={showValidacaoDep}
          showProgress={false}
          message="Selecione um departamento"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
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
          message="Selecione um condutor"
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
          show={showValidacaoPlac}
          showProgress={false}
          message="Selecione uma placa"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showBateriaInicial}
          showProgress={false}
          message="Preencha a Bateria Inicial"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
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
          message="Preencha a Bateria Final"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
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
        message="A Bateria Inicial deve ser maior que a Bateria Final"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonColor="#d21e2b"
        onConfirmPressed={() => {
          hideAlertValidacaoBateria();
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

  //enviar form
  function enviarForm (){
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
    if(bateriaInicialSelecionado.length <= 0){
      setShowBateriaInicial(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else
    if(bateriaFinalSelecionado.length <= 0){
      setShowBateriaFinal(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else
    if(parseInt(bateriaInicialSelecionado) <= parseInt(bateriaFinalSelecionado)){
      setShowValidacaoBateria(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }
    else{
      setShowAlertConfirm(false)
      console.log(departamentoSelecionado, condutorSelecionado, placaSelecionada, bateriaInicialSelecionado, bateriaFinalSelecionado, diferenca)
      setShowAlertSuccess(true)
    }
  }
};



