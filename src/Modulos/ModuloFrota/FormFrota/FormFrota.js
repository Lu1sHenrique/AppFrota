import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';

//libs
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Animatable from 'react-native-animatable';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import BottomSheet from  'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Checkbox from "react-native-bouncy-checkbox";
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style';


const schema = yup.object({
    kmInicial: yup.string().min(2, "O km Inicial deve ter pelo menos 2 digitos").required("Preencha o Km Inicial"),
    kmFinal: yup.string().min(2, "O km Final deve ter pelo menos 2 digitos").required("Preencha o Km Final!")
})


export default function FormFrota({ navigation: { goBack} }) {

      const navigation = useNavigation();

      //states picker
      const [departamento] = useState(['Técnica', 'Monitoração', 'Estoque', 'RH']);
      const [departamentoSelecionado, setDepartamentoSelecionado] = useState([]);
      const [condutor] = useState(['Sergio', 'Wander', 'Rodrigo', 'Ariel']);
      const [condutorSelecionado, setCondutorSelecionado] = useState([]);
      const [placa] = useState(['QXA-5945', 'RGB-2A74', 'FM-8C70', 'QUV-4221']);
      const [placaSelecionada, setPlacaSelecionada] = useState([]);
      const [oleo, setOleo] = useState("");
      const [pneu, setPneu] = useState("");
      const [correias, setCorreias] = useState("");
      const [carroMaxima, setCarroMaxima] = useState(true);
      const [carroReserva, setCarroReserva] = useState(false);
      const [ronda1, setRonda1] = useState(false);
      const [ronda2, setRonda2] = useState(false);
      const [ronda3, setRonda3] = useState(false);

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
      <ScrollView>
        <Animatable.View animation={"fadeInUp"}>
        <View style={styles.ContainerButtonBack}>
          <TouchableOpacity
           style={styles.ButtonBack}
           onPress={() => goBack()}
           >
            <IconFeather style={styles.IconBack} name="arrow-left-circle" size={35} />
            <Text style={{fontSize: 28}}>CheckList Combustão</Text>
          </TouchableOpacity>
        </View>
        
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
              label='Departamento' 
              style={{
                color: '#000',
              }}
              />
              {
              departamento.map(dep => {
                return <Picker.Item 
                label={dep} 
                value={dep} 
                style={{
                  color: '#d21e2b',
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
              condutor.map(cond => {
                return <Picker.Item 
                label={cond} 
                value={cond} 
                style={{
                  color: '#d21e2b',
                }}
                key='condutor'
                />
              })
            }
          </Picker>
        </View>          
        
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
            placa.map(plac => {
              return <Picker.Item label={plac} value={plac}
              style={{
                color: '#d21e2b',
              }}
              key='placa'
              />
            })
          }
        </Picker>
        {errors.placaVeiculo && <Text style={styles.labelError}>{errors.placaVeiculo?.message}</Text>}
        
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
            placeholder="Km Inicial"
            keyboardType='numeric'
            placeholderTextColor={"#d21e2b"}
          />
        )}
        />
        {errors.kmInicial && <Text style={styles.labelError}>{errors.kmInicial?.message}</Text>}
        
        <TouchableOpacity
        style={styles.buttonArquivo}
        onPress={() => this.bs.current.snapTo(0)}
        >
          <IconFeather style={styles.iconButtonUpLoad} name="upload" size={25} color="#fff" />
          <Text style={styles.txtButtonEnviar}>Foto Km Inicial</Text>
        </TouchableOpacity>

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
              placeholder="Km Final"
              placeholderTextColor={"#d21e2b"}
              keyboardType='numeric'
            />
          )}
        />
        {errors.kmFinal && <Text style={styles.labelError}>{errors.kmFinal?.message}</Text>}

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
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Ronda</Text>
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
          onPress={handleSubmit(enviarForm)}
          style={styles.button}
          >
            <Text style={styles.txtButton}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>  
        </Animatable.View>
        <View style={{paddingVertical: 15}}></View>
        </ScrollView>    
    </KeyboardAvoidingView>
  );

  //enviar form
  function enviarForm (data){
    /*if(ronda1 === true){
      setRonda1("S")
    }else{
      setRonda1("N")
    }
    if(ronda2 === true){
      setRonda2("S")
    }else{
      setRonda2("N")
    }
    if(ronda3 === true){
      setRonda3("S")
    }else{
      setRonda3("N")
    }*/
      console.log(JSON.parse(carroMaxima), carroReserva, departamentoSelecionado, condutorSelecionado, placaSelecionada, parseInt(data.kmInicial), parseInt(data.kmFinal), ronda1, ronda2, ronda3, oleo, pneu, correias)
  }
};



