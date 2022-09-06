import React, {useState, useEffect} from 'react';


import { SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

//libs
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style'



export default function RelFrota(){

  const navigation = useNavigation();
  
  const [infoCep, setInfoCep] = useState([])

  const getCep = async () =>{
    try { 
    const {data} = await api.get('/veiculos')
    setInfoCep(data)
  } catch(error) {
    if (error.response) {
    console.log({...error});
  }}
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
          <Picker
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
              label='Placas' 
              style={{
                color: '#000',
              }}
              />
              {
              infoCep.map(id => {
                return <Picker.Item 
                label={id.codigo_veiculo} 
                value={id.codigo_veiculo} 
                style={{
                  color: '#d21e2b',
                }}
                key='placas'
                />
              })
            }
          </Picker>
        </View>           
      </SafeAreaView>
    )
}



