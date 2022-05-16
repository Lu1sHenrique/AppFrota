import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
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
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style';


const schema = yup.object({
    kmInicial: yup.string().min(2, "O km Inicial deve ter pelo menos 2 digitos").required("Preencha o Km Inicial"),
    kmFinal: yup.string().min(2, "O km Final deve ter pelo menos 2 digitos").required("Preencha o Km Final!")
})


export default function FormFrota({ navigation: { } }) {

      const navigation = useNavigation();

      //states picker
      const [condutor] = useState(['Sergio', 'Wander', 'Rodrigo', 'Ariel']);
      const [condutorSelecionado, setCondutorSelecionado] = useState([]);
      const [placa] = useState(['QXA-5945', 'RGB-2A74', 'FM-8C70', 'QUV-4221']);
      const [placaSelecionada, setPlacaSelecionada] = useState([]);

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
            console.log(data, condutorSelecionado, placaSelecionada)
      }

  return (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <ImageBackground  
        source={require('../../../assets/Fundo.png')} 
        style={{width: "100%", height: "100%"}}  
        >
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
        <Picker
          selectedValue={condutorSelecionado}
          onValueChange={(itemValue) =>
            setCondutorSelecionado(itemValue)
          }
            dropdownIconColor='#fff'
            style={{
            backgroundColor:'#f77b77',
            width: '95%',
            alignSelf: 'center',
            color: '#fff',
            marginTop: 5,
          }}
          dropdownIconRippleColor='#fff'
          >
          {
            condutor.map(cond => {
              return <Picker.Item label={cond} value={cond} 
               style={{
                 color: '#f77b77'
               }}
              />
            })
          }
        </Picker>
    
        <Text style={styles.txtCaption}>Placa Veículo:</Text>
        <Picker
          selectedValue={placaSelecionada}
          onValueChange={(itemValue) =>
            setPlacaSelecionada(itemValue)
          }
          dropdownIconColor='#fff'
          style={{
            backgroundColor:'#f77b77',
            width: '95%',
            alignSelf: 'center',
            color: '#fff',
            marginTop: 5
          }}
          dropdownIconRippleColor='#fff'
          >
          {
            placa.map(plac => {
              return <Picker.Item label={plac} value={plac}
              style={{
                color: '#f77b77',
              }}
              />
            })
          }
        </Picker>
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
              keyboardType='numeric'
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
        <View style={{paddingVertical: 15}}></View>
        </ScrollView>    
    </Animated.View>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};



