import React, {useState} from 'react';
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
//pages
import styles from './style'



export default function RelFrota(){

  navigation = useNavigation();

  const [infoCep, setInfoCep] = useState({})
  const [searchCep, setSearchCep] = useState('')

  const getCep = async () =>{
    try { 
    const {data} = await api.get(+searchCep+'/json/')
    setInfoCep(data)
  } catch(error) {
    console.log(error)
 }
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

        <View>
          <TextInput
            placeholder='DIGITE O CEP'
            value={searchCep}
            onChangeText= {text => setSearchCep(text)}
          />
          <TouchableOpacity
          onPress={getCep}
          >
            <Text>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Text>Rua: {infoCep.logradouro}</Text>
          </View>

          <View>
            <Text>Bairro: {infoCep.bairro}</Text>
          </View>

          <View>
            <Text>Cidade: {infoCep.localidade}</Text>
          </View>

          <View>
            <Text>Estado: {infoCep.uf}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
   



