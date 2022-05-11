import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal
} from 'react-native';

//libs
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import BottomSheet from  'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
//pages
import styles from './style';
import { ModalPicker } from '../../../Components/Modal/ModalPicker';
import { ModalPickerPlaca } from '../../../Components/Modal/ModalPickerPlaca';

const schema = yup.object({
    //condutor: yup.string().required("Selecione o condutor"),
    //placaVeiculo: yup.string().required("Selecione o placa do veículo"),
    kmInicial: yup.number().required("Preencha o Km Inicial"),
    //fotoKmInicial: yup.string().required("Envie a foto do KM Inicial"),
    kmFinal: yup.number().required("Preencha o Km Final!"),
    //fotoKmFinal: yup.string().required("Envie a foto do Km Final")
})



export default function FormFrota({ navigation: { } }) {

      const navigation = useNavigation();

      //configs modais picks
      const[chooseData, setChooseData] = useState ("Selecione o condutor");
      const[modalVisible, setModalVisible] = useState (false);

      const changeModalVisibility = (bool) => {
        setModalVisible(bool)
      }

      const setData = (Option) => {
        setChooseData(Option)
      }

      const[chooseDataPlaca, setChooseDataPlaca] = useState ("Selecione a placa do veículo");
      const[modalVisiblePlaca, setModalVisiblePlaca] = useState (false);

      const changeModalVisibilityPlaca = (bool) => {
        setModalVisiblePlaca(bool)
      }

      const setDataPlaca = (OptionPlaca) => {
        setChooseDataPlaca(OptionPlaca)
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

      //configs validação campos com yup
      const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
      })

      function enviarForm (data){
        if(validar()){
          console.log("Salvou")
        }
          console.log(data)

      }

      //config validações campo sem yup
      const [errorPicker, setErrorPicker] = useState(null);
      const [errorFoto, setErrorFoto] = useState(null);

      const validar = ()=>{

      }

  return (
      
    <>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      
            <Animated.View 
            style={{flex: 1, opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),}}>
            <Animatable.View animation="fadeInDown"  style={styles.containerCaixa}>
            <View style={styles.textHeader}>
                <Text style={styles.textConfig}>Gestão de Frota</Text>
            </View>

            <View style={styles.icon}>
                <TouchableOpacity
                onPress={ () => navigation.navigate('HomeModulos')}
                >
                <Icon name="chevron-left" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
          </Animatable.View>
      <ScrollView>
        <Animatable.View animation={"fadeInUp"}>
        <View style={styles.boxTitle}>
          <Text style={styles.textTitle}>Checklist Máxima</Text>
        </View>
        

        <Text style={styles.txtCaption}>Condutor:</Text>
        <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={() => changeModalVisibility(true)}
              >
              <Text style={styles.txtButtonPicker}>{chooseData}</Text>
              <Icon style={styles.iconButonPicker} name="chevron-down" size={25} color="#fff" />
              </TouchableOpacity>
           <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisible}
            nRequestClose={() => changeModalVisibility(false)}
           >
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
              />
           </Modal>
        {errors.condutor && <Text style={styles.labelError}>{errors.condutor?.message}</Text>}


        <Text style={styles.txtCaption}>Placa Veículo:</Text>
          <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={() => changeModalVisibilityPlaca(true)}
              >
              <Text style={styles.txtButtonPicker}>{chooseDataPlaca}</Text>
              <Icon style={styles.iconButonPicker} name="chevron-down" size={25} color="#fff" />
            </TouchableOpacity>
           <Modal
            transparent={true}
            animationType="fade"
            visible={modalVisiblePlaca}
            nRequestClose={() => changeModalVisibilityPlaca(false)}
           >
              <ModalPickerPlaca
                changeModalVisibilityPlaca={changeModalVisibilityPlaca}
                setDataPlaca={setDataPlaca}
              />
           </Modal>
        {errors.placaVeiculo && <Text style={styles.labelError}>{errors.placaVeiculo?.message}</Text>}
        
        <Text style={styles.txtCaption}>Km Inicial:</Text>
        <Controller
        control={control}
        name="kmInicial"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
          style={[styles.input,{
            borderWidth: errors.kmInicial && 1,
            borderColor: errors.kmInicial && '#ff375b'
          }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite o KM Inicial do veícuklo"
            keyboardType='numeric'
          />
        )}
        />
        {errors.kmInicial && <Text style={styles.labelError}>{errors.kmInicial?.message}</Text>}
        
          
            <Text style={styles.txtCaption}>Foto Km Inicial:</Text>
              <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={() => this.bs.current.snapTo(0)}
              >
                <Icon style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
                <Text style={styles.txtButtonEnviar}>Adicionar arquivo</Text>
              </TouchableOpacity>
        {errors.fotoKmInicial && <Text style={styles.labelError}>{errors.fotoKmInicial?.message}</Text>}

        <Text style={styles.txtCaption}>Km Final:</Text>
          <Controller
          control={control}
          name="kmFinal"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
            style={[styles.input,{
              borderWidth: errors.kmFinal && 1,
              borderColor: errors.kmFinal && '#ff375b'
            }]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Digite o KM Final do veícuklo"
            />
          )}
        />
        {errors.kmFinal && <Text style={styles.labelError}>{errors.kmFinal?.message}</Text>}

           <Text style={styles.txtCaption}>Foto Km Final:</Text>
              <TouchableOpacity
              style={styles.buttonArquivo}
              onPress={() => this.bs.current.snapTo(0)}
              >
                <Icon style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
                <Text style={styles.txtButtonEnviar}>Adicionar arquivo</Text>
              </TouchableOpacity>
        {errors.fotoKmFinal && <Text style={styles.labelError}>{errors.fotoKmFinal?.message}</Text>}

        <View>
          <TouchableOpacity
          onPress={handleSubmit(enviarForm)}
          style={styles.button}
          >
            <Icon style={styles.iconButtonEnviar} name="send" size={25} color="#fff" />
            <Text style={styles.txtButton}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>  
        </Animatable.View>
        <View style={{paddingVertical: 30}}></View>
        </ScrollView>    
    </Animated.View>
    </>
  );
};



