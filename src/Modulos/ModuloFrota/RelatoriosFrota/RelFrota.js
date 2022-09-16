import React, {useState, useEffect} from 'react';


import { ScrollView, Text, View, TouchableOpacity, FlatList, RefreshControl} from 'react-native';

//libs
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import api from '../../../services/api'
import {Picker} from '@react-native-picker/picker'
//pages
import styles from './style'
import ConsultaChecklistComb from '../../../Components/ConsultaChecklistComb/index'


export default function RelFrota(){

  useEffect(()=>{
    getCep();
  },[])

  const navigation = useNavigation();
  
  const [infoCep, setInfoCep] = useState([])
  const [listaChecklistComb, setListaChecklistComb] = useState([])
  // refresh control
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () =>{
    setRefreshing(false)
    getListaCheckList();
  }

  const getCep = async () =>{
    try { 
    const {data} = await api.get('/obterDepartamentos')
    setInfoCep(data)
  } catch(error) {
    if (error.response) {
    console.log({...error});
    }}
  };

  const getListaCheckList = async () =>{
    try { 
    const {data} = await api.get('http://192.168.1.131:3000/obterListaChecklistCombustao')
    setListaChecklistComb(data)
    console.log(listaChecklistComb)
    console.log("aqui try")
  } catch(error) {
    if (error.response) {
    console.log({...error});
    }}
  };
  
    return(
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#d21e2b']}/>
      }>
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
                label={id.codigo_departamento} 
                value={id.codigo_departamento} 
                style={{
                  color: '#d21e2b',
                }}

                key='departamento'
                />
              })
            }
          </Picker>
        </View>       

        <TouchableOpacity
        onPress={getListaCheckList}
        >
            <Text>trazer</Text>
        </TouchableOpacity>

        <FlatList 
            data={listaChecklistComb}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <ConsultaChecklistComb data={item} />}
        />  
      </ScrollView>
    )
}



