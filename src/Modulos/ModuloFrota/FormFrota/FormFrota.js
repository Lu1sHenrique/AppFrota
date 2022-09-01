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
import Checkbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker'
import api from '../../../services/api'
import AwesomeAlert from 'react-native-awesome-alerts';
//pages
import styles from './style';
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro';


export default function FormFrota() {

      useEffect(()=>{
        getDepartamentos();
        getCondutores();
        getPlacas();
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
      const [kmInicialSelecionado, setKmInicialSelecionado] = useState("");
      const [kmFinalSelecionado, setKmFinalSelecionado] = useState("");
      const [oleo, setOleo] = useState("");
      const [pneu, setPneu] = useState("");
      const [correias, setCorreias] = useState("");
      //states checks
      const [carroMaxima, setCarroMaxima] = useState(true);
      const [carroReserva, setCarroReserva] = useState(false);
      const [ronda1, setRonda1] = useState(false);
      const [ronda2, setRonda2] = useState(false);
      const [ronda3, setRonda3] = useState(false);
      //states alerts
      const [showError, setShowError] = useState(false);
      const [showAlertConfirm, setShowAlertConfirm] = useState(false)
      const [showAlertSuccess, setShowAlertSuccess] = useState(false)
      const [showValidacaoDep, setShowValidacaoDep] = useState(false)
      const [showValidacaoCond, setShowValidacaoCond] = useState(false)
      const [showValidacaoPlac, setShowValidacaoPlac] = useState(false)
      const [showErroConec, setShowErroConec] = useState(false)
      const [showKmInicial, setShowKmInicial] = useState(false)
      const [showKmFinal, setShowKmFinal] = useState(false)
      const [showValidacaoKm, setShowValidacaoKm] = useState(false)
      //states controle S ou N
      const [showSouNCarroMaxima, setShowSouNCarroMaxima] = useState("")
      const [showSouNCarroReserva, setShowSouNCarroReserva] = useState("")
      const [showRota1, setShowRota1] = useState("")
      const [showRota2, setShowRota2] = useState("")
      const [showRota3, setShowRota3] = useState("")


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

      const hideKmInicial = () => (
        setShowKmInicial(false)
      );

      const hideKmFinal = () => (
        setShowKmFinal(false)
      );

      const hideAlertValidacaoKm = () => (
        setShowValidacaoKm(false)
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
      }finally{
        setIsLoading(false)
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
      }finally{
        setIsLoading(false)
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
      }finally{
        setIsLoading(false)
      }
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

      function clickCheckCarroMaxima(){
        setCarroMaxima(!carroMaxima)
        setCarroReserva(!carroReserva)
      }

      function clickCheckCarroReserva(){
        setCarroReserva(!carroReserva)
        setCarroMaxima(!carroMaxima)
      }

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
            <Text style={{fontSize: 28, color: '#424242'}}>Checklist Combustão</Text>
          </TouchableOpacity>
        </View>

        <ModalErro showError={showError} />

        <View style={{flexDirection: 'row', paddingVertical: 20, alignSelf: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: "#d21e2b"}}>
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{width: '40%', marginRight: 15}}>
              <Checkbox
              size={25}
              text="Carro Máxima"
              fillColor="#d21e2b"
              textStyle={{
                textDecorationLine: "none",
                fontSize: 15,
                fontWeight: 'bold'
              }}
              isChecked={carroMaxima}
              disableBuiltInState
              onPress={clickCheckCarroMaxima}
              />
            </View>
            <View style={{width: '40%'}}>
              <Checkbox
                size={25}
                text="Carro Reserva"
                fillColor="#d21e2b"
                textStyle={{
                  textDecorationLine: "none",
                  fontSize: 15,
                  fontWeight: 'bold'
                }}
                isChecked={carroReserva}
                disableBuiltInState
                onPress={clickCheckCarroReserva}
              />
            </View>
          </View>
        </View>

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
              label='Departamentos' 
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
              label='Condutores' 
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
        
        <View>
          <TextInput
            style={styles.input}
              placeholder="Km Inicial"
              keyboardType='numeric'
              placeholderTextColor={"#d21e2b"}
              onChangeText={text => setKmInicialSelecionado(text)}
              value={kmInicialSelecionado}
          />
        </View>

        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={() => this.bs.current.snapTo(0)}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Foto Km Inicial</Text>
        </TouchableOpacity>

          <View>
            <TextInput
              style={styles.input}               
                placeholder="Km Final"
                placeholderTextColor={"#d21e2b"}
                keyboardType='numeric'
                onChangeText={text => setKmFinalSelecionado(text)}
                value={kmFinalSelecionado}
            />
          </View>

        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={() => this.bs.current.snapTo(0)}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Foto Km Final</Text>
        </TouchableOpacity>

        <View style={styles.ContainerRonda}>
          <View style={{marginVertical: 25, marginHorizontal: 30}}>
            <View style={{marginVertical: 15}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#424242'}}>Ronda</Text>
            </View>
              <View style={{width: '100%',flexDirection: 'row'}}>
                <Checkbox
                    size={25}
                    text="Rota 1"
                    fillColor="#d21e2b"
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginRight: 20
                    }}
                    isChecked={ronda1}
                    onPress={() => setRonda1(!ronda1)}
                  />
                  <Checkbox
                    size={25}
                    text="Rota 2"
                    fillColor="#d21e2b"
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginRight: 20
                    }}
                    isChecked={ronda2}
                    onPress={() => setRonda2(!ronda2)}
                  />
                  <Checkbox
                    size={25}
                    text="Rota 3"
                    fillColor="#d21e2b"
                    textStyle={{
                      textDecorationLine: "none",
                      fontSize: 15,
                      fontWeight: 'bold'
                    }}
                    isChecked={ronda3}
                    onPress={() => setRonda3(!ronda3)}
                  />
            </View>
          </View>
        </View>    
        
        <View>
          <TextInput
              style={styles.input}
              placeholder="Troca de Óleo (Km Inicail)"
              placeholderTextColor={"#d21e2b"}
              keyboardType='numeric'
              value={oleo}
              onChangeText={text => setOleo(text)}
            />
        </View>

        <View>
          <TextInput
              style={styles.input}
              placeholder='Pneu'
              placeholderTextColor={"#d21e2b"}
              keyboardType='numeric'
              value={pneu}
              onChangeText={text => setPneu(text)}
            />
        </View>

        <View>
          <TextInput
              style={styles.input}
              placeholder="Correias (Km Inicail)"
              placeholderTextColor={"#d21e2b"}
              keyboardType='numeric'
              value={correias}
              onChangeText={text => setCorreias(text)}
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
        <View style={{paddingVertical: 15}}></View>

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
          show={showKmInicial}
          showProgress={false}
          message="Preencha o Km Inicial com no mínimo dois dígitos"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideKmInicial();
          }}
        />

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showKmFinal}
          showProgress={false}
          message="Preencha o Km Final com no mínimo dois dígitos"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideKmFinal();
          }}
        />

          <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          confirmButtonStyle={styles.ButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showValidacaoKm}
          showProgress={false}
          message="O Km Inicial deve ser menor que o Km Final"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Ok"
          confirmButtonColor="#d21e2b"
          onConfirmPressed={() => {
            hideAlertValidacaoKm();
          }}
        />
        </ScrollView>
      )}    
    </KeyboardAvoidingView>
  );

  function exibirAlerta(){
    setShowAlertConfirm(true)
  }

  //enviar form
  function enviarForm (data){
    if(carroMaxima == true){
      setShowSouNCarroMaxima("S")
    }else{
      setShowSouNCarroMaxima("N")
    }
    if(carroReserva == true){
      setShowSouNCarroReserva("S")
    }else{
      setShowSouNCarroReserva("N")
    }
    if(ronda1 == true){
      setShowRota1("S")
    }else{
      setShowRota1("N")
    }
    if(ronda2 == true){
      setShowRota2("S")
    }else{
      setShowRota2("N")
    }
    if(ronda3 == true){
      setShowRota3("S")
    }else{
      setShowRota3("N")
    }

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
    if(kmInicialSelecionado.length<2){
      setShowKmInicial(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else
    if(kmFinalSelecionado.length<2){
      setShowKmFinal(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else
    if(parseInt(kmInicialSelecionado) >= parseInt(kmFinalSelecionado)){
      setShowValidacaoKm(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else{
      setShowAlertConfirm(false)
      console.log(showSouNCarroMaxima, showSouNCarroReserva, departamentoSelecionado, condutorSelecionado, placaSelecionada, kmInicialSelecionado, kmFinalSelecionado, showRota1, showRota2, showRota3, oleo, pneu, correias)
      setShowAlertSuccess(true)
    }
  }
};