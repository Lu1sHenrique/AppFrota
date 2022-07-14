import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from 'react-native';

//libs
//import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style'



export default function RelFrota(){

  useEffect(()=>{
    getCep();
  },[])

  const navigation = useNavigation();

  const [infoCep, setInfoCep] = useState([])
  const [filmeSelecionado, setFilmeSelecionado] = useState([]);

  const getCep = async () =>{
    try { 
    const {data} = await api.get('paises/')
    setInfoCep(data)
  } catch(error) {
    console.log(error)
 }
 console.log(infoCep)
  };

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
          <Picker
            selectedValue={filmeSelecionado}
            onValueChange={(itemValue) =>
              setFilmeSelecionado(itemValue)
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
              label='Filmes' 
              style={{
                color: '#000',
              }}
              />
              {
              infoCep.map(id => {
                return <Picker.Item 
                label={id.nome.abreviado} 
                value={id.nome.abreviado} 
                style={{
                  color: '#d21e2b',
                }}
                key='filmes'
                />
              })
            }
          </Picker>
        </View>    
      </SafeAreaView>
    )
  }
   



