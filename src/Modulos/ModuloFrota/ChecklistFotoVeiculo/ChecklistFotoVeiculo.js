import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

//libs
import { Modalize } from 'react-native-modalize';
import IconFeather from 'react-native-vector-icons/Feather';
import api from '../../../services/api'
import {useNetInfo} from "@react-native-community/netinfo";
import { useNavigation } from '@react-navigation/native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker';
import { SliderBox } from "react-native-image-slider-box";
import AwesomeAlert from 'react-native-awesome-alerts';
//pages
import ModalErro from '../../../Components/Modal/ModalErro/ModalErro'
import ModalErroNetwok from '../../../Components/Modal/ModalErroNetwork/ModalErroNetwork'
import PageHeader from '../../../Components/PageHeader/PageHeader';
import colors from '../../../Utils/colors';
import styles from './style';

  const windowWidth = Dimensions.get('window').width;

  function ChecklistFotoVeiculo({ navigation: { goBack } }) {


  const netInfo = useNetInfo();

  const [showErrorNetWork, setShowErrorNetWork] = useState(false)
  const [showError, setShowError] = useState(false);
  const [imageChecklistAnex, setImageChecklistAnex] = useState(false)
  const [obsFotos, setObsFotos] = useState("");
  const [images, setImages] = useState([])
  const [showAlertConfirm, setShowAlertConfirm] = useState(false)

  const hideAlertConfirm = () => (
    setShowAlertConfirm(false)
  );

  const navigation = useNavigation();

  useEffect(()=>{
    setShowErrorNetWork(false)
    if (netInfo.isConnected) {
      setShowErrorNetWork(false)
    } else {
      setShowErrorNetWork(true)
    }
  },[netInfo])

  //configs image picks upload
  function onOpenImageChecklist(){
    modalizeRefImageChecklist.current?.open()
  }

  function onClose(){
    modalizeRefImageChecklist.current?.close()
  }

  const modalizeRefImageChecklist = useRef(null)

  const pickImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImageChecklistAnex(true)
    });
    onClose()
  }

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
      let source = [];
      images.map(data => source.push({
        uri: data.path
      }));
      setImages(source)
      console.log(source);
      setImageChecklistAnex(true)
    });
    onClose()
  }

  const enviarChecklistCombustao = async () =>{

    /*const dadosChecklistCombustaoEnvDTO = new ChecklistCombustaoEnvDTO(carroMaxima, carroReserva, departamentoSelecionado, condutorSelecionado, placaSelecionada, kmInicialSelecionado, kmFinalSelecionado, ronda1, ronda2, ronda3, oleo, pneu, correias, imageKmInicial, imageKmFinal, diferenca, "I");
    
    let data = new URLSearchParams();
    data.append('dadosChecklistCombustao', JSON.stringify(dadosChecklistCombustaoEnvDTO));
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
    }else
    if(!imageKmInicial.length){
      setShowValidacaoImageInicial(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else
    if(!imageKmFinal.length){
      setShowValidacaoImageFinal(true)
      setShowAlertSuccess(false)
      setShowAlertConfirm(false)
    }else{
    await api.post('/registrarChecklistCombustao', datastr)
    .then(function (response) {
    console.log(response)
    if(response.data.operacaoExecutada  == "N"){
      setShowErrorSend(true)
      setShowMsgErrorSend("Erro ao enviar: "+response.data.mensagemErro)
    }else{
    setShowAlertSuccess(true)
    setDepartamentoSelecionado([])
    setCondutorSelecionado([])
    setPlacaSelecionada([])
    setKmInicialSelecionado("")
    setImageKmInicial("")
    setKmFinalSelecionado("")
    setImageKmFinal("")
    setOleo("")
    setCorreias("")
    setPneu("")
    setDiferenca("")
    setImageKmInicialAnex(false)
    setImageKmFinalAnex(false)
  }
  setShowAlertConfirm(false)
    })
   .catch(function (error) {
     console.error(error);
   })
}*/
console.log("Enviar")
}

  return (
  <View style={styles.container}>
    <Modalize
      ref={modalizeRefImageChecklist}
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
              onPress={() => pickImageFromCamera()}
              >
                <Text style={styles.panelButtonTitle}>Capturar foto</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.panelButton}
              onPress={() => pickImageFromGallery()}
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

    <ScrollView>
    <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => navigation.goBack()}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 33,fontFamily: 'BebasNeue-Regular', color: colors.gray}}>Checklist Veículo</Text>
          </TouchableOpacity>
        </View>

    <ModalErroNetwok showErrorNetWork={showErrorNetWork}/>

    <ModalErro showError={showError} />

    <View style={{marginTop: 20}}>
      {
        imageChecklistAnex ? 
        <View 
        style={styles.containerSliderFotos}
        >
          <SliderBox 
          images={images} 
          parentWidth={windowWidth/1.2}
          dotColor={colors.red}
          sliderBoxHeight={400}
          /> 
        </View>
        : null
      }
    </View>
    

    <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={onOpenImageChecklist}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color={colors.white} />
          <Text style={styles.txtButtonEnviar}>
            {
              imageChecklistAnex ? "Fotos do veículo Anexadas ✅"
              : 
              "Fotos do Veículo"
            }
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Observação do veículo"
          placeholderTextColor={colors.red}
          value={obsFotos}
          onChangeText={text => setObsFotos(text)}
          multiline={true}
          textAlignVertical="top"
        />

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

        <AwesomeAlert
          contentContainerStyle={styles.containerAlert}
          cancelButtonStyle={styles.ButtonAlert}
          confirmButtonStyle={styles.ButtonAlert}
          cancelButtonTextStyle={styles.txtButtonAlert}
          confirmButtonTextStyle={styles.txtButtonAlert}
          messageStyle={styles.txtTitleAlert}
          show={showAlertConfirm}
          showProgress={false}
          message="Tem certeza que deseja enviar o checklist do veículo?"
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
          onConfirmPressed={enviarChecklistCombustao}
        />
        </ScrollView>
  </View>
  );
};

function exibirAlerta(){
  setShowAlertConfirm(true)
}

export default gestureHandlerRootHOC(ChecklistFotoVeiculo)



