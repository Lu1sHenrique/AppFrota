import React, {useState, useEffect} from 'react';


import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

//libs
//import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style'



export default function RelFrota(){

  const navigation = useNavigation();

  const [infoCep, setInfoCep] = useState([])
  const [filmeSelecionado, setFilmeSelecionado] = useState([]);

  const getCep = async () =>{
    try { 
    const data = await api.post('/veiculos',{
      "codigo_veiculo": 6,
      "placa_veiculo": "FEL1236",
      "codigo_usuario_acesso": 317,
      "data_hora_gravacao": null,
      "situacao_txt": null,
      "excluido": null
  })
    return(data)
  } catch(error) {
    console.log((error))
  }
  console.log(infoCep)
};

  useEffect(()=>{
    getCep();
  },[])

    return(
      <SafeAreaView>
        <View animation="fadeInDown"  style={styles.containerCaixa}>
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
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
          onPress={getCep}
          >
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>    
      </SafeAreaView>
    )
  }
   



